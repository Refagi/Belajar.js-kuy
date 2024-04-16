/*Joi Validation
Joi adalah pustaka validasi data yang sangat populer dalam ekosistem Node.js. Ini digunakan untuk memvalidasi, memeriksa, 
dan mengonversi data sesuai dengan aturan yang ditentukan sebelumnya. Joi sering digunakan untuk memastikan bahwa data yang diterima 
oleh aplikasi Kalian sesuai dengan format yang diharapkan dan aman dari masukan yang tidak valid atau berbahaya.

Berikut adalah cara penggunaan Joi validation di Node.js:

1.Instalasi Joi: Pertama, Kalian perlu menginstal pustaka Joi dalam proyek Kalian. Kalian dapat melakukannya dengan perintah npm atau yarn:

   
npm install joi

2.Import Joi: Selanjutnya, Kalian perlu mengimpor pustaka Joi ke dalam file JavaScript atau Node.js Kalian:
const Joi = require('joi');
3.Definisikan Skema Validasi: Kalian perlu mendefinisikan skema validasi yang menjelaskan aturan data yang diharapkan. Skema ini dapat berisi jenis data yang diharapkan, batasan panjang, validasi nilai, dan sebagainya.

   Contoh:

   
   const schema = Joi.object({
     username: Joi.string().alphanum().min(3).max(30).required(),
     email: Joi.string().email().required(),
     age: Joi.number().integer().min(18).required(),
   });
   


4.Lakukan Validasi: Setelah skema validasi telah didefinisikan, Kalian dapat menggunakan skema tersebut untuk memvalidasi data yang 
masuk dalam permintaan atau yang lainnya:

   
   const dataToValidate = {
     username: 'john_doe',
     email: 'john@example.com',
     age: 25,
   };

   const validationResult = schema.validate(dataToValidate);

   if (validationResult.error) {
     // Data tidak valid
     console.error(validationResult.error.details);
   } else {
     // Data valid
     console.log('Data valid:', validationResult.value);
   }
   

Jika data tidak sesuai dengan skema validasi, Kalian akan mendapatkan objek error yang berisi informasi tentang kesalahan validasi. 
Jika data valid, Kalian akan mendapatkan objek value yang berisi data yang telah divalidasi.

Explore : https://joi.dev/api/?v=17.9.1  */


/*Backend Validation Inventory System
kita akan implementasi validasi joi schema di project IS. 1 schema joi representasi 1 body request API. 
kita akan memisahkan proses validasi request sebelum masuk ke controller. jadi kita akan membuat middleware 
validation yang flexible sesuai kebutuhan schema dan API.

Flow route API :
public api: User Request -> Validation Middleware -> Controller
auth api: User Request -> Auth Middleware -> Validation Middleware -> Controller

Auth Schema
Di project IS kita sudah mempunyai 2 API (Register & Login), kita akan membuat validasi untuk 2 API ini.

pertama tama, buatlah schema auth API dahulu. buatlah file auth.validation.js di folder validations. */

// validations/auth.validation.js
// const Joi = require('joi');

// const register = {
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//     name: Joi.string().required(),
//   }),
// };

// const login = {
//   body: Joi.object().keys({
//     email: Joi.string().required(),
//     password: Joi.string().required(),
//   }),
// }

// module.exports = {
//   register,
//   login,
// };


/*disini kita membuat 2 schema untuk 2 API yang isinya validasi body request karena data yang masuk ke API tersebut 
hanya di body saja.

.string() -> ini validasi untuk tipe data harus string
.required() -> validasi data harus ada di body request
.email() -> validasi data harus berformat email

jangan lupa buat grouping index , index.js di folder validations */
// validations/index.js
module.exports.authValidation = require('./auth.validation');
 
/*
Validate Middleware
Setelah kita membuat schema, kita butuh function middleware untuk menerima schema schema tersebut dan memproses 
validasi sesuai config schema dari validations.

sebelum membuat file middleware, kita butuh utils untuk support function middleware kita.
buatlah file pick.js di folder utils: */

// utils/pick.js
/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;


/*cara joi validasi data schema itu dengan cara schema.validate(dataToValidate). di object schema API ini akan 
terbagi 3 tipe  yaitu ['params', 'query', 'body']. karena request dari user itu ga selalu body request saja, 
bisa saja kita butuh untuk validasi params seperti get user by id (/:id) params idnya butuh di check apakah 
uuid atau bukan. dan validasi request query yang biasa dipakai untuk search api dan filter.

Utils Pick ini yang berfungsi untuk membedakan 3 tipe schema, untuk mengambil key ['params', 'query', 'body']. 
langsung saja kita akan liat cara utils ini bekerja

buatlah file validate.js di folder middlewares */

// middlewares/validate.js
const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;


/*middleware validate inilah yang akan memproses validasi schema dengan cara picking key object dan compile schema 
tersebut memakai joi validation. kita bisa handling error yang sudah dibuat dari joi dan membalika response 
messagenya setiap key data yang di validasi.

Implementasi Validation Auth Route
setelah membuat schema dan middleware validate, kita bisa memakai function tersebut dengan cara validate(schema). */

// auth.route.js
// const express = require('express');
// const validate = require('../../middlewares/validate');
// const authValidation = require('../../validations/auth.validation');
// const authController = require('../../controllers/auth.controller');

// const router = express.Router();

// router.post('/register', validate(authValidation.register), authController.register);
// router.post('/login', validate(authValidation.login), authController.login);

// module.exports = router;


/*sekarang data kalian sudah clean sebelum masuk ke controller, tidak ada lagi handling if conditional dengan berbagai 
case. kalian bisa modifikasi schema kalian sesuai case dan logic bisnis yang dibutuhkan. */

// result register api jika body json di kosongkan
// {
//     "code": 400,
//     "message": "\"email\" is required, \"password\" is required, \"name\" is required",
//     "stack": "Error: \"email\" is required, \"password\" is required, \"name\" is required\n  "
// }


// Category API
// disini gua akan contohin untuk crud API pertama kita dimana ada validasi di setiap CRUD dan authentication untuk 
// mengakses API Category.

// category.service.js (jangan lupa update index.js service kalian)

// const httpStatus = require('http-status');
// const prisma = require('../../prisma/client')
// const ApiError = require('../utils/ApiError');

// /**
//  * Create a category
//  * @param {Object} categoryBody
//  * @returns {Promise<Category>}
//  */
// const createCategory = async (categoryBody) => {
//   return prisma.category.create({
//     data: categoryBody
//   });
// };

// /**
//  * Query for categorys
//  * @returns {Promise<QueryResult>}
//  */
// const queryCategorys = async (filter, options) => {
//   const categorys = await prisma.category.findMany();
//   return categorys;
// };

// /**
//  * Get category by id
//  * @param {ObjectId} id
//  * @returns {Promise<Category>}
//  */
// const getCategoryById = async (id) => {
//   return prisma.category.findFirst({
//     where: {
//       id: id
//     }
//   })
// };

// /**
//  * Update category by id
//  * @param {ObjectId} categoryId
//  * @param {Object} updateBody
//  * @returns {Promise<Category>}
//  */
// const updateCategoryById = async (categoryId, updateBody) => {
//   const category = await getCategoryById(categoryId);
//   if (!category) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
//   }
  
//   const updateCategory = await prisma.category.update({
//     where: {
//       id: categoryId,
//     },
//     data: updateBody
//   })

//   return updateCategory;
// };

// /**
//  * Delete category by id
//  * @param {ObjectId} categoryId
//  * @returns {Promise<Category>}
//  */
// const deleteCategoryById = async (categoryId) => {
//   const category = await getCategoryById(categoryId);
//   if (!category) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
//   }

//   const deleteCategorys = await prisma.category.deleteMany({
//     where: {
//       id: categoryId
//     },
//   })

//   return deleteCategorys;
// };

// module.exports = {
//   createCategory,
//   queryCategorys,
//   getCategoryById,
//   updateCategoryById,
//   deleteCategoryById,
// };


// category.controller.js
// const httpStatus = require('http-status');
// const ApiError = require('../utils/ApiError');
// const catchAsync = require('../utils/catchAsync');
// const { categoryService } = require('../services');

// const createCategory = catchAsync(async (req, res) => {
//   const category = await categoryService.createCategory(req.body);

//   res.status(httpStatus.CREATED).send({
//     status: httpStatus.CREATED,
//     message: "Create Category Success",
//     data: category
//   });
// });

// const getCategorys = catchAsync(async (req, res) => {
//   const result = await categoryService.queryCategorys();
  
//   res.status(httpStatus.OK).send({
//     status: httpStatus.OK,
//     message: "Get Categorys Success",
//     data: result
//   });
// });

// const getCategory = catchAsync(async (req, res) => {
//   const category = await categoryService.getCategoryById(req.params.categoryId);
//   if (!category) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
//   }
  
//   res.status(httpStatus.OK).send({
//     status: httpStatus.OK,
//     message: "Get Category Success",
//     data: category
//   });
// });

// const updateCategory = catchAsync(async (req, res) => {
//   const category = await categoryService.updateCategoryById(req.params.categoryId, req.body);
  
//   res.status(httpStatus.OK).send({
//     status: httpStatus.OK,
//     message: "Update Category Success",
//     data: category
//   });
// });

// const deleteCategory = catchAsync(async (req, res) => {
//   await categoryService.deleteCategoryById(req.params.categoryId);
  
//   res.status(httpStatus.OK).send({
//     status: httpStatus.OK,
//     message: "Delete Category Success",
//     data: null
//   });
// });

// module.exports = {
//   createCategory,
//   getCategorys,
//   getCategory,
//   updateCategory,
//   deleteCategory,
// };


// disini kita ada refactoring code sedikit, response balikan API harus berformat:
// {
//     status: httpStatus.OK,
//     message: "message",
//     data: data
// }

/*format seperti ini mempermudah frontend kita. 

Custom Validation
custom validation ini berfungsi untuk membuat case sendiri sesuai kemauan kalian, disini gua akan buat 2 custom 
validation pada project IS

-password -> wajib 8 character, minimal 1 huruf dan angka
-id -> id harus representasi dari UUID

buatlah custom.validation.js di folder validation */
const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)) {
    return helpers.message('"{{#label}}" must be a valid UUID');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

module.exports = {
  objectId,
  password,
};


// 2 function ini kita bisa pakai sebagai function validation di joi schema.

// auth.validation.js
const Joi = require('joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}

module.exports = {
  register,
  login,
};

// lanjut, kita akan membuat category.validation.js di folder validations. untuk validasi data pada category API.

// validations/category.validation.js
// const Joi = require('joi');
// const { objectId } = require('./custom.validation');

// const createCategory = {
//   body: Joi.object().keys({
//     name: Joi.string().required(),
//   }),
// };

// const getCategory = {
//   params: Joi.object().keys({
//     categoryId: Joi.string().custom(objectId),
//   }),
// };

// const updateCategory = {
//   params: Joi.object().keys({
//     categoryId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteCategory = {
//   params: Joi.object().keys({
//     categoryId: Joi.string().custom(objectId),
//   }),
// };

// module.exports = {
//   createCategory,
//   getCategory,
//   updateCategory,
//   deleteCategory,
// };


// bisa kalian lihat, bisa bisa validasi request selain data body. req.params.categoryId ini bisa kita validasi apakah 
// yang dikirim user berformat UUID atau bukan. 


// Category Route
// sekarang kita akan membuat category route untuk memakai middleware yang sudah kita buat sebelumnya, Auth + Validation.

// routes/v1/category.route.js
// const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const categoryValidation = require('../../validations/category.validation');
// const categoryController = require('../../controllers/category.controller');

// const router = express.Router();

// router
//   .route('/')
//   .post(auth(), validate(categoryValidation.createCategory), categoryController.createCategory)
//   .get(auth(), categoryController.getCategorys);

// router
//   .route('/:categoryId')
//   .get(auth(), validate(categoryValidation.getCategory), categoryController.getCategory)
//   .patch(auth(), validate(categoryValidation.updateCategory), categoryController.updateCategory)
//   .delete(auth(), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

// module.exports = router;


// update index.js di folder route/v1 untuk mendaftarkan Route Category
// const express = require('express');
// const authRoute = require('./auth.route');
// const categoryRoute = require('./category.route')

// const router = express.Router();

// const defaultRoutes = [
//   {
//     path: '/auth',
//     route: authRoute,
//   },
//   {
//     path: '/category',
//     route: categoryRoute,
//   },
// ];

// defaultRoutes.forEach((route) => {
//   router.use(route.path, route.route);
// });

// module.exports = router;
 


// Category API Testing
// Okey, API pertama kita sudah jadi. sekarang saatnya testing CRUD category API ini. 

// -Testing POST category tanpa login token:
// hasil:
// {
//     "code": 401,
//     "message": "Please authenticate",
//     "stack": "Error: Please authenticate\n    at /Users/zexo/Programming/RPN/phase1-zexo/week4/inventory-system/src/middlewares/auth.js:7:19\n    at allFailed 

// karna middleware auth(), dia akan membaca authentication di headers kalian. disini kalian tidak punya bearer 
// token makanya tidak bisa akses ke API tersebut.

// jalankan login api, copy access.token dari response api dan masukan ke bearer token di headers saat hit api post category.
// di postman kalian bisa ke tab Authorization dan pilih type Bearer token.
// Image
// masukan name di body category, dan hit api nya.

// hasilnya:
// {
//     "status": 201,
//     "message": "Create Category Success",
//     "data": {
//         "id": "7061d474-9685-4de2-8b65-112a158382e2",
//         "name": "testingg",
//         "createdAt": "2023-09-25T07:54:53.326Z",
//         "updatedAt": "2023-09-25T07:54:53.326Z"
//     }
// }


// Week4 Recap
// Week 4 sudah selesai, di stage ini kalian sudah mengerti bagaimana cara API bekerja. mulai dari handling logic 
// di controller, logging system, standarisasi code, authentication, error handler dan security di backend. 
// disini kalian sudah bisa set up backend manual dengan cara cara yang gua kasih atau metode dari gua. 
// next kalian harus bisa set up manual versi backend kalian sendiri karena di company nanti ada banyak struktur 
// dan versi backend yang berbeda dimana kalian harus adaptasi secara langsung setiap struktur backend tersebut.

// karena kalian sudah selesai dengan set up backend, di week5 akan lebih banyak mengerjakan project. di week5 kita 
// akan memakai set up backend ini untuk mengerjakan project project umum backend menggunakan 
// best practice + clean code dari set up kita.