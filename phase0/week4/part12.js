
/* Mengetahui Kegunaan Regular Expressions
Dengan menggunakan regex, kita dapat menyederhanakan pencarian text string atau interger dalam sebuah variabel. 
Mungkin kalian berpikir untuk pencarian text kan kita bisa pake fungsi-fungsi String dan Array seperti substr(), 
indexOf(), slice(), dll.

Tetapi bagaimana kalo pencarian rumit ? dan ada pattern yang harus ditentukan ?. 
Hal ini jauh lebih mudah kalau kita gunakan Regex. contoh sederhana nya coba temukan / hitung kata ‘far’ 
di dalam paragraph dibawah ini :  
*/

let paragraph =`
far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics,
a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!`

console.log(paragraph.match(/far/g)); // ["far", "far", "far", "far"] ada 4 far


//Kuncinya untuk memahami Regular Expressions adalah mampu menghapal simbol-simbol dibawah ini, beserta kegunaannya.

// (.) // - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
// (*) // - Mencocokan 0 atau lebih dari karakter terdahulu.
// (+) // - Mencocokan 1 atau lebih dari karakter terdahulu.
// (?)// - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
// (\d) // - Mencocokan digit apapun
// (\w) // - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
// ($) // - Mencocokan ujung dari sebuah string.
// (^) // - Mencocokan awal dari sebuah string.
// ([^a-z]) // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, 
//regex akan mencocokan apapun yang bukan karakter lowercase.


/*Penggunaan Regular Expressions dalam JavaScript
Menulis Regex
Menulis Regex dalam javascript bisa dalam 2 bentuk, yaitu antara dengan membuat Regex object dengan 
menggunakan new RegExp(), atau menggunakan nilai literal yang diapit oleh karakter flash (/).*/

//ada 2 bentuk
let regexContohSatu = new RegExp("abc");
let regexContohDua = /abc/;

// Method .test()
// Method .test() akan mengembalikan nilai true atau false, sesuai dengan pattern regex yang dibuat.

let message = 'Regex itu Mudah!';
console.log(/[A-Z]/.test(message));
// mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, 
//karena regex itu memang mudah :)

let messageAllLowerCase = 'regex itu susah?';
console.log(/[A-Z]/.test(messageAllLowerCase));
// mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. 
//statement tersebut juga memang false! regex tidak sesulit yang kita kira!

let regexPattern = new RegExp('[A-Z]');

let message2 = 'Regex itu Mudah!';
console.log(regexPattern.test(message2));
// mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, 
//karena regex itu memang mudah :)

let messageAllLowerCase2 = 'regex itu susah?';
console.log(regexPattern.test(messageAllLowerCase2));
// mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. 
//statement tersebut juga memang false! regex tidak sesulit yang kita kira!



let str = 'belajar regex itu menyenangkan';
console.log(str.split(/\s/));
// mengembalikan nilai "belajar, regex, itu, menyenangkan" karena \s adalah sebuah pattern untuk satu spasi.

let stringAwal = 'Regex itu sangat susah!';
stringHasil = stringAwal.replace(/susah/, 'mudah');
console.log(stringHasil); // mengembalikan nilai "Regex itu sangat mudah!"



let message3 = 'Regex seru DEH!';
console.log(message3.match(/e/));
// menampilkan "e", namun hanya sekali

console.log(message3.match(/e/g));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `g` menandakan pencarian secara global, 
//tidak hanya satu kali

console.log(message3.match(/e/gi));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `i` menandakan pencarian karakter dengan 
//ignore case, atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.
//mending kalian coba sendiri deh liat outputnya wkwk


var teks = "halo dunia\nhalo indonesia\nhalo regex";
var pola = /^halo/m;
var hasil = teks.match(pola);
console.log(hasil);
// hasil: ["halo", "halo", "halo"]
// dengan modifier m mencari kata “halo” di awal setiap baris teks \n itu maksudnya enter ke baris bawahnya



//Contoh 2 Penggunaan Match - Mencocokan Karakter dan Mengecualikan Punctuation atau Simbol
let string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]


/*Simbol-simbol diatas, sering disebut sebagai Punctiation. Seringkali dalam beberapa kasus, 
kita mau menghapus semua simbol-simbol diatas.

Jika kamu teliti, kamu pasti menemukan simbol + dibelakang [a-z]. Simbol + disini berarti match akan 
menyatukan seluruh karakter yang cocok dengan pattern a-z hingga menemukan pattern lain diluar pattern tersebut. 
Dalam kasus contoh di atas, setiap kali menemukan spasi, contohya pada Walaupun regex match akan memisahkan Walaupun dan regex karena ditemukannya spasi tersebut. Apabila kamu penasaran, cobalah hapus simbol + dari code diatas, dan jalankanlah kembali. Hasilnya akan berbeda!
Bagaimana jika pattern regex tidak ditemukan ?
Jika pattern regex tidak dapat ditemukan dalam string, maka fungsi match( ) akan return bukan array kosong, 
tapi null. Bedanya array kosong dan null: array kosong memiliki length = 0, null tidak memiliki length

Sebagai analogi: array kosong adalah gelas yang tidak terisi air dan null adalah tidak ada gelas sama sekali!

Karena itu, kita perlu berhati-hati saat menggunakan properti length dari hasil fungsi match( ) 
karena null tidak memiliki length! Null.length akan menyebabkan error. 
Untuk mengecek apabila suatu fungsi match membalikkan array atau null, kita bisa menggunakan kode if(newArray) , 
seperti berikut:*/

// if (newArray) {
//     console.log(‘newArray bukan null!’);
// } else {
//     console.log(‘Tidak ada newArray, ini null!’);
// }