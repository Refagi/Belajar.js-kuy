/*Error Handler
Error handler adalah komponen khusus dalam aplikasi Express.js yang digunakan untuk menangani kesalahan 
(errors) yang terjadi selama penanganan permintaan HTTP. 
Error handler memungkinkan Kalian untuk merespons dengan tepat terhadap kesalahan yang terjadi dalam aplikasi Kalian, 
memberikan tanggapan yang sesuai, dan memastikan bahwa kesalahan tersebut tidak menghentikan jalannya aplikasi.

Berikut adalah beberapa poin kunci terkait error handler dalam Express.js:

1. Penanganan Kesalahan:
Error handler adalah middleware khusus yang berfungsi menangkap dan menangani kesalahan yang terjadi dalam aplikasi.
Kesalahan dapat berasal dari berbagai sumber, seperti kesalahan dalam kode Kalian, permintaan yang salah, atau bahkan pengecualian yang tidak tertangkap.

2. Penggunaan Middleware:
Error handler biasanya ditempatkan sebagai middleware di akhir rantai penanganan permintaan 
(setelah semua middleware dan penanganan permintaan lainnya).
Untuk menunjukkan bahwa suatu middleware adalah error handler, Kalian perlu mengidentifikasinya 
dengan empat parameter, seperti: (err, req, res, next).

3.Penanganan Berdasarkan Jenis Kesalahan:
Kalian dapat menentukan cara menangani jenis kesalahan tertentu berdasarkan tipe atau kondisi kesalahan.
Misalnya, Kalian dapat memiliki penanganan khusus untuk kesalahan validasi input dan penanganan berbeda 
untuk kesalahan server internal.

4. Mengirim Tanggapan Error:
Error handler memiliki tugas untuk mengirim respons yang sesuai ke klien dalam format yang benar.
Ini bisa berupa pesan kesalahan yang informatif, kode status HTTP yang sesuai 
(misalnya, 404 untuk "Not Found" atau 500 untuk "Internal Server Error"), dan detail kesalahan jika diperlukan.

5. Menghindari Terhentinya Aplikasi:
Salah satu keunggulan penggunaan error handler adalah mencegah terhentinya aplikasi akibat kesalahan. 
Dengan penanganan yang tepat, aplikasi dapat tetap berjalan meskipun ada kesalahan.

6. Pengembangan dan Pemantauan:
Error handler juga dapat membantu dalam pengembangan dan pemantauan aplikasi dengan mencatat kesalahan ke log atau 
mengirim notifikasi kepada pengembang atau tim operasional.

Penggunaan error handler yang baik membantu menjaga keandalan dan kualitas aplikasi Kalian, 
sambil memberikan pengalaman yang lebih baik kepada pengguna akhir.*/


// sebelum kita membuat file error handler, kita akan membuat 2 utils function untuk support error handler 
// kita agar semakin efisien.

// Utils API Error
// Function ini fungsinya untuk membuat instance response API error dalam project kita. 
// karena struktur error yang kita buat akan seperti ini :

// {
//   "code": 404,
//   "message": "Message error kalian",
//   "stack": "balikan error sebenarnya dari server kita"
// }

// jadi kalian hanya perlu membuat 1 class instance agar dipakai berkali kali ketika kalian ingin 
// melakukan response error.
// buatlah file ApiError.js didalam folder utils.

// utils/ApiError.js
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;


// jadi kalian bisa menggunakan instance error ini untuk membuat response error:
// error = new ApiError(statusCode, message, false, err.stack);


// Utils catchAsync
// Function ini fungsinya untuk menangkap semua block catch yang ada di controller, jadi kita tidak perlu 
// membuat try catch lagi. ini utils paling maut untuk clean code dalam backend.

// NOTE: catchAsync ini menggunakan konsep High-order function, jika kalian belum belajar silahkan explore 
// terlebih dahulu tentang konsep ini.
// https://medium.com/paradigma-fungsional/higher-order-function-paradigma-fungsional-praktis-part-4-c836bd23a82

// buatlah file catchAsync.js di folder utils:

// utils/catchAsync.js
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;


// ini adalah contoh kombo maut ApiError instance + Catch Async:

const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const ApiError = require('../utils/ApiError');

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});



//Error Handler Middleware

//Pengimporan Modul:
const httpStatus = require('http-status');
const config = require('../config/config');
const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');
const { Prisma } = require('@prisma/client');

/*Kode ini mengimpor beberapa modul yang diperlukan untuk menangani kesalahan:
http-status: Modul ini berisi kode status HTTP yang digunakan dalam response.
config: Modul yang berisi konfigurasi aplikasi.
logger: Modul logger yang digunakan untuk mencatat kesalahan.
ApiError: Modul kustom yang digunakan untuk membuat objek kesalahan yang lebih terstruktur.
Prisma: Modul Prisma Client untuk menangani kesalahan yang terkait dengan Prisma (ORM database).*/

// Middleware errorConverter:
const errorConverter = (err, req, res, next) => {
  // ...
};

/*Ini adalah middleware yang bertanggung jawab untuk mengkonversi berbagai jenis kesalahan menjadi objek 
ApiError yang terdefinisi dengan baik. Middleware ini melakukan hal berikut:
Memeriksa jenis kesalahan dan mengubahnya menjadi ApiError jika bukan tipe ApiError yang sudah ada.
Mengatasi kesalahan yang berasal dari permintaan HTTP atau Prisma dengan cara yang sesuai.
Mengirim kesalahan yang telah dikonversi ke middleware berikutnya.*/

// Fungsi handlePrismaError:
const handlePrismaError = (err) => {
  // ...
};

/*Fungsi ini digunakan untuk menangani kesalahan yang terkait dengan Prisma (ORM database). 
Ini mengidentifikasi jenis kesalahan berdasarkan kode kesalahan Prisma dan mengembalikan objek ApiError yang sesuai.*/

// Middleware errorHandler:
const errorHandler = (err, req, res, next) => {
  // ...
};

/*Ini adalah middleware yang menangani respons kesalahan yang akan dikirimkan ke klien. Middleware ini melakukan hal berikut:
Mengidentifikasi kode status dan pesan yang akan dikirim dalam respons berdasarkan kesalahan yang terjadi.
Menambahkan pesan kesalahan ke res.locals.errorMessage agar dapat digunakan dalam respons.
Membuat objek respons yang berisi kode status, pesan, dan (dalam mode pengembangan) tumpukan kesalahan.
Mencatat kesalahan ke log jika aplikasi berjalan dalam mode pengembangan.
Mengirimkan respons kesalahan ke klien dengan status dan pesan yang sesuai.*/

// Ekspor Modul:
module.exports = {
  errorConverter,
  errorHandler,
};

/*Kode ini mengexport middleware errorConverter dan errorHandler sehingga dapat digunakan dalam aplikasi Express.js 
Kalian dengan mengimpor modul ini.
 
Implementasi Error Handler di app.js
sekarang kita akan pasang middleware error handler di project ini, update app.js kalian:*/

const express = require('express');
const router = require('./routes');
const config = require('./config/config')
const morgan = require('./config/morgan');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');

const app = express();


if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// aktifin parsing json
app.use(express.json());

// aktifin urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

// app.use(router)

// send 404 error jika route tidak ada
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error jadi Instance API Error jika ada error yang tidak ketangkap
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;