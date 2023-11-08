
//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

// let word = 'JavaScript';
// let second = 'is';
// let third = 'awesome';
// let fourth = 'and';
// let fifth = 'I';
// let sixth = 'love';
// let seventh = 'it!';

//code here


// ---------------------------------------
// console.log(' ');
// ---------------------------------------

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'i';
let sixth = 'love';
let seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

// let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2];

// console.log('First Word: ' + exampleFirstWord);


// ---------------------------------------
// console.log(' ');
// ---------------------------------------

// jadi setiap satu huruf satu angka dimulai dari nol(0) diloncat satu angka setiap spasi misal 0 + 1 + 2 (spasin(3)) + 4 + 5 ...dst
// akan memjadi kalimat wow jav seperti code dibawah ini

let word2 = 'wow JavaScript is so cool';
let FirstWord = word[0] + word[1] + word[2];
let secondword = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] +word[12] + word[13]
let thirdword = word[15] + word[16]
let fourthword = word[18] + word[19]
let fifthword = word[21] + word[22] + word[23] + word[24]

console.log(FirstWord)
console.log(secondword)
console.log(thirdword)
console.log(fourthword)
console.log(fifthword)

 // 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

// let word3 = 'wow JavaScript is so cool';
// let exampleFirstWord3 = word3.substring(0, 3);

// console.log('First Word: ' + exampleFirstWord3);


// ---------------------------------------
// console.log(' ');
// ---------------------------------------


let word3 = 'wow JavaScript is so cool';
let FirstWord2 = word3.substring(0, 3)
let secondWord2 = word3.substring(4, 14)
let thirdWord2 = word3.substring(15, 17)
let fourthWord2 = word3.substring(18, 20)
let fifthWord2 = word3.substring(21, 25)
let sixthWord2 = word3.substring(0, 25)  //gunakan (,) untuk mulai dari awal
let seventhWord2 = word3.substring(-25) //gunakan (-) untuk mulai dari akhir

console.log(FirstWord2);
console.log(secondWord2);
console.log(thirdWord2);
console.log(fourthWord2);
console.log(fifthWord2);
console.log(sixthWord2);
console.log(seventhWord2);


// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


// let word4 = 'wow JavaScript is so cool';
// let exampleFirstWord4 = word4.substring(0, 3);

// let firstWordLength = exampleFirstWord4.length;

// console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);


let word4 = 'wow JavaScript is so cool';
let FirstWord3 = word4.substring(0, 3);
let secondWord3 = word3.substring(4, 14)
let thirdWord3 = word3.substring(15, 17)
let fourthWord3 = word3.substring(18, 20)
let fifthWord3 = word3.substring(21, 25)

let firstWordLength = FirstWord3.length;
let secondWordLength = secondWord3.length;
let thirdWordLength = thirdWord3.length;
let fourthWordLength = fourthWord3.length;
let fifthWordLength = fifthWord3.length;

console.log('First Word: ' + FirstWord3 + ', with length: ' + firstWordLength);
console.log('First Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('First Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('First Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('First Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);