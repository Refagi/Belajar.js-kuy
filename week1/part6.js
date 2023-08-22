// oke mari kita membahas looping, jadi looping secara singkat adalah perulangan, yak orang2 juga tau itu namun, fungsi utamanya adalah untuk membuat proses menjadi otomatis, dan membuat code menjadi lebih pendek

// point yang harus dipahami adalah:
// Pelajari Indexing pada String dan Array
// Flow Looping
// Arah Looping
// Harus ada yang membuat looping berhenti (kecuali kebutuhan infinite loop khusus)
// Jauhi Infinite Loop kalau tidak perlu
// Permainan Kondisi pada looping
// Memahami Flow Nested Loop (KUNCI UTAMA)

// yak, looping biasanya sering bersama dengan tipe data array, angka, dan string.
// yang paling populer sudah jelas combo Looping + Array 

// lalu sering bertemu dengan yang namanya method length pada tipe data string dan array di javascript
// dan disambung dengan indexing pada tipe data tersebut

// kata kunci pada indexing adalah
// index selalu berawal dari 0, ga mungkin yang lain
// kalau mau menyentuh item/element/huruf paling kanan gunakan length - 1 pada index

// yak pengalaman penulis tentang memahami looping itu butuh waktu kisaran berminggu minggu, dipadukan dengan challenge/tantangan berupa quiz/soal pemrograman yang mengharuskan pelajar menggunakan looping untuk menjawab quiz/soal pemrograman tersebut

// Sekian terima kasih

// -------------------------------------------------------------
// berikut video tentang looping, namun jangan harap langsung paham, gua sendiri aja nonton banyak video soal looping ga hafal hafal


// while() & for ()


// let i = 10;

// while (i >= -1){
//     console.log(i)
//     i--
// }


// for (let i = 20; i >= 1; i--){
//     console.log(i)
// }
 

// let name = ["budi" + ' ' + "udin" + ' ' + "asep"]
// let result = "";

// for (i = 0; i < name.length; i++ ){
//    result += name[i] + ' '
// }

// console.log(result)

// let name = "bagong";

// for (i = 0; i < name.length; i++){
//     console.log(name[i])
// }

// let name2 = "bagong",
// result = "";

// for (i = name2.length - 1; i >= 0; i--){
//     result += name2[i];
// }
// console.log(result)


// for (let i = 1; i <= 3; i++){
//     for (let k = 0; k <= 5; k++){
//         console.log(k)
//     }
//     console.log('')
// }
// console.log('finish')


// // dengan metode fizzbuzz
// for (let j = 1; j <= 25; j++){
//     if (j % 2 === 0 && j % 7 === 0){
//         console.log(`${j} fizzbuzz`)
//     } else if (j % 2 === 0 && j % 7 !== 0){
//         console.log(`${j} fizz`)
//     } else if (j % 7 === 0 && j % 2 !== 0){
//         console.log(`${j} buzz`)
//     } else {
//         console.log(`${j}`)
//     }
// }


// //  karena break di 5 maka berhenti di angka 5
// for (let k = 1; k <= 25; k++){
// if (k === 5){
//     break;
// }
// console.log(k)
// }

// // jadi dengan continue maka 5 di loncat / di skip langsung ke nomer selanjutnya
// for (let h = 1; h <= 25; h++){
//     if (h === 5){
//         continue;
//     }
//     console.log(h)
//     }