
/**Dalam menggunakan NPM kita dapat menulis perintah pada terminal (Linux/macOS) atau command prompt/PowerShell 
 * (Windows). Ada banyak command yang tersedia pada NPM. Untuk melihat daftarnya, kita dapat menjalankan perintah 
 * npm help pada terminal/command prompt. 
 * Lalu gunakan -h jika kita ingin melihat panduan penggunaan salah satu perintahnya. Contoh, Anda ingin melihat 
 * detail cara penggunaan perintah install, maka untuk melihatnya tuliskan perintah berikut:

npm install -h

-h tidak hanya dapat digunakan pada perintah install saja, tetapi juga pada seluruh perintah lainnya yang ada pada NPM.

Jika melihat panduan pada gambar di atas, kita bisa menemukan beberapa “aliases”. Aliases atau alias merupakan 
cara lain dalam melakukan perintah tersebut. Itu berarti perintah install dapat kita tuliskan dengan 
i, ins, isntal, add, atau yang lainnya.

npm install
npm i
npm in
npm ins
npm isntal
npm add
 
// semua perintah di atas memiliki fungsi yang sama

Alias ini dapat berupa cara cepat (shortcut) dan juga kesalahan pengejaan yang umum (install → isntall). 
Hal tersebut sangat membantu developer agar lebih cepat dalam menuliskan sebuah perintah di command line.

Anda bisa mendapatkan penjelasan lengkap mengenai seluruh perintah yang ada di NPM pada laman resmi 
berikut: https://docs.npmjs.com/cli/v7/commands. Namun, terdapat beberapa perintah penting yang akan biasa kita 
gunakan dalam materi dan juga pengembangan aplikasi selanjutnya.


Command	Description	Common Options
init
Membuat berkas package.json pada project
[--force|-f|--yes|-y|--scope]

install <package-name>
Memasang dan mendaftarkan package pada berkas package.json
[-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]

run-script <command>	
Menjalankan perintah yang terdapat pada objek scripts di berkas package.json	[--silent] [-- <args>...]

uninstall <package-name>
Menghapus dan mengeluarkan package dari berkas package.json	[-S|--save|-D|--save-dev|-O|--save-optional|--no-save]

version
Untuk melihat versi package yang tersedia secara global atau lokal
[<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
*/


/**Sebelum mulai menginstal package, kita perlu tahu terlebih dulu bahwa ada dua jenis instalasi package, 
 * yaitu local install dan global install.

Local package akan dipasang di dalam direktori atau folder yang sama dengan project kita. Package ini akan 
diletakkan di dalam folder node_modules.

Sementara global package dipasang di satu tempat pada sistem perangkat kita (tergantung pengaturan pada saat 
instalasi node/npm).

Umumnya, semua package harus diinstal secara lokal. Ini memastikan setiap project atau aplikasi di komputer 
kita memiliki package dan versi yang sesuai dengan kebutuhan. Untuk menginstal package secara lokal caranya sama 
seperti yang telah kita bahas sebelumnya, yaitu dengan perintah npm install.

npm install <package-name>

Lalu, kapan kita menggunakan global package? Sebuah package harus diinstal secara global hanya saat ia menyediakan 
perintah yang dapat dieksekusi dari CLI dan digunakan kembali di semua project. Beberapa contoh package yang perlu 
diinstal secara global, antara lain:

npm https://www.npmjs.com/package/npm
nodemon https://www.npmjs.com/package/nodemon
mocha https://www.npmjs.com/package/mocha


Untuk menginstal package secara global, kita cukup menambahkan parameter -g pada perintah npm install. 
Di mana -g berarti global.

npm install -g <package-name>


"dependencies": {
  "lodash": "^4.17.21"
}
Sebenarnya terdapat dua tipe object dependencies dalam berkas package.json. Yang pertama object dependencies 
dan yang kedua object devDependencies. Apa perbedaannya?

Objek dependencies merupakan objek yang menampung package yang kita gunakan untuk membuat aplikasi. 
Sedangkan objek devDependencies digunakan untuk package yang berkaitan hanya saat proses pengembangan aplikasi, 
contohnya seperti package jest yang digunakan untuk testing. Package seperti jest ini hanya digunakan saat proses 
pengembangan aplikasi. Ia tidak digunakan lagi ketika aplikasi rilis atau digunakan langsung oleh pengguna.

Untuk memasang package sebagai devDependencies, kita bisa menambahkan parameter --save-dev pada perintah npm install.

npm install <package-name> --save-dev
Setelah package terpasang, maka akan ditambahkan ke berkas package.json.

"devDependencies": {
  "jest": "^26.6.3"
}


Di dalam project akan muncul berkas package-lock.json. Berkas ini secara otomatis dibuat oleh Node untuk 
menjelaskan susunan project dan package (suatu package bisa saja menggunakan package lainnya). 
Berkas package-lock.json juga mendefinisikan versi package yang digunakan dengan lebih spesifik. Apa maksudnya?

Jika diperhatikan, pada file package.json kita menentukan versi dengan simbol caret (^). Selain caret, 
npm juga menggunakan simbol tilde (~). Keduanya digunakan untuk menentukan versi minor dan versi patch yang akan 
digunakan.

Jadi, jika kita melihat versi ~1.0.2 itu berarti npm dapat menginstal versi 1.0.2 atau versi patch terbaru 
seperti 1.0.4. Jika versi package dituliskan dengan caret seperti ^1.0.2, itu berarti npm dapat menginstall 
versi 1.0.2 atau versi minor terbaru seperti 1.1.0


contoh
"dependencies": {
  "lodash": {
    "version": "4.17.21",
    "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
    "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
  }
}
*/

