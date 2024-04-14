/*Token ini biasanya mempunyai 4 tipe:
ACCESS: Token akses untuk JWT (authentication)
REFRESH: Token Refresh untuk berfungsi memperbarui token yang sudah expired,
RESET_PASSWORD: Token untuk reset password (ini implementasi untuk reset password via email),
VERIFY_EMAIL: Token untuk verify email (biasanya di pakai untuk verifikasi email)

buatlah file tokens.js di folder config untuk menyimpan variable tipe token yang bakal kita pakai.*/

// config/tokens.js
const tokenTypes = {
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail',
};

module.exports = {
  tokenTypes,
}; 


/*Passport
passport-jwt adalah salah satu dari banyak strategi otentikasi yang dapat digunakan dengan Passport.js 
untuk mengautentikasi user berdasarkan token JSON Web Token (JWT). JWT adalah metode populer untuk mengamankan 
komunikasi antara dua pihak dengan cara yang aman.

Secara singkat, passport-jwt bekerja dengan cara berikut:

1.Generasi Token JWT: Ketika user berhasil melakukan otentikasi dan mendapatkan token JWT, 
Passport.js menggunakan passport-jwt untuk memeriksa token tersebut.

2.Verifikasi Token: passport-jwt akan memverifikasi apakah token JWT yang dikirim oleh user adalah sah. 
Ini mencakup memeriksa tanda tangan digital dalam token dan memeriksa apakah token belum kedaluwarsa.

3.Otentikasi Pengguna: Jika token JWT valid, passport-jwt memungkinkan Kalian untuk mengaitkan informasi user 
ke permintaan HTTP, sehingga Kalian tahu siapa user yang sedang melakukan permintaan tersebut.

4.Proteksi Rute: Kalian dapat menggunakan Passport.js dan passport-jwt untuk melindungi rute-rute tertentu 
dalam aplikasi Kalian sehingga hanya user yang telah mendapatkan token JWT yang dapat mengaksesnya. */

//config/passport.js
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const prisma = require('../../prisma/client')

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await prisma.user.findFirst({where: {id: payload.sub}});
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};


/*jwtStrategy ini fungsinya untuk proses verifikasi token JWT kalian, token JWT ini equal dengan data user kalian. 
jadi setelah passport memverifikasi data hashing token JWT tersebut kalian wajib mengembalikan isi dari token 
yaitu payload data user. nah data user ini yang akan berguna di controller kalian untuk mengetahui user siapa 
yang lagi login.*/

// pasang jwtStrategy ini di app.js kalian

const { jwtStrategy } = require('./config/passport');
const passport = require('passport');

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);
 

/*
Auth Middleware
Setelah kalian set up passport untuk verify jwt kalian, sekarang kita akan membuat middleware untuk memakai 
passport di setiap pengecekan route. jadi file auth inilah yang akan dipakai berkali kali untuk 
blocking authentication di setiap route kalian.

buatlah file auth.js di folder middleware
*/
// middleware/auth.js
const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const verifyCallback = (req, resolve, reject) => async (err, user, info) => {
  if (err || info || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;

  resolve();
};

const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject))(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;


/*passport.authenticate ini otomatis akan memakai Jwt Strategy kalian, jadi hasil callbacknya akan sesuai dari 
return jwtStrategy yang dibuat tadi yaitu mempunyai err, user, info.
disini gua pakai HOC (Higher Order Function) buat dapetin verify callback agar codenya lebih rapih.

sekarang set up auth kalian sudah selesai, kalian bisa pakai middleware auth untuk memblock route yang kalian 
mau authenticate atau route yang wajib login.*/

router
  .route('/:userId')
  .get(auth(), userController.getUser)

/*contoh route get user by id ini, disini ada pengecekan JWT token jadi user yang mau hit API ini wajib membawa 
token JWT di headersnya agar bisa masuk ke API get user by id. */


/*JWT Token Generate

Setelah Set Up auth middleware kita sudah bisa verifikasi token JWT di server project IS. 
nah gimana user bisa mendapatkan token JWT  ?

yes, untuk mendapatkan token tersebut maka kita harus mempunyai register & login API terlebih dahulu.

User Service
Pertama tama kita perlu service untuk create user dan get user by email, karena register itu sama saja seperti 
create user bedanya kita akan hashing password user + generate JWT di dalam proses create usernya. 
nah untuk get user by email ini berfungsi untuk mencari user ketika kita melakukan login untuk mengetahui 
email tersebut sudah ada usernya atau belum. */

services/user.service.js
const httpStatus = require('http-status');
const prisma = require('../../prisma/client')
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  userBody.password = bcrypt.hashSync(userBody.password, 8);

  return prisma.user.create({
    data: userBody
  });
};


/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email }
  });
};


module.exports = {
  createUser,
  getUserByEmail
};

/*Token Service

Token Service ini berfungsi untuk generate Auth Token dan menyimpannya di table Token.
sebelum kita mulai, kita harus menambahkan env baru yaitu:

JWT_SECRET=thisisasamplesecret
JWT_ACCESS_EXPIRATION_MINUTES=30
JWT_REFRESH_EXPIRATION_DAYS=30

jwt secret ini bumbu untuk hashing JWT token kita, dan variable expiration untuk setting rentang waktu kapan 
token kita akan habis masanya.
 */

// update config.js kalian:
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
  },
};


// nah sekarang buat token.service.js di folder services:
const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config');
// const { tokenTypes } = require('../config/tokens');
const prisma = require('../../prisma/client')

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

/**
 * Save a token
 * @param {string} token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {boolean} [blacklisted]
 * @returns {Promise<Token>}
 */
const saveToken = async (token, userId, expires, type, blacklisted = false) => {
  const tokenDoc = await prisma.token.create({
    data: {
      token,
      userId: userId,
      expires: expires.toDate(),
      type,
      blacklisted,
    }
  });
  return tokenDoc;
};

/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
const verifyToken = async (token, type) => {
  const payload = jwt.verify(token, config.jwt.secret);
  const tokenDoc = await prisma.token.findFirst({
    where: { token, type, userId: payload.sub, blacklisted: false }
  });

  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return tokenDoc;
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS);

  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
  await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};

module.exports = {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
};
/*
1.generateToken: Fungsi ini digunakan untuk menghasilkan token JWT (JSON Web Token) berdasarkan ID pengguna, 
waktu kedaluwarsa, jenis token, dan rahasia (secret key) yang digunakan untuk menandatangani token. 
Token ini akan digunakan untuk otentikasi user.

2.saveToken: Fungsi ini digunakan untuk menyimpan token ke dalam database. Ini mencakup token itu sendiri, 
ID user yang terkait, waktu kedaluwarsa, jenis token, dan status "blacklisted" yang menunjukkan apakah token 
tersebut diblacklist (dinyatakan tidak sah) atau tidak.

3.verifyToken: Fungsi ini digunakan untuk memverifikasi token yang diberikan. Ini memeriksa tanda tangan 
digital token dan mencari token yang sesuai dalam basis data untuk memastikan token belum kedaluwarsa 
atau diblacklist.

4.generateAuthTokens: Fungsi ini digunakan untuk menghasilkan token otentikasi untuk user tertentu. 
Ini mencakup pembuatan token akses (access token) dan token penyegar (refresh token) dengan waktu kedaluwarsa 
yang sesuai. Refresh token juga disimpan dalam database untuk validasi nanti.*/



/*Auth Service
Ini service yang hanya berhubungan dengan AUTH API saja, sementara kita buat 1 function untuk validasi password 
hashing bycrpt ketika kita login.*/

// services/auth.service.js
const httpStatus = require('http-status');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  const validPassword = await bcrypt.compare(password, user.password);

  if (!user || !validPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

module.exports = {
  loginUserWithEmailAndPassword,
};


/*nah 3 service sudah jadi, kita tambah 1 file lagi index.js di folder services untuk group export semua 
file agar import nya lebih mudah.*/

services/index.js
module.exports.authService = require('./auth.service');
module.exports.tokenService = require('./token.service');
module.exports.userService = require('./user.service');



// Auth Controller
// Sekarang kita pakai 3 services tadi untuk membuat proses dari register dan login.

controllers/auth.controller.js
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require('../services');
const ApiError = require('../utils/ApiError');

const register = catchAsync(async (req, res) => {
  const existingUser = await userService.getUserByEmail(req.body.email);

  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  const userCreated = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(userCreated);
  res.status(httpStatus.CREATED).send({ userCreated, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

module.exports = {
  register,
  login,
};


/*jadi 2 function ini akan generate JWT token berdasarkan payload user.
register ->jwt payload dari create user
login -> jwt payload dari user yang login dari body request */


/*Set Up Route Inventory System
kita akan membuat route pertama kita yaitu auth route API, sebelum membuatnya disini kita akan set up 
struktur route baru dengan cara versioning API.

buatlah folder v1 di dalam folder routes. dan buat 2 file didalama folder v1, auth.route.js dan index.js 
 */


// Auth Route
// pasang route register dan login dengan pointing ke auth controller

auth.route.js
const express = require('express');
const authController = require('../../controllers/auth.controller');

// const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;


// Index Route
// kita akan refactoring index route, untuk mempermudah tracking path dan route.

const express = require('express');
const authRoute = require('./auth.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;


// App.js Update
// Update app.js kalian untuk menambahkan router v1

// app.js
const express = require('express');
const httpStatus = require('http-status');
const router = require('./routes');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// aktifin parsing json
app.use(express.json());

// aktifin urlencoded
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

// v1 api routes
app.use('/v1', routes);

// send 404 error jika route tidak ada
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error jadi Instance API Error jika ada error yang tidak ketangkap
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;


/*API TESTING
jalankan npm run dev dan test API Register + Login kalian.

Register
Route: http://localhost:3000/v1/auth/register
body: 
{
    "name": "zexo",
    "email": "zexo@gmail.com",
    "password": "zexoverz",
    "role": "admin"
}


hasil:
{
    "userCreated": {
        "id": "568ae0d4-37ab-48bc-bf14-c32fc52bd1fd",
        "name": "zexo",
        "email": "zexo@gmail.com",
        "password": "$2a$08$s4kXCAnZx0VcGS/SLFirA.qBvKaXmPk/ccyzO8hqQhIIOfWPOiDn2",
        "role": "admin",
        "createdAt": "2023-09-24T16:42:47.979Z",
        "updatedAt": "2023-09-24T16:42:47.979Z",
        "isEmailVerified": false
    },
    "tokens": {
        "access": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjhhZTBkNC0zN2FiLTQ4YmMtYmYxNC1jMzJmYzUyYmQxZmQiLCJpYXQiOjE2OTU1NzM3NjksImV4cCI6MTY5NTU3NTU2OSwidHlwZSI6ImFjY2VzcyJ9.QRDNCatoP-h4kvx0xmVXpZiTyjE93beWUx-reMLGDz8",
            "expires": "2023-09-24T17:12:49.402Z"
        },
        "refresh": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjhhZTBkNC0zN2FiLTQ4YmMtYmYxNC1jMzJmYzUyYmQxZmQiLCJpYXQiOjE2OTU1NzM3NjksImV4cCI6MTY5ODE2NTc2OSwidHlwZSI6InJlZnJlc2gifQ.DIEFqI8kqKm5-Rdvrja9J4-_aGE4gExshoG0NP61SQM",
            "expires": "2023-10-24T16:42:49.408Z"
        }
    }
}


bisa kalian lihat, password kita sudah di hashing oleh bycrpt.js jadi lebih secure dan 
tidak bisa dilihat password asli user.
terus access.token ini yang akan kita pakai di headers untuk authenticate user. */

/*Login
Route: http://localhost:3000/v1/auth/login
body: 
{
    "email": "zexo@gmail.com",
    "password": "zexoverz"
}


hasil success:
{
    "user": {
        "id": "568ae0d4-37ab-48bc-bf14-c32fc52bd1fd",
        "name": "zexo",
        "email": "zexo@gmail.com",
        "password": "$2a$08$s4kXCAnZx0VcGS/SLFirA.qBvKaXmPk/ccyzO8hqQhIIOfWPOiDn2",
        "role": "admin",
        "createdAt": "2023-09-24T16:42:47.979Z",
        "updatedAt": "2023-09-24T16:42:47.979Z",
        "isEmailVerified": false
    },
    "tokens": {
        "access": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjhhZTBkNC0zN2FiLTQ4YmMtYmYxNC1jMzJmYzUyYmQxZmQiLCJpYXQiOjE2OTU1NzQwMjYsImV4cCI6MTY5NTU3NTgyNiwidHlwZSI6ImFjY2VzcyJ9.gY_T2R_wQqF6MgB8HAs5iYT7qH4eai3gTDGx7NFRZ8A",
            "expires": "2023-09-24T17:17:06.736Z"
        },
        "refresh": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjhhZTBkNC0zN2FiLTQ4YmMtYmYxNC1jMzJmYzUyYmQxZmQiLCJpYXQiOjE2OTU1NzQwMjYsImV4cCI6MTY5ODE2NjAyNiwidHlwZSI6InJlZnJlc2gifQ.FF9huZVPTIReRFV4cpa0MkhbpE2xjb8cbOiF0yyoyzg",
            "expires": "2023-10-24T16:47:06.737Z"
        }
    }
}


ini hasil login API jika password salah : 
{
    "code": 401,
    "message": "Incorrect email or password",
    "stack": "Error: Incorrect email or password\n    at Object.loginUserWithEmailAndPassword 
    (/Users/zexo/Programming/RPN/phase1-zexo/week4/inventory-system/src/services/auth.service.js:17:11)\n    
    at async /Users/zexo/Programming/RPN/phase1-zexo/week4/inventory-system/src/controllers/auth.controller.js:20:16"
} 


-
Inventory System Checkpoint
Implementasi Authentication pada project ini selesai, next kita akan membuat API Category 
dimana API Category ini ada proses authentication di dalamnya, jadi harus ada JWT token di headers request 
ketika hit API ke Category. 
*/
