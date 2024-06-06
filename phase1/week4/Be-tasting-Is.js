/*
Integration Testing IS
Integration Testing yang akan dicontohkan disini adalah Auth API.
jadi kita akan fokus testing ke API Register & Login.

untuk melakukan integration testing ada beberapa hal yang perlu kita set up :

Mock Database : kita butuh mock database untuk melakukan testing, karena integration testing ini kita akan 
melakukan http request ke dalam app.js kita, jadi kita butuh database buat integrasi dari flow API . 
Testing menggunakan database asli sangat tidak dianjurkan, karena data dummy nya akan menggangu history dari data asli 
dan juga kalau ada error akan pengaruh ke data yang asli juga.

Jest Config : Configurasi untuk library jest agar memakai mock database yang sudah kita buat. 
setelah itu kita membuat command testing di package.json.

Dummy Data : kita butuh dummy data untuk melakukan testing, jadi data ini bisa kita reusable sesuai test case 
yang kita buat.

Mock Http : selain kita mocking database, kita juga akan mocking http. ini fungsinya kita akan buat proses testing 
kita seolah olah melakukan http request tapi aslinya hanyalah mocking (atau bisa disebut http palsu). 
Disini kita menggunakan library supertest untuk melakukan mocking http request.

Test Case : setelah configurasi testing sudah di setup, saatnya membuat Test Case untuk API yang mau di testing. 
sebisa mungkin kalian menulis test case yang sangat deskriptif. 
jadi penggunaan expectnya sesuai dengan kebutuh test case masing masing. 
sebisa mungkin kalian membuat test case yang mengcover kondisi dari 
API tersebut (dari success case maupun error case).

Mock Database
Pertama tama , kita perlu refactor struktur folder prisma kita dulu. ubah file client.js di folder prisma 
menjadi index.js (fungsinya untuk specify prisma client di folder prisma).

NOTE: jangan lupa update di service - service kalian yang memanggil file client.js sebelumnya. 
(ubah menjadi require ke arah prisma)

setelah itu, buatlah folder mocks di dalam folder prisma, didalam folder mocks buat file index.js. 
(index.js ini lah yang akan kita buat mock prisma client didalamnya).



Di folder index.js, kita akan membuat code seperti ini:
mocks/index.js
const { PrismaClient } = require('@prisma/client')
const { execSync } = require('child_process')
const { join } = require('path')

const generateDatabaseURL = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('please provide a database url');
  }
  let url = process.env.DATABASE_URL

  url = url.replace("/railway", "/testingDb")
  return url
};


const prismaBinary = join(__dirname, '..', '..', 'node_modules', '.bin', 'prisma');

let url = generateDatabaseURL()

process.env.DATABASE_URL = url;

const prisma = new PrismaClient({
  datasources: { db: { url } },
});

beforeAll(async () => {
  execSync(`${prismaBinary} db push`, {
    env: {
      ...process.env,
      DATABASE_URL: url
    },
  });
});

beforeEach(async () => {
  await prisma.user.deleteMany()
  await prisma.token.deleteMany()
});

afterAll(async () => {
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS testingDb`);
    await prisma.$disconnect();
});

module.exports = prisma;


Disini kalian sebenernya membuat prisma client seperti biasa, bedanya kalian perlu membuat mocking database dari instance 
database URL kalian yang asli. 

Bisa kalian liat generateDatabaseURL fungsi ini untuk mengganti Url database kita.
dari :
DATABASE_URL="mysql://root:VE2vR87YwrTrhIzAzh7X@containers-us-west-154.railway.app:6803/railway"

menjadi:
DATABASE_URL="mysql://root:VE2vR87YwrTrhIzAzh7X@containers-us-west-154.railway.app:6803/testingDb"

ya sebenarnya kalian hanya mengganti nama database nya saja, karena dengan mengganti nama database kalian, 
bisa membuat database baru di hosting railway. 
secara default nama database dari railway itu railway makanya disini kalian hanya replace railway saja dengan testing database.

NOTE: Ini kebetulan kita memakai railway, jadi misal kalian memakai hosting db lain lebih bagus membuat 2 env db url
seperti DATABASE_URL dan DATABASE_URL_TESTING agar lebih safety. 


Nah dari database baru ini, Integration Testing akan memakainya untuk eksekusi test case API. 
Tetapi kita perlu push schema terlebih dahulu sebelum testing dimulai, karena database baru ini sudah pasti kosong isinya.

beforeAll(async () => {
  execSync(`${prismaBinary} db push`, {
    env: {
      ...process.env,
      DATABASE_URL: url
    },
  });
});
 Di code ini , prismaBinary sama saja seperti npx prisma. disini kita trigger db push untuk push schema ke databaseTesting.

Karena pada dasarnya Mocking Database ini sekali pakai, jadi setiap selesai testing sudah pasti kita 
akan delete lagi database nya (agar ruang lingkup testing nya bersih). 

Makanya di beforeEach Setiap Test Suites kalian selesai, disitu ada code delete many dari setiap schema. 
(di contoh hanya user dan token, untuk logic nolep selanjutnya kalian wajib delete many semua schema). 
Jadi setiap Test Suites/Case selesai data kalian bersih kembali.

Setelah Test Case selesai semua maka afterAll akan menjalankan tugasnya, untuk DROP Database mock kita.



Jest Config
Setelah Mock Set Up selesai, kita lanjut untuk configurasi library jest agar memaki mock database dalam environtment testing.
buatlah file mocks.js dan jest.config.js di root folder kalian. (sejajar src, prisma)

mocks.js
jest.mock('./prisma/index');
jest.setTimeout(30000);

mocks.js ini penyambung antara config jest ke mock database.

jest.config.js
module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  setupFilesAfterEnv: ['./mocks.js'],
};

config umum pada jest library, kita set NODE_ENV menjadi 'test' agar app kalian tau kondisi environment yang lagi jalan. 
coveragePathIgnorePatterns ini berfungsi untuk ignore folder yang akan di test coverage nya. nah yang paling penting setupFilesAfterEnv, 
berfungsi untuk mengarahkan mocking prisma client kita untuk menggunakan Mock Database.

Update .gitignore agar tidak push hasil coverage dari test (karena ini lumayan berat).
.gitignore
node_modules
coverage


Setelah itu tambahkan command ini pada scripts yang ada di pakcage.json
"scripts": {
    "start": "pm2 start ecosystem.config.json --no-daemon",
    "dev": "cross-env NODE_ENV=development nodemon src/index.js",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettier": "prettier --check **//*.js",  
    // "prettier:fix": "prettier --write **//*.js",
    // "prepare": "husky install",
    // "test": "jest -i --colors --verbose --detectOpenHandles",
    // "test:watch": "jest -i --watchAll",
    // "coverage": "jest -i --coverage",
    // "coverage:coveralls": "jest -i --coverage --coverageReporters=text-lcov | coveralls"
  // },


Bedanya test dan coverage adalah command test hanya menjalankan file yang menggunakan prefix .test, 
sedangkan coverage itu menguji semua kualitas code kalian mulai dari awal sampe akhir (end 2 end)



Dummy Data
Sekarang kita perlu buat dummy data sebelum membuat Test Case pada Auth API.
buatlah folder tests di root project kalian , dan buat 2 folder didalamnya yaitu fixtures dan integration.

Didalam fixtures, buatlah 2 file. user.fixture.js dan token.fixture.js

user.fixture.js

const bcrypt = require('bcryptjs');
const faker = require('faker');
const prisma = require('../../prisma')
const { v4 } = require('uuid')

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
};

const userTwo = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
};

const admin = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'admin',
  isEmailVerified: false,
};

const insertUsers = async (users) => {
  users = users.map((user) => ({ ...user, password: hashedPassword }))
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true
  })
};

module.exports = {
  userOne,
  userTwo,
  admin,
  insertUsers,
};

Disini kita menggunakan library faker.js untuk set up dummy data. bagi yang belum tau, faker js adalah library 
node js untuk mencari random value (dummy) data buat kebutuhan development. 
selain kita buat dummy data, kita membuat function insertUsers untuk add user data dalam kebutuhan testing API. 
(karena kita butuh data user yang sudah ada di db dalam kondisi tertentu).

token.fixture.js
const moment = require('moment');
const config = require('../../src/config/config');
const { tokenTypes } = require('../../src/config/tokens');
const tokenService = require('../../src/services/token.service');
const { userOne, admin } = require('./user.fixture');

const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
const userOneAccessToken = tokenService.generateToken(userOne.id, accessTokenExpires, tokenTypes.ACCESS);
const adminAccessToken = tokenService.generateToken(admin.id, accessTokenExpires, tokenTypes.ACCESS);

module.exports = {
  userOneAccessToken,
  adminAccessToken,
};

Selain membuat dummy data, kita perlu dummy token juga karena di dalam Auth API ada proses authentikasi. 
jadi perlu testing service token.



Http Mock + Test Case
Set Up Testing kalian sudah selesai, sekarang saatnya kita melakukan penulisan test case untuk Auth API.

Disini gua berikan kalian contoh Test Case pada Auth API, Terdiri dari 2 Test Describe dan 14 Test Case :
Auth routes
    POST /v1/auth/register
      -> should return 201 and successfully register user if request data is ok 
      -> should return 400 error if email is invalid 
      -> should return 400 error if email is already used 
      -> should return 400 error if password length is less than 8 characters 
      -> should return 400 error if password does not contain both letters and numbers 
    POST /v1/auth/login
      -> should return 200 and login user if email and password match 
      -> should return 401 error if password is wrong 
  Auth middleware
    -> should call next with no errors if access token is valid 
    -> should call next with unauthorized error if access token is not found in header 
    -> should call next with unauthorized error if access token is not a valid jwt token 
    -> should call next with unauthorized error if the token is not an access token 
    -> should call next with unauthorized error if access token is generated with an invalid secret 
    -> should call next with unauthorized error if access token is expired 
    -> should call next with unauthorized error if user is not found 

NOTE: Sebisa mungkin Test Case dibuat dalam bahasa inggris (karena programming itu kadang lebih mudah dipahami jika menggunakan english). 
ini bakal jadi habbit sampai kalian kerja nanti untuk membuat testing yang sangat deskriptif dan detail. 


buatlah file auth.test.js di dalam folder integration.

const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const httpMocks = require('node-mocks-http');
const moment = require('moment');
const app = require('../../src/app');
const { userOne, admin, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, adminAccessToken } = require('../fixtures/token.fixture');
const prisma = require('../../prisma')
const auth = require('../../src/middlewares/auth');
const ApiError = require('../../src/utils/ApiError');
const config = require('../../src/config/config');
const { tokenService } = require('../../src/services');
const { tokenTypes } = require('../../src/config/tokens');

describe('Auth routes', () => {
  describe('POST /v1/auth/register', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        role: "user",
        password: 'password1',
      };
    });

    test('should return 201 and successfully register user if request data is ok', async () => {
      const res = await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.CREATED)

      const userData = res.body.data.userCreated

      expect(userData).toEqual({
        id: expect.anything(),
        name: newUser.name,
        password: expect.anything(),
        email: newUser.email,
        role: newUser.role,
        isEmailVerified: false,
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      });

      const dbUser = await prisma.user.findUnique({
        where: {
            id: userData.id
        }
      })

      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);

      expect(dbUser).toMatchObject({
        id: expect.anything(),
        name: newUser.name,
        password: expect.anything(),
        email: newUser.email,
        role: newUser.role,
        isEmailVerified: false,
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      });

      expect(res.body.data.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test('should return 400 error if email is invalid', async () => {
      newUser.email = 'invalidEmail';

      await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if email is already used', async () => {
      await insertUsers([userOne]);
      newUser.email = userOne.email;

      await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if password length is less than 8 characters', async () => {
      newUser.password = 'passwo1';

      await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if password does not contain both letters and numbers', async () => {
      newUser.password = 'password';

      await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);

      newUser.password = '11111111';

      await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('POST /v1/auth/login', () => {
    test('should return 200 and login user if email and password match', async () => {
      await insertUsers([userOne]);
      const loginCredentials = {
        email: userOne.email,
        password: userOne.password,
      };

      const res = await request(app).post('/v1/auth/login').send(loginCredentials)

      expect(res.body.data.user).toEqual({
        id: expect.anything(),
        name: userOne.name,
        email: userOne.email,
        password: expect.anything(),
        role: userOne.role,
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
        isEmailVerified: userOne.isEmailVerified,
      });

      expect(res.body.data.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test('should return 401 error if password is wrong', async () => {
      await insertUsers([userOne]);
      const loginCredentials = {
        email: userOne.email,
        password: 'wrongPassword1',
      };

      const res = await request(app).post('/v1/auth/login').send(loginCredentials).expect(httpStatus.UNAUTHORIZED);

      expect(res.body).toEqual({ code: httpStatus.UNAUTHORIZED, message: 'Incorrect email or password' });
    });
  });

  
});


describe('Auth middleware', () => {
  test('should call next with no errors if access token is valid', async () => {
    await insertUsers([userOne]);
    const req = httpMocks.createRequest({ headers: { Authorization: `Bearer ${userOneAccessToken}` } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith();
    expect(req.user.id).toEqual(userOne.id);
  });

  test('should call next with unauthorized error if access token is not found in header', async () => {
    await insertUsers([userOne]);
    const req = httpMocks.createRequest();
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });

  test('should call next with unauthorized error if access token is not a valid jwt token', async () => {
    await insertUsers([userOne]);
    const req = httpMocks.createRequest({ headers: { Authorization: 'Bearer randomToken' } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });

  test('should call next with unauthorized error if the token is not an access token', async () => {
    await insertUsers([userOne]);
    const expires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const refreshToken = tokenService.generateToken(userOne.id, expires, tokenTypes.REFRESH);
    const req = httpMocks.createRequest({ headers: { Authorization: `Bearer ${refreshToken}` } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });

  test('should call next with unauthorized error if access token is generated with an invalid secret', async () => {
    await insertUsers([userOne]);
    const expires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const accessToken = tokenService.generateToken(userOne.id, expires, tokenTypes.ACCESS, 'invalidSecret');
    const req = httpMocks.createRequest({ headers: { Authorization: `Bearer ${accessToken}` } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });

  test('should call next with unauthorized error if access token is expired', async () => {
    await insertUsers([userOne]);
    const expires = moment().subtract(1, 'minutes');
    const accessToken = tokenService.generateToken(userOne.id, expires, tokenTypes.ACCESS);
    const req = httpMocks.createRequest({ headers: { Authorization: `Bearer ${accessToken}` } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });

  test('should call next with unauthorized error if user is not found', async () => {
    const req = httpMocks.createRequest({ headers: { Authorization: `Bearer ${userOneAccessToken}` } });
    const next = jest.fn();

    await auth()(req, httpMocks.createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: httpStatus.UNAUTHORIZED, message: 'Please authenticate' })
    );
  });
});


Berikut penjelasan singkat untuk setiap bagian dari kode tersebut:

1.Import Library: Kode pertama mengimpor berbagai pustaka yang diperlukan untuk pengujian dan middleware otentikasi,
 seperti supertest untuk melakukan pengujian HTTP, faker untuk menghasilkan data palsu, 
 httpStatus untuk kode status HTTP, dan lain-lain.

2.Import Modul dan Konfigurasi: Kode juga mengimpor modul-modul yang diperlukan untuk aplikasi, seperti app, prisma, 
auth, ApiError, config, tokenService, dan tokenTypes. Ini adalah bagian dari aplikasi Kalian yang perlu diuji.

3.Deskripsi Pengujian "Auth routes": Ini adalah blok yang menggambarkan serangkaian pengujian yang berkaitan dengan 
rute otentikasi dalam aplikasi Kalian. Ini meliputi rute pendaftaran (/v1/auth/register) dan 
rute masuk (/v1/auth/login).

4.beforeEach(): Ini adalah fungsi yang dipanggil sebelum setiap pengujian dalam deskripsi pengujian "Auth routes". 
Fungsi ini digunakan untuk mengatur kondisi awal atau persiapan yang diperlukan sebelum setiap pengujian berjalan.

5.Test Cases: Setiap blok test adalah sebuah kasus uji (test case) yang menguji berbagai aspek rute-rute otentikasi.
Ini termasuk pengujian pendaftaran pengguna baru, pengujian masuk pengguna yang ada, dan beberapa pengujian yang 
menangani kasus kesalahan (misalnya, email tidak valid atau kata sandi yang salah).

6.Deskripsi Pengujian "Auth middleware": Ini adalah blok yang menggambarkan serangkaian pengujian yang berkaitan 
dengan middleware otentikasi yang digunakan dalam aplikasi Kalian. 
Middleware ini digunakan untuk melindungi rute-rute yang memerlukan otentikasi.

7.Test Cases Auth Middleware: Setiap blok test dalam deskripsi pengujian "Auth middleware" menguji berbagai aspek 
middleware otentikasi. Ini mencakup pengujian ketika token akses adalah valid, ketika token tidak ditemukan 
dalam header permintaan, ketika token tidak valid, ketika token adalah token refresh (bukan token akses), 
ketika token dibuat dengan kunci rahasia yang salah, ketika token sudah kedaluwarsa, 
dan ketika pengguna tidak ditemukan.

8.Integration Testing ini sudah mencakup Prisma untuk interaksi dengan database, supertest untuk pengujian HTTP, 
dan JWT (JSON Web Token) untuk mengelola otentikasi. 
-
Hasil Testing
Jalankan command npm run test untuk menjalankan test case integration.
NOTE: disini memang aga lumayan lama, karena kita memakai set up mocking http + database. 
(beda dengan testing yang hanya set up local atau tanpa mocking http + database) 



Logic Nolep (Inventory System Testing)
Buatlah Integration API Testing di Inventory System. cover semua API yang ada di Inventory System,
 kalian bisa contoh test case yang sudah gua buat. kalian juga boleh mencari ide test case menggunakan 
 chat GPT (hanya ide test case, kalau code nulis sendiri).

Poin Poin Task:
- Integration API Testing (semua API)
- Test Case yang deskriptif (Success dan Error Case tercover)
- Pemisahan Describe
- Dummy Data Reusable

buat sekreatif kalian, tidak ada batasan dalam tugas ini. 


 */