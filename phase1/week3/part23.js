/**Express.js adalah kerangka kerja (framework) JavaScript yang berjalan di atas Node.js. Ini adalah salah satu 
 * kerangka kerja web yang paling populer dalam ekosistem Node.js. Express.js dirancang khusus untuk mempermudah 
 * pembuatan aplikasi web dan API backend dengan cara yang efisien dan sederhana. Berikut adalah beberapa alasan 
 * mengapa orang menggunakan Express.js dan cara menggunakannya untuk membuat API backend:

Mengapa Menggunakan Express.js:

1.Ringan dan Minimalis: 
Express.js adalah kerangka kerja yang ringan dan minimalis, yang berarti Kalian dapat menggunakannya untuk 
membangun aplikasi web atau API sesuai dengan kebutuhan Kalian. Kalian dapat menambahkan fungsionalitas tambahan 
melalui middleware atau paket pihak ketiga sesuai kebutuhan.

2.Rute (Routing) yang Kuat: 
Express.js menyediakan sistem rute yang kuat untuk mengelola permintaan HTTP ke endpoint yang sesuai. 
Ini memungkinkan Kalian dengan mudah menentukan berbagai rute yang berbeda untuk menangani 
permintaan yang berbeda.

3.Middleware: 
Express.js memungkinkan Kalian untuk menggunakan middleware untuk mengubah dan memproses permintaan HTTP 
sebelum mencapai endpoint akhir. Ini sangat berguna untuk autentikasi, otorisasi, logging, dan banyak lagi.

4.Ketersediaan Banyak Paket Pihak Ketiga:
Ada banyak paket pihak ketiga yang dapat Kalian integrasikan dengan Express.js untuk menambahkan fungsi khusus 
seperti otentikasi (contoh: Passport.js), validasi input (contoh: express-validator), dan lainnya.

5.Komunitas Besar:
Express.js memiliki komunitas yang besar, sehingga Kalian dapat dengan mudah menemukan sumber daya, tutorial, 
dan bantuan dari komunitas jika menghadapi masalah. */



/**Cara Menggunakan Express.js untuk Membuat API Backend:

Berikut adalah langkah-langkah umum untuk membuat API backend menggunakan Express.js:

Instalasi Express.js: 
Pertama, Kalian perlu membuat proyek Node.js dan menginstal Express.js. 
Kalian dapat melakukannya dengan menjalankan perintah npm install express dalam direktori proyek Kalian.

Inisialisasi Express.js: Buat file JavaScript (biasanya bernama app.js atau server.js) dan inisialisasikan 
Express.js di dalamnya:
*/
   
   const express = require('express');
   const app = express();
   const port = 3000; // Port server akan berjalan

   // Middleware
   app.use(express.json()); // Middleware untuk parsing JSON

   // Definisikan rute-rute API Kalian di sini

   // Jalankan server
   app.listen(port, () => {
     console.log(`Server berjalan di port ${port}`);
   });
   


// Definisikan Rute-rute API: Gunakan metode HTTP seperti GET, POST, PUT, dan DELETE untuk menentukan rute dan 
// menghubungkannya dengan fungsi pengendali (controller) yang akan menangani permintaan dan memberikan respons.

   
   // Contoh definisi rute GET
   app.get('/api/produk', (req, res) => {
     // Logika untuk mengambil data produk dari database
     res.json({ message: 'Data produk ditemukan', data: produk });
   });
   


// Gunakan Middleware: Kalian dapat menggunakan middleware untuk otentikasi, otorisasi, logging, validasi input, 
// dan tugas-tugas lainnya sebelum permintaan mencapai pengendali (controller) yang sesuai.

   
   // Middleware untuk otorisasi
   function authorize(req, res, next) {
     // Logika otorisasi di sini
     if (penggunaDiizinkan) {
       next(); // Lanjutkan ke pengendali berikutnya
     } else {
       res.status(403).json({ message: 'Akses ditolak' });
     }
   }

   // Gunakan middleware di rute tertentu
   app.get('/api/private', authorize, (req, res) => {
     // Logika untuk mengakses data rahasia
   });
   


// Jalankan Server: Terakhir, jalankan server Kalian dengan menggunakan app.listen seperti yang ditunjukkan dalam 
// kode inisialisasi di atas.

// Uji API Kalian: Kalian dapat menguji API Kalian dengan menggunakan perangkat lunak pengujian API seperti Postman 
// atau menggunakan aplikasi frontend untuk membuat permintaan ke API Kalian. */