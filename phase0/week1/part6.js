
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


let i = 10;

while (i >= -1){
    console.log(i)
    i--
}


for (let i = 20; i >= 1; i--){
    console.log(i)
}
 
let k = 1
do {
    console.log(k)
    k++
} while(k <= 5)

let name = ["budi" + ' ' + "udin" + ' ' + "asep"]
let result = "";

for (i = 0; i < name.length; i++ ){
   result += name[i] + ' '
}

console.log(result)

let name2 = "bagong";

for (i = 0; i < name2.length; i++){
    console.log(name2[i])
}

let name3 = "bagong",
result2 = "";

for (i = name3.length - 1; i >= 0; i--){
    result2 += name3[i];
}
console.log(result2)


for (let i = 1; i <= 3; i++){
    for (let k = 0; k <= 5; k++){
        console.log(k)
    }
    console.log('')
}
console.log('finish')


// dengan metode fizzbuzz
for (let j = 1; j <= 25; j++){
    if (j % 2 === 0 && j % 7 === 0){
        console.log(`${j} fizzbuzz`)
    } else if (j % 2 === 0 && j % 7 !== 0){
        console.log(`${j} fizz`)
    } else if (j % 7 === 0 && j % 2 !== 0){
        console.log(`${j} buzz`)
    } else {
        console.log(`${j}`)
    }
}


//  karena break di 5 maka berhenti di angka 5
for (let k = 1; k <= 25; k++){
if (k === 5){
    break;
}
console.log(k)
}

// jadi dengan continue maka 5 di loncat / di skip langsung ke nomer selanjutnya
for (let h = 1; h <= 25; h++){
    if (h === 5){
        continue;
    }
    console.log(h)
}

let cek = 5;
let plus = 1;
for (let i = 0; i < cek; i++){
    let result = '';
    for (let j = 0; j <= i; j++){
        result += plus++ + ' '
    }
    console.log(result)
}
// output hasil
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


let cek1 = 5
for (let i = 0; i < cek1; i++){
    let result1 = '';
    for (let j = 0; j < cek1 - i; j++){
        result1 += j + i + 1 + ' '
    }
    console.log(result1)
}
//hasil output
// 1 2 3 4 5 
// 2 3 4 5
// 3 4 5
// 4 5
// 5


let cek2 = 5
for (let i = 0; i < cek2; i++){
    let result2 = '';
    for (let j = 0; j <= i; j++){
        result2 += j + i + 1 + ' '
    }
    console.log(result2)
}
//hasil output
// 1 
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9


let arr = [1,2,3,4,5]
arr.forEach(function(change , i, self) {
  console.log(change , i , self)
})
//hasil inputan
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]

let resultMap = 1
arr.map(function (chek) {
  resultMap *= chek
})
console.log(resultMap)
//120

let cek3 = 5
for (let i = 0; i < cek3; i++){
    let plusThird = i + 1
    let result2 = plusThird + ' ';
    for (let j = 1; j <= i; j++){
        plusThird += cek3 - j
        result2 += plusThird + ' '
    }
    console.log(result2)
}//ouput hasil
// 1 
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15               


let jumlahAngkot = 10;
let angkotBeroprasi = 6;
let noAngkot = 1;

while(noAngkot <= angkotBeroprasi){
  console.log('Angkot dengan no' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik')
  noAngkot++
}
for (let i = 7; i <= jumlahAngkot; i++){
  console.log('Angkot dengan no' + ' ' + i + ' ' + 'sedang tidak beroperasi ')
}
// Angkot dengan no 1 beroperasi dengan baik
// Angkot dengan no 2 beroperasi dengan baik
// Angkot dengan no 3 beroperasi dengan baik
// Angkot dengan no 4 beroperasi dengan baik
// Angkot dengan no 5 beroperasi dengan baik
// Angkot dengan no 6 beroperasi dengan baik
// Angkot dengan no 7 sedang tidak beroperasi
// Angkot dengan no 8 sedang tidak beroperasi
// Angkot dengan no 9 sedang tidak beroperasi
// Angkot dengan no 10 sedang tidak beroperasi

