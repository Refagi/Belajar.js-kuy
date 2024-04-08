/*Authentication (Otentikasi) dan Authorization (Otorisasi) adalah dua konsep kunci dalam pengembangan backend 
yang berperan penting dalam menjaga keamanan dan mengendalikan akses ke sumber daya sistem. 
Berikut penjelasan singkat tentang keduanya:

* Authentication (Otentikasi):

Authentication adalah proses untuk memverifikasi identitas user atau sistem yang mencoba mengakses aplikasi 
atau sumber daya tertentu. Tujuannya adalah untuk memastikan bahwa entitas yang melakukan permintaan adalah 
apa yang diklaimnya. Biasanya, dalam konteks aplikasi web, otentikasi melibatkan verifikasi identitas user 
dengan cara sebagai berikut:

1.Username dan Password: Pengguna mengirimkan kombinasi username dan password yang valid. 
Sistem membandingkan kombinasi ini dengan data yang tersimpan dalam basis data. Jika cocok, 
user dianggap berhasil diotentikasi.

   
2.Token Authentication: Pengguna mungkin menggunakan token (seperti token JWT) yang diberikan sebelumnya oleh 
sistem saat login. Sistem memeriksa token ini dan memverifikasi apakah token itu sah dan belum kedaluwarsa.

   
3.Authentication Provider Eksternal: Beberapa aplikasi menggunakan penyedia otentikasi eksternal seperti OAuth atau 
OpenID Connect. Pengguna diarahkan ke layanan pihak ketiga untuk otentikasi dan mendapatkan token yang akan 
digunakan untuk mengakses aplikasi.

Setelah berhasil diotentikasi, user akan diberi hak untuk mengakses sumber daya atau fitur tertentu dalam aplikasi.

* Authorization (Otorisasi):

Authorization adalah proses untuk mengontrol akses user atau entitas yang telah diotentikasi ke berbagai 
sumber daya atau fitur dalam aplikasi. Otorisasi berfokus pada pertanyaan: "Pengguna ini diizinkan melakukan apa?"
   
1.Role-Based Authorization: Salah satu pendekatan umum adalah dengan memberikan user peran atau peran 
(role) tertentu. Setiap peran memiliki hak akses yang berbeda ke sumber daya aplikasi. 
Misalnya, admin mungkin memiliki hak akses penuh, sedangkan user biasa hanya memiliki akses terbatas.

2.Attribute-Based Authorization: Selain peran, otorisasi juga dapat berdasarkan atribut tertentu. 
Misalnya, sebuah sistem perbankan mungkin hanya memungkinkan pemilik rekening mengakses rekening mereka sendiri.

3.Policy-Based Authorization: Dalam beberapa kasus, otorisasi dapat diprogram secara lebih kompleks menggunakan 
kebijakan (policy) yang ditentukan oleh pengembang. 
Penggunaan kebijakan memungkinkan kontrol yang sangat halus atas akses.

Authorization memastikan bahwa setiap user hanya dapat mengakses sumber daya yang sesuai dengan hak akses mereka, 
dan ini membantu melindungi data sensitif dan menjaga integritas aplikasi.

Kombinasi dari otentikasi dan otorisasi membantu membangun sistem yang aman, 
memastikan bahwa hanya user yang diotentikasi yang memiliki akses yang sesuai ke sumber daya aplikasi, 
dan ini adalah bagian penting dari strategi keamanan dalam pengembangan backend. */


/*Cara kerja Authentication & Authorization di Express.js

Cara kerja Authentication (Otentikasi) dan Authorization (Otorisasi) di aplikasi Express.js melibatkan beberapa 
langkah dan konsep utama. Berikut adalah panduan singkat tentang cara kerja keduanya di Express.js:

- Authentication (Otentikasi):
   
1.Pengguna Mengirim Permintaan: Proses otentikasi dimulai ketika user mengirimkan permintaan HTTP ke aplikasi Kalian, 
seperti permintaan masuk (login) atau permintaan untuk mengakses sumber daya tertentu.
   
2.Verifikasi Identitas Pengguna: Aplikasi Kalian akan memeriksa identitas user. 
Ini bisa berarti memvalidasi kombinasi username dan password, memeriksa token otentikasi, 
atau menggunakan penyedia otentikasi eksternal seperti OAuth.
   
3.Generasi Token: Jika user berhasil diotentikasi, aplikasi Kalian akan menghasilkan token 
otentikasi (biasanya token JWT) atau sesi yang akan digunakan untuk mengidentifikasi user di masa depan.

4.Pengiriman Token ke Pengguna: Token otentikasi atau sesi akan dikirimkan kembali ke user sebagai bagian dari 
respons HTTP. Pengguna biasanya akan menyimpan token ini, misalnya dalam cookie atau lokal storage.


-Authorization (Otorisasi):
   
1.Pengguna Mengirim Permintaan dengan Token: Ketika user mengirimkan permintaan HTTP berikutnya, 
mereka akan menyertakan token otentikasi yang mereka terima selama proses otentikasi. 
Ini bisa disertakan dalam header permintaan atau sebagai parameter.
 
2.Pengecekan Hak Akses: Middleware otorisasi akan memeriksa token dan mengidentifikasi user. 
Selain itu, middleware ini akan memeriksa hak akses user berdasarkan peran atau atribut tertentu yang mereka miliki.
   
3.Keputusan Otorisasi: Berdasarkan hak akses user dan permintaan yang diajukan, 
middleware akan membuat keputusan tentang apakah user memiliki izin untuk mengakses sumber daya atau fitur tertentu. Jika user memiliki hak akses yang sesuai, permintaan akan dilanjutkan.

4.Respons Otorisasi: Jika user tidak memiliki hak akses yang sesuai, 
middleware otorisasi akan menghasilkan respons HTTP yang sesuai, seperti 403 Forbidden, untuk menolak permintaan.
   
5.Akses Sumber Daya: Jika user diotorisasi, mereka akan memiliki akses ke sumber daya atau fitur yang diminta. 
Aplikasi Kalian akan melanjutkan pemrosesan permintaan sesuai dengan logika bisnis yang diterapkan.

Dalam Express.js, Kalian dapat mengimplementasikan otentikasi dan otorisasi dengan menggunakan middleware khusus, 
seperti passport untuk otentikasi dan middleware tambahan untuk otorisasi. 
Kalian juga dapat memanfaatkan library atau framework yang menyediakan solusi siap pakai 
untuk otentikasi dan otorisasi. */


/*ENKRIPSI PASSWORD
Mengapa kita menggunakan enkripsi password user dalam backend menggunakan algoritma seperti bcrypt adalah 
karena keamanan. Enkripsi password adalah praktik keamanan yang penting dalam pengembangan aplikasi web 
atau sistem yang melibatkan otentikasi user. 
Berikut adalah beberapa alasan mengapa kita perlu menggunakan bcrypt atau algoritma hashing lainnya 
untuk mengenkripsi password:

1.Perlindungan Terhadap Serangan Data Breach: Dalam kasus ketika database aplikasi diretas atau bocor, 
password user yang tersimpan dalam database harus tetap aman. 
Dengan menggunakan bcrypt atau algoritma hashing yang kuat, 
password diubah menjadi nilai yang sangat sulit untuk didekripsi kembali, 
bahkan jika penyusup mendapatkan akses ke database.

2.Rahasia Password: Dengan menggunakan bcrypt, tidak ada yang dapat melihat atau mengakses kata sandi asli user, 
termasuk administrator sistem atau pengembang aplikasi. Ini menjaga kerahasiaan password user.

3.Proteksi Terhadap Serangan Brute Force: Bcrypt dan algoritma hashing lainnya memperlambat serangan brute force. 
Mereka melakukan iterasi (pengulangan) terhadap algoritma hashing, yang membuat serangan mencoba semua kemungkinan 
kata sandi menjadi lebih lambat dan tidak praktis.

4.Solusi yang Standar: Bcrypt adalah salah satu algoritma hashing yang paling umum digunakan dan telah diuji oleh
komunitas keamanan. Ini adalah standar industri dalam mengenkripsi kata sandi user.

5.Kemungkinan Tidak Tergantung pada Keamanan Jaringan: Dalam beberapa situasi, 
jaringan atau lapisan transportasi mungkin tidak selalu aman. Dengan mengenkripsi kata sandi sebelum disimpan 
dalam database, Kalian memberikan lapisan tambahan keamanan yang tidak tergantung pada keamanan jaringan.

6.Kemungkinan Penyimpanan Kata Sandi yang Aman: Dengan mengenkripsi kata sandi, 
bahkan admin database atau penyedia hosting tidak akan memiliki akses langsung ke kata sandi user. 
Ini mengurangi risiko penyalahgunaan akses oleh pihak ketiga.

7.Kemungkinan Penyimpanan Kata Sandi yang Konsisten: Dengan menggunakan algoritma hashing, 
Kalian dapat memastikan bahwa semua kata sandi user disimpan dalam format yang konsisten, 
sehingga memudahkan perbandingan dan verifikasi.

Dalam pengembangan aplikasi web, sangat penting untuk memperlakukan keamanan kata sandi user dengan serius. 
Dengan menggunakan algoritma hashing seperti bcrypt, Kalian dapat memberikan perlindungan yang kuat terhadap 
kata sandi user dan menjaga data mereka tetap aman bahkan dalam skenario yang paling buruk 

Explore : 
JWT : https://jwt.io/
passport.js : https://www.passportjs.org/
bcrypt.js : https://www.npmjs.com/package/bcryptjs

Auth0 : https://manage.auth0.com/dashboard/us/dev-0va3b6240rb01m8y/
*/
