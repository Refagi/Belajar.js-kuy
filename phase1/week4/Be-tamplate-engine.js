/*
Menggunakan template engine EJS (Embedded JavaScript) adalah cara yang sangat berguna untuk menghasilkan 
tampilan dinamis dalam aplikasi web Node.js Kalian. EJS memungkinkan Kalian untuk memasukkan kode 
JavaScript ke dalam file HTML Kalian, yang membuatnya lebih mudah untuk menghasilkan tampilan yang berubah 
berdasarkan data atau logika di sisi server. Berikut adalah panduan langkah-demi-langkah tentang bagaimana 
Kalian dapat belajar dan menggunakan EJS:

1. Persiapan Awal:
   
- Pastikan Kalian memiliki Node.js terinstal di komputer Kalian. Kalian dapat mengunduhnya dari situs resmi Node.js.

   
- Buat proyek Node.js atau gunakan proyek yang sudah ada.

   
Instal modul EJS dengan perintah npm:
   npm install ejs


2. Konfigurasi Middleware EJS:

Di dalam aplikasi Node.js Kalian, Kalian perlu mengkonfigurasi middleware EJS agar dapat menggunakan 
template engine ini. Di bawah adalah contoh bagaimana Kalian dapat melakukannya menggunakan Express.js:

   
   const express = require('express');
   const app = express();

   app.set('view engine', 'ejs'); // Mengatur EJS sebagai template engine
   app.set('views', path.join(__dirname, 'views')); // Mengatur direktori views

   // Middleware lain dan rute aplikasi
   


3. Buat Template EJS:

   Buat file template EJS di direktori yang telah Kalian tentukan sebagai direktori views. 
   Sebagai contoh, Kalian dapat membuat file dengan nama index.ejs:

   <!DOCTYPE html>
   <html>
   <head>
     <title>Contoh Template EJS</title>
   </head>
   <body>
     <h1><%= judul %></h1>
     <p><%= pesan %></p>
   </body>
   </html>

Di atas, Kalian dapat melihat bahwa Kalian dapat menyisipkan kode JavaScript dengan menggunakan 
tanda <%= %>. Variabel judul dan pesan adalah variabel yang akan disetel dan digunakan di sisi server.



4. Gunakan Template EJS dalam Rute:

   Di dalam rute-rute Kalian, Kalian dapat menggunakan template EJS untuk merender halaman web. 
   Contoh di bawah ini menggunakan Express.js:

   
   app.get('/', (req, res) => {
     res.render('index', {
       judul: 'Selamat Datang!',
       pesan: 'Ini adalah contoh template EJS.'
     });
   });
   


   Dalam contoh ini, res.render digunakan untuk merender file index.ejs dengan variabel judul dan pesan 
   yang telah diatur.


5. Jalankan Aplikasi Kalian:

   Terakhir, jalankan aplikasi Node.js Kalian dengan perintah:

   node app.js
   
Kemudian, buka browser Kalian dan akses http://localhost:3000 (sesuaikan dengan port yang Kalian gunakan).
 Kalian harus melihat halaman web dengan judul dan pesan yang telah Kalian tentukan dalam rute.

Selamat, Kalian sekarang telah memulai penggunaan EJS sebagai template engine dalam aplikasi Node.js Kalian! 
Kalian dapat terus mempelajari EJS dengan menggali lebih dalam tentang penggunaannya, 
termasuk cara mengulang data, membuat layout umum, dan banyak fitur lainnya yang disediakan oleh EJS.
*/