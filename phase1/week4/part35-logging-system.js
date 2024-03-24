/**Setelah buat offline logger untuk menangkap proses error di backend, kita perlu logger lain untuk 
menyempurnakan logging system kita. Yaitu membut http request logger middleware yang berfungsi sebagai 
pencatatan setiap request ke server.

coba kalian lihat app.js kita:
const express = require('express');
const router = require('./routes');

const app = express();

// aktifin parsing json
app.use(express.json());

// aktifin urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

// app.use(router)

module.exports = app;


kita mempunya 1 url API pertama untuk initiallize server, yaitu "/" root URL untuk testing "Hello World". 
Jika kita hit API tersebut, di terminal kita tidak ada pencatatan sama sekali. 

> inventory-system@1.7.0 dev
> cross-env NODE_ENV=development nodemon src/index.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
info: Connected to Database
info: Listening to port 3000


nah ini sangatlah tidak bagus, karena setiap request apapun ke backend kita tidak tau apa yang dilakukan 
sama backend terakhir kalinya. jadi kita harus buat http request logger untuk 
tracking proses API yang di hit ke backend.
 */


/**Morgan.js
Morgan.js adalah sebuah middleware logging untuk aplikasi berbasis Node.js, yang digunakan untuk 
mencatat informasi log tentang permintaan (requests) yang masuk ke aplikasi web Kalian. 
Ini sangat berguna untuk memahami bagaimana aplikasi Kalian digunakan dan untuk pemantauan serta 
pemecahan masalah.

Berikut adalah beberapa fitur dan fungsi utama dari Morgan.js:

1.Pencatatan Permintaan: Morgan.js mencatat informasi tentang setiap permintaan HTTP yang diterima oleh 
aplikasi Kalian. Ini mencakup informasi seperti metode HTTP, URL yang diminta, kode status respons, 
dan waktu permintaan.

2.Berbagai Format Log: Kalian dapat mengonfigurasi Morgan.js untuk mencatat informasi log dalam berbagai 
format yang berbeda. Ada format yang sudah ada, seperti "dev" (format yang sering digunakan untuk pengembangan) 
dan "combined" (format yang mencakup banyak informasi). Kalian juga dapat membuat format log kustom 
sesuai kebutuhan Kalian.

3.Integrasi dengan Express.js: Morgan.js adalah middleware yang mudah diintegrasikan dengan framework Express.js. 
Kalian hanya perlu menyertakan middleware ini dalam rantai penanganan permintaan Express Kalian.

4.Pemilihan Tingkat Detail: Kalian dapat mengatur tingkat detail pencatatan log sesuai dengan kebutuhan Kalian. 
Kalian bisa mencatat semua permintaan atau hanya permintaan yang memenuhi kriteria tertentu.

5.Output yang Mudah Dibaca: Morgan.js menghasilkan log yang mudah dibaca dan dipahami, 
sehingga memudahkan pemantauan dan analisis.

6.Fleksibel: Kalian dapat dengan mudah mengintegrasikan Morgan.js dengan berbagai solusi pemantauan
 log atau alat analisis log lainnya.

contoh log morgan:
::1 - - [12/Sep/2023:10:30:45 +0000] "GET /api/users" 200 35 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; 
x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"
::1 - - [12/Sep/2023:10:31:20 +0000] "POST /api/products" 201 19 "-" "PostmanRuntime/7.26.10" */


/**Inventory System Http Request Logger
Kita akan implementasi morgan di project ini, buatlah file morgan.js didalam folder config

config/morgan.js
const morgan = require('morgan');
const config = require('./config');
const logger = require('./logger');

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const getIpFormat = () => (config.env === 'production' ? ':remote-addr - ' : '');
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const successHandler = morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) },
});

module.exports = {
  successHandler,
  errorHandler,
};


penjelasan dari code ini :

1.Pengimporan Modul:
const morgan = require('morgan');
const config = require('./config');
const logger = require('./logger');

Kode ini mengimpor modul-modul yang diperlukan, yaitu Morgan.js untuk logging, modul konfigurasi (config) 
yang mungkin berisi pengaturan lingkungan aplikasi, dan modul logger kustom (logger) yang digunakan 
untuk menangani log.

2.Penciptaan Token Kustom:
morgan.token('message', (req, res) => res.locals.errorMessage || '');

Di sini, Kalian membuat token kustom bernama "message" dalam Morgan.js. Token ini akan digunakan untuk 
mencetak pesan error khusus dalam log. Token ini mengambil pesan error dari res.locals.errorMessage 
jika ada, atau akan menggunakan string kosong jika tidak ada.

3.Format Log:
const getIpFormat = () => (config.env === 'production' ? ':remote-addr - ' : '');
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

Di sini, Kalian mendefinisikan format log untuk permintaan sukses (successResponseFormat) 
dan permintaan dengan error (errorResponseFormat). Format ini termasuk berbagai token yang akan 
digantikan dengan informasi aktual ketika permintaan dicatat. Misalnya, :method akan digantikan 
dengan metode HTTP, dan :response-time akan digantikan dengan waktu respons dalam milidetik.

4.Handler Logging Sukses dan Error:

   
   const successHandler = morgan(successResponseFormat, {
     skip: (req, res) => res.statusCode >= 400,
     stream: { write: (message) => logger.info(message.trim()) },
   });
   
   const errorHandler = morgan(errorResponseFormat, {
     skip: (req, res) => res.statusCode < 400,
     stream: { write: (message) => logger.error(message.trim()) },
   });
   

   Di sini, Kalian membuat dua instance Morgan.js: successHandler dan errorHandler. 
   
successHandler digunakan untuk mencatat permintaan sukses (kode status respons < 400). 
Jika permintaan adalah sukses, pesan log akan dicetak ke logger dengan tingkat info.
errorHandler digunakan untuk mencatat permintaan dengan error (kode status respons >= 400). 
Jika ada error, pesan log akan dicetak ke logger dengan tingkat error.

5.Ekspor Handler Logging:
module.exports = {
  successHandler,
  errorHandler,
};

Kode ini mengexport successHandler dan errorHandler sehingga mereka dapat digunakan dalam aplikasi 
Express.js Kalian dengan mengimpor modul ini. */


/**Masukan Middleware Morgan di App.js
update app.js kalian untuk memakai morgan di middleware express.js

const express = require('express');
const router = require('./routes');
const config = require('./config/config')
const morgan = require('./config/morgan');

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

module.exports = app;

mungkin disini kalian bingung, kenapa kita harus check dahulu env kita test atau bukan. karena env test 
itu tidak perlu melihat logging http request, pada dasarnya ketika backend kalian di stage testing http 
request nya hanyalah mock (palsu).
Inventory System Checkpoint
jalankan server kalian, dan hit url "/" untuk check apakah morgan kita jalan atau tidak. 

 npm run dev

> inventory-system@1.7.0 dev
> cross-env NODE_ENV=development nodemon src/index.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
info: Connected to Database
info: Listening to port 3000
info: GET / 304 - 2.058 ms
info: GET / 304 - 0.320 ms
info: GET / 304 - 0.253 ms*/