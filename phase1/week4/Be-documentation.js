/*
Belajar API documentation adalah langkah penting dalam memahami dan menggunakan antarmuka pemrograman 
aplikasi (API). API documentation memberikan panduan yang jelas tentang cara menggunakan API, 
termasuk endpoint, parameter, tipe data yang digunakan, dan cara berinteraksi dengan API tersebut. 

Kenapa dokumentasi itu penting ? 
Backend Developer sudah pasti akan bekerjasama dengan frontend dalam development aplikasi, 
API API yang dibuat sama backend sudah pasti di konsum sama frontend. nah masalahnya front end itu tidak 
tau detail dari API tersebut, karena dia tidak melihat sisi detail flow yang ada dibackend dan gimana cara 
backend bekerja. (front end hanya tau result nya saja) jadi itu tidak bagus.

Cara frontend tau flow dari backend dan maksud dari setiap API yang backend buat yaitu dengan dokumentasi API.
dokumentasi API ini ada berbagai macam, disini gua akan kasih contoh macam macam dokumentasi API.

Readme MD
README.md adalah sebuah file yang berisi dokumentasi dan instruksi singkat tentang suatu proyek perangkat 
lunak atau repositori yang ditulis dalam format Markdown (disingkat sebagai "MD"). 
File README.md sangat umum digunakan di GitHub dan platform pengelolaan kode sumber lainnya untuk memberikan 
informasi kepada pengguna atau pengembang tentang bagaimana menggunakan, menginstal, atau berkontribusi 
pada proyek tersebut. 

Format Markdown (MD) adalah cara sederhana untuk memformat teks dengan menggunakan sintaksis yang mudah 
dibaca. Ini memungkinkan penulis untuk menambahkan elemen seperti judul, daftar, tautan, gambar, dan kode 
dengan cara yang mudah dimengerti. Markdown digunakan secara luas dalam pengembangan perangkat lunak untuk 
membuat dokumen yang dapat dibaca oleh manusia dan dengan mudah diubah menjadi HTML atau format lainnya.

Beberapa informasi umum yang biasanya disertakan dalam README.md adalah:

1. Judul Proyek: Nama proyek yang jelas agar orang dapat mengidentifikasinya.

2. Deskripsi: Deskripsi singkat tentang apa proyek tersebut dan apa tujuan utamanya.

3. Cara Penggunaan: Instruksi tentang cara menginstal, mengonfigurasi, dan menggunakan proyek tersebut. 
Ini dapat mencakup contoh-contoh penggunaan dan perintah yang dibutuhkan.

4. Kontribusi: Jika proyek ini adalah proyek open-source dan ingin mengundang kontribusi dari orang lain, 
README.md dapat berisi informasi tentang cara berkontribusi, panduan kode, dan cara mengajukan permintaan 
penarikan (pull request).

5. Lisensi: Informasi tentang lisensi yang digunakan dalam proyek tersebut, yang menjelaskan hak dan 
batasan penggunaan proyek oleh orang lain.

6. Tautan: Tautan ke halaman proyek, dokumentasi lebih lanjut, atau sumber daya yang relevan.

7. Pemberitahuan Penting: Informasi penting, catatan rilis, atau perubahan terbaru dalam proyek.

8. Kredit: Pengakuan kepada kontributor atau sumber daya yang digunakan dalam proyek.

README.md yang baik dan informatif dapat membantu pengguna atau kontributor potensial memahami proyek 
Kalian dengan lebih baik dan menghemat waktu mereka. 

Contoh dokumentasi API menggunakan Readme.md :

kalian bisa buka repo url ini : https://github.com/zexoverz/zblog-backend
disitu ada file README.md, penulisan readme ini ada caranya jadi text yang ditulis didalam nya sama hasil 
yang diliat di repo tersebut itu berbeda. 



Postman Collection
Postman Collection adalah kumpulan permintaan (requests) HTTP yang digunakan untuk menguji dan 
mengotomatisasi pengujian API. Postman adalah alat yang sangat populer di kalangan pengembang perangkat 
lunak dan tim pengujian untuk berinteraksi dengan API, mengirim permintaan HTTP, mengambil respons, 
dan mengelola alur kerja pengujian. 

Postman Collection adalah cara untuk mengatur permintaan-permintaan ini ke dalam satu unit yang dapat 
digunakan, dibagi, diekspor, dan diimpor dalam format yang terstruktur.

Berikut beberapa poin penting tentang Postman Collection:

1. Collection Request: Koleksi ini berisi berbagai permintaan HTTP yang digunakan untuk berinteraksi 
dengan API. Ini bisa mencakup permintaan GET, POST, PUT, DELETE, dan metode HTTP lainnya yang diperlukan.

2. Organisasi: Postman Collection memungkinkan Kalian untuk mengorganisasi permintaan dalam folder dan subfolder. 
Ini sangat berguna saat Kalian memiliki banyak permintaan yang terkait.

3. Variable: Kalian dapat menggunakan variabel dalam Postman Collection untuk membuat permintaan yang lebih 
dinamis. Misalnya, Kalian dapat menggunakan variabel untuk menyimpan nilai yang akan digunakan dalam 
beberapa permintaan, seperti token otentikasi.

4. Test dan Scripting: Postman memungkinkan Kalian untuk menambahkan skrip pengujian dan validasi ke permintaan Kalian. 
Ini memungkinkan Kalian untuk secara otomatis menguji respons API dan membuat asertif (assertions) 
berdasarkan kondisi tertentu.

5. Ekspor dan Impor: Kalian dapat mengimpor dan mengekspor koleksi Postman dalam berbagai format, 
termasuk JSON dan file koleksi Postman (.postman_collection.json). 
Ini memudahkan berbagi koleksi dengan tim atau komunitas pengembang lainnya.

6. Kolaborasi: Postman memungkinkan kolaborasi dalam pengembangan dan pengujian API. 
Kalian dapat berbagi koleksi dengan rekan kerja Kalian atau menyimpannya di repositori bersama untuk 
berkolaborasi dalam pengujian dan pengembangan API.

7. Monitor dan Automasi: Postman juga menyediakan alat untuk mengotomatisasi koleksi permintaan Kalian. 
Kalian dapat menjalankan koleksi secara berkala atau dalam respon terhadap peristiwa tertentu 
(seperti penyelesaian pengujian) menggunakan Postman Monitor.




Postman Collection adalah alat yang sangat bermanfaat dalam pengembangan dan pengujian API karena 
memungkinkan pengembang untuk mengelola, menguji, dan berkolaborasi dalam pengembangan API dengan cara 
yang efisien dan terstruktur.

Contoh Documentation API di postman:
Jadi selain kalian bisa testing API di postman, hasil collection yang dibuat di postman ini bisa berfungsi 
untuk dokumentasi API untuk frontend. 
di collection overview kalian bisa nulis description tentang API kalian

Sebisa mungkin, kalian membuat collection folder yang rapih. agar frontend kita tidak bingung dengan service yang kita buat.

dan cara untuk sharing postman collection kalian itu, tinggal export aja di bagian button tiga ini.

sisanya kalian bisa ngasih tau ke frontend untuk set up environtment var yang di pake di postman, 
jadi frontend bisa langsung testing backendnya dengan postman dia sendiri.
*/


/*
Swagger Documentation
Swagger adalah sebuah kerangka kerja yang digunakan untuk mendefinisikan, dokumentasi, dan menguji API secara 
otomatis. Ini membantu dalam memahami, menggunakan, dan berinteraksi dengan API dengan lebih efisien. 
Dokumentasi Swagger menciptakan API yang lebih mudah digunakan dan lebih mudah dimengerti oleh pengembang 
dan pengguna API. Beberapa poin penting tentang Swagger Documentation termasuk:

1. Spesifikasi API: Swagger menggunakan spesifikasi API yang berdasarkan format JSON atau YAML untuk 
mendefinisikan rincian tentang API, termasuk endpoint (titik akhir), metode HTTP yang didukung, 
parameter yang diperlukan, format respons yang diharapkan, dan banyak lagi.

2. UI Interaktif: Swagger menciptakan antarmuka pengguna interaktif yang disebut Swagger UI. 
Ini memungkinkan pengguna untuk menjelajahi dan menguji API tanpa harus menulis kode atau menggunakan alat lain. 
Pengguna dapat melihat daftar endpoint, mengirim permintaan ke endpoint, dan melihat respons API secara 
langsung dalam antarmuka web yang mudah digunakan.

3. Dokumentasi yang Kaya: Swagger menghasilkan dokumen API yang kaya dengan informasi yang lengkap tentang 
cara menggunakan API. Ini mencakup deskripsi endpoint, jenis parameter, kode respons yang mungkin, 
dan contoh permintaan dan respons.

4. Validasi Otomatis: Swagger dapat digunakan untuk memvalidasi permintaan dan respons API secara otomatis 
sesuai dengan spesifikasi API yang telah didefinisikan. Ini membantu memastikan bahwa permintaan yang 
dikirimkan sesuai dengan format yang diharapkan oleh API.

5. Pemutakhiran Otomatis: Ketika perubahan dilakukan pada API, Swagger memungkinkan untuk secara otomatis 
memutakhirkan dokumentasi API. 
Ini membantu memastikan bahwa dokumentasi selalu sinkron dengan API yang sebenarnya.

6. Ekosistem Luas: Swagger telah mendapatkan popularitas yang besar dalam komunitas pengembang dan digunakan 
secara luas. 
Ini berarti banyak alat dan layanan mendukung Swagger, termasuk integrasi dengan bahasa pemrograman populer dan alat pengembangan.

7. OpenAPI: Swagger sekarang dikenal sebagai OpenAPI Specification, yang merupakan standar industri untuk mendefinisikan API 
secara konsisten. 
OpenAPI Specification memungkinkan kompatibilitas lintas platform dan memfasilitasi integrasi API yang lebih mudah.


Dengan Swagger Documentation, pengembang dapat membuat API yang lebih mudah digunakan, 
mendokumentasikan API dengan lebih baik, dan memungkinkan pengguna dan pengembang lain untuk mengakses 
dan memahami API dengan mudah. Ini adalah alat yang sangat bermanfaat dalam pengembangan dan dokumentasi API.

Untuk swagger documentation kita perlu set up config di backend kita, karena dokumentasi ini base on route API. 
Contoh Implementasi nya kita akan belajar di next section pas kalian memakai template backend gua.


LOGIC NOLEP (IS Documentation)
Buatlah API Documentation pada project IS menggunakan readme MD.

Point Point penting dalam tugas ini :
- deskripsi dari dokumentasi API
- detail dari API mulai dari input, response, sampai response error.
- (optional) poin plus jika kalian mendokumentasikan semua fitur dari backend tersebut, mulai dari cara 
kerja validation , middleware yang kalian buat, error handler, sampai menjelaskan model database.
 */