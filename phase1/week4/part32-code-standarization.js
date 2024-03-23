/*
Standarisasi kode (code standardization) adalah praktik yang mengacu pada pembuatan dan penerapan aturan 
dan pedoman yang konsisten dalam penulisan kode dalam suatu proyek perangkat lunak atau dalam komunitas 
pengembang perangkat lunak. Tujuan dari standarisasi kode adalah untuk menjaga konsistensi, meningkatkan 
kerjasama tim, mempermudah pemeliharaan kode, dan mengurangi kesalahan.

Berikut adalah beberapa aspek penting dari standarisasi kode:

1. Gaya Kode (Coding Style): Ini mencakup konvensi penulisan kode, seperti penggunaan indentasi, 
penggunaan spasi atau tab, pemformatan baris baru, dan sebagainya. Memiliki gaya kode yang konsisten membantu 
kode terlihat rapi dan mudah dibaca.

2. Penamaan Variabel dan Fungsi (Naming Conventions): Menentukan aturan untuk memberi nama variabel, fungsi, 
kelas, dan objek dalam kode. Penamaan yang baik dan deskriptif mempermudah pemahaman tentang apa yang 
dilakukan oleh variabel atau fungsi tersebut.

3. Komposisi Kode (Code Composition): Standar ini mencakup cara mengorganisasi kode, seperti bagaimana 
mendefinisikan fungsi, kelas, modul, dan berkas. Ini juga bisa termasuk aturan tentang penggunaan komentar 
dalam kode.

4. Penggunaan Bahasa dan Library:
-Penggunaan Bahasa: Menentukan aturan tentang bagaimana menggunakan fitur bahasa pemrograman tertentu, 
misalnya, apakah menggunakan fitur ES6 JavaScript atau tidak.
-Penggunaan Library Eksternal: Menentukan aturan untuk memilih, mengintegrasikan, dan menggunakan pustaka 
eksternal atau dependensi dalam proyek.

5. Komentar dan Dokumentasi (Comments and Documentation): Aturan tentang bagaimana mendokumentasikan kode, 
termasuk penggunaan komentar, pembuatan dokumentasi kode, dan penjelasan struktur data atau algoritma yang 
kompleks.

6. Manajemen Kesalahan (Error Handling): Standar untuk cara menangani kesalahan dan pengecualian dalam kode, 
termasuk penggunaan try-catch blok atau pengembalian kode status HTTP.

7. Keamanan: Menentukan aturan keamanan, seperti cara menghindari kerentanan keamanan umum seperti 
injeksi SQL atau XSS (Cross-Site Scripting).

8. Testing: Menentukan aturan pengujian kode, termasuk cara menulis unit test, integrasi test, 
dan pengujian otomatis.

9. Version Control: Standar untuk penggunaan sistem kontrol versi (version control system) seperti Git, 
termasuk cara membuat commit, branch, dan menggabungkan kode.

Standarisasi kode memainkan peran penting dalam pengembangan perangkat lunak yang sukses karena membantu 
menjaga kualitas kode, mempercepat pemeliharaan, memungkinkan kerja tim yang efisien, dan mengurangi 
kerentanan keamanan. Dalam proyek-proyek besar atau dalam komunitas pengembang, 
standarisasi kode menjadi semakin kritis karena membantu memastikan bahwa banyak orang dapat 
berkontribusi ke proyek dengan cara yang koheren dan terkoordinasi. */



/**File .editorconfig adalah konfigurasi yang digunakan untuk mengatur preferensi format kode dalam suatu 
 * proyek. Ini digunakan untuk menjaga konsistensi format kode di seluruh proyek, terutama jika tim 
 * pengembangan terdiri dari beberapa pengembang yang menggunakan berbagai editor kode yang berbeda.

Mari kita bahas beberapa bagian dari .editorconfig ini:

1. root = true: Ini menunjukkan bahwa file .editorconfig ini adalah file root, yang berarti konfigurasi ini 
akan berlaku untuk seluruh proyek dan direktori di bawahnya. Ini adalah tanda awal file .editorconfig.

2. [*]: Ini adalah sebuah pola yang cocok dengan semua file di dalam proyek. Dalam konteks 
.editorconfig, [*] berarti konfigurasi ini akan diterapkan pada semua jenis file di proyek.

3. indent_style = space: Ini mengatur bahwa gaya indentasi yang digunakan dalam proyek adalah spasi. 
Ini berarti bahwa saat Kalian membuat indentasi, Kalian harus menggunakan spasi, bukan tab.

4. indent_size = 2: Ini mengatur ukuran indentasi 
(jumlah spasi yang digunakan untuk setiap tingkat indentasi) menjadi 2 spasi.

5. end_of_line = lf: Ini mengatur penggunaan karakter end-of-line (EOL) menjadi LF (Line Feed). 
Ini adalah pilihan yang umum digunakan dalam proyek-proyek berbasis Unix atau Linux.

6. charset = utf-8: Ini mengatur pengkodean karakter yang digunakan dalam proyek menjadi UTF-8, 
yang adalah pengkodean karakter yang sangat umum dan mendukung banyak karakter dari berbagai bahasa.

7. trim_trailing_whitespace = true: Ini mengatur agar spasi yang berada di akhir baris kode dihapus 
secara otomatis saat menyimpan file.

8. insert_final_newline = true: Ini mengatur agar baris baru (newline) ditambahkan secara otomatis pada 
akhir file saat menyimpan file.

Dengan mengatur preferensi ini dalam .editorconfig, Kalian dapat memastikan bahwa seluruh tim pengembangan 
akan mengikuti aturan yang sama dalam hal format kode dan pengkodean karakter di seluruh proyek, 
sehingga membantu menjaga konsistensi kode yang lebih baik. Setiap kali Kalian atau tim Kalian menggunakan 
editor yang mendukung konfigurasi .editorconfig, preferensi ini akan otomatis diterapkan. */



/**ESLINT 
ESLint adalah sebuah alat (tool) linting kode JavaScript yang digunakan untuk menganalisis kode 
JavaScript Kalian dan memberikan rekomendasi atau peringatan terkait gaya penulisan kode, 
praktik terbaik, dan potensi masalah dalam kode tersebut.

ESLint membantu mengidentifikasi 
dan menghindari kesalahan umum dalam kode JavaScript, memastikan bahwa kode Kalian sesuai dengan 
standar tertentu, dan menjaga kualitas kode yang lebih tinggi.

Beberapa hal yang dapat dilakukan oleh ESLint meliputi:

1. Pemeriksaan Gaya Kode: ESLint dapat membantu memastikan bahwa kode Kalian mengikuti suatu gaya 
penulisan tertentu, seperti gaya Airbnb, Google, atau standar kode yang Kalian tentukan. 
Ini membantu membuat kode lebih mudah dibaca dan dipahami oleh tim pengembangan.

2. Deteksi Kesalahan: ESLint dapat mendeteksi dan memberikan peringatan tentang kesalahan sintaksis 
dalam kode JavaScript Kalian, seperti penggunaan variabel yang tidak dideklarasikan, pemanggilan 
fungsi yang salah, atau kesalahan dalam penggunaan operator.

3. Pemeriksaan Praktik Terbaik: ESLint dapat memberikan rekomendasi tentang praktik terbaik dalam 
penulisan kode JavaScript, seperti menghindari variabel yang tidak terpakai, menggunakan tipe data 
yang benar, atau menghindari pemakaian fitur yang sudah usang.

4. Konfigurasi yang Fleksibel: Kalian dapat mengonfigurasi ESLint sesuai dengan preferensi dan 
kebutuhan proyek Kalian. Kalian dapat menentukan aturan khusus yang ingin diterapkan atau menonaktifkan 
aturan tertentu jika diperlukan.

5. Integrasi dengan Editor: Banyak editor kode seperti Visual Studio Code, Sublime Text, dan lainnya 
mendukung integrasi ESLint. Ini berarti ESLint dapat berjalan secara otomatis dalam editor Kalian, 
memberikan umpan balik langsung saat Kalian menulis kode.

ESLint sangat berguna dalam proyek pengembangan perangkat lunak besar dan tim pengembangan yang 
melibatkan banyak pengembang. Dengan mengintegrasikan ESLint dalam alur kerja pengembangan, 
Kalian dapat memastikan kualitas kode yang lebih tinggi, meningkatkan konsistensi kode, dan 
mengidentifikasi masalah sejak dini, yang dapat membantu mencegah terjadinya bug yang sulit diatasi 
di kemudian hari.

Explore : https://eslint.org/  */



/**.lintstagedrc.json
{
    "*.js": "eslint"
}

ini file untuk mengaktifkan eslint disemua file js kalian.



.eslintrc.json
{
  "env": {
    "node": true,
    "jest": true
  },
  "extends": ["airbnb-base", "plugin:jest/recommended", "plugin:security/recommended", "plugin:prettier/recommended"],
  "plugins": ["jest", "security", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "error",
    "func-names": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "jest/expect-expect": "off",
    "security/detect-object-injection": "off"
  }
}

Ini adalah file untuk konfigurasi untuk ESLint, sebuah alat linting kode JavaScript yang digunakan 
untuk menganalisis dan memeriksa kode JavaScript Kalian. Konfigurasi ini menentukan aturan dan 
pengaturan khusus yang akan diterapkan oleh ESLint saat memeriksa kode Kalian. Mari kita perinci apa 
yang diatur dalam konfigurasi ini:

env: Ini adalah objek yang mendefinisikan lingkungan di mana kode Kalian dijalankan. Dalam kasus ini:
- "node": true": Ini mengaktifkan aturan yang berkaitan dengan lingkungan Node.js, sehingga ESLint akan memeriksa 
kode Kalian dengan mempertimbangkan lingkungan Node.js.
- "jest": true": Ini mengaktifkan aturan yang berkaitan dengan lingkungan pengujian Jest, yang berguna jika 
Kalian menggunakan Jest sebagai kerangka pengujian.

extends: Ini adalah daftar konfigurasi yang akan di-extend atau diambil oleh konfigurasi ESLint Kalian. 
Dalam kasus ini:
- "airbnb-base": Ini adalah konfigurasi dari Airbnb yang merupakan standar komunitas yang ketat untuk gaya 
penulisan kode JavaScript. Ini memastikan Kalian mengikuti gaya penulisan kode yang ketat.
- "plugin:jest/recommended": Ini mengambil konfigurasi rekomendasi dari plugin Jest untuk pengujian unit.
- "plugin:security/recommended": Ini mengambil konfigurasi rekomendasi dari plugin keamanan, yang memeriksa 
potensi masalah keamanan dalam kode Kalian.
- "plugin:prettier/recommended": Ini mengambil konfigurasi rekomendasi dari plugin Prettier, yang membantu memformat 
kode Kalian secara otomatis untuk menjaga konsistensi.

plugins: Ini adalah daftar plugin yang digunakan oleh ESLint. Dalam kasus ini, plugin Jest, plugin keamanan, 
dan plugin Prettier digunakan.

parserOptions: Ini adalah opsi untuk mengkonfigurasi pemahaman kode. Dalam kasus ini, ecmaVersion disetel 
ke 2018, yang menunjukkan bahwa kode Kalian mengikuti spesifikasi ECMAScript 2018.

rules: Ini adalah daftar aturan yang Kalian atur untuk proyek Kalian. Beberapa aturan dapat dimatikan atau 
diubah dari nilai default. Misalnya, "no-console": "error" berarti bahwa menggunakan console.log akan 
menghasilkan kesalahan (error), dan "func-names": "off" mematikan aturan yang mengharuskan fungsi memiliki nama. 
Aturan-aturan lainnya juga dimatikan atau dimodifikasi sesuai dengan preferensi Kalian.

Dengan konfigurasi ini, Kalian memastikan bahwa ESLint akan memeriksa kode Kalian sesuai dengan aturan yang 
ketat, termasuk gaya penulisan kode dari Airbnb, serta aturan terkait keamanan dan pengujian. 
Juga, Prettier digunakan untuk memastikan bahwa kode Kalian diformat dengan baik secara otomatis. 
Jika Kalian menggunakan Jest, konfigurasi ini juga mengaktifkan aturan yang relevan untuk Jest.


.eslintignore file
node_modules
bin

ini mirip seperti .gitignore fungsinya untuk ignore folder agar tidak menggunakan ESLint di folder tersebut. */



/**.prettierrc.json
{
  "singleQuote": true,
  "printWidth": 125
}

File prettierrc.json adalah berkas konfigurasi untuk Prettier, sebuah alat yang digunakan untuk memformat kode 
secara otomatis agar sesuai dengan aturan tertentu yang telah ditentukan. Konfigurasi ini mengatur preferensi 
pemformatan kode yang akan diterapkan oleh Prettier. Mari kita bahas dua opsi yang ditetapkan dalam konfigurasi ini:

"singleQuote": true: Opsi ini mengatur Prettier untuk menggunakan tanda kutip tunggal (') sebagai karakter 
pembungkus untuk string, alih-alih tanda kutip ganda ("). Contohnya, jika Kalian memiliki string "Hello, World!", 
Prettier akan mengubahnya menjadi 'Hello, World!'. Penggunaan tanda kutip tunggal atau ganda adalah 
preferensi pribadi dan gaya penulisan kode yang berbeda dapat memilih salah satu.

"printWidth": 125: Opsi ini mengatur lebar maksimum pada baris kode. Ketika sebuah baris kode melebihi lebar ini, 
Prettier akan memecahnya menjadi beberapa baris sehingga tetap berada dalam batas lebar yang ditentukan. 
Dalam konfigurasi ini, lebar maksimum adalah 125 karakter. Ini membantu menjaga agar kode tetap mudah dibaca, 
terutama pada layar yang lebih sempit atau ketika kita ingin mencetak kode.

Jadi, dengan konfigurasi ini, Prettier akan memastikan bahwa kode Kalian akan menggunakan tanda kutip tunggal 
untuk string dan tidak akan melewati batas lebar maksimum sebesar 125 karakter dalam satu baris kode 
saat melakukan pemformatan. 
Kalian dapat menyesuaikan konfigurasi Prettier sesuai dengan preferensi gaya penulisan kode Kalian.



.prettierignore file 
sama seperti file ignore lainnya, kita tidak perlu menggunakan prettier pada folder/file ini:
node_modules
coverage

*/

/*
Cara menggunakan fitur ESLINT
masih ingat set up package.json kita , kita menulis command script ini :
"scripts": {
    "start": "pm2 start ecosystem.config.json --no-daemon",
    "dev": "cross-env NODE_ENV=development nodemon src/index.js",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",   */
    // "prettier": "prettier --check **/*.js", 
    // "prettier:fix": "prettier --write **/*.js",
//   },


// sekarang kalian bisa menggunakan command tersebut untuk merapihkan code kalian.

// npm run lint -> untuk check problem standarisasi code kalian
// npm run lint:fix -> fixing otomatis code kalian sesuai standarisasi
// npm run prettier -> untuk check problem prettier di code kalian
// npm run prettier -> fixing otomatis prettier (indentasi) di code kalian
//  */