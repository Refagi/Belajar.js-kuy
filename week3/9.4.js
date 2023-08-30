/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
 Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
 sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  let cek = "";
  for (let i = 1; i <= angka; i++) {
    for (let j = i; j <= angka; j++) {
      //loop pertama iterasi dri sampe 24(misal), lalu looping kedua untuk mengecek dri loop(i) sampe ke 24
      //misal, 1 mengecek => 24, nanti setelah satu 2 => 24, stelah dua 3 => 24. terus sampe 24 => 24
      if (i * j === angka) {
        cek = (`${i}${j}`);
        // nah jika misal ([i]1 * [j]1 => 24), ([i]2 * [j]1 => 24). trus hingga [i] = 24
        // jika hasil perkalian = (angka) maka satukan [i] & [j] yg menghasilkan (angka)
        // console.log(`${i} * ${j} = ${angka}`)
        // 1 * 24 = 24, 2 * 12 = 24, 3 * 8 = 24, 4 * 6 = 24
        //pada variable cek akan menghasilkan satu pasangan [i]&[j] saja dan itu yg paling terakhir
      }
    }
  }
  return cek.length // hasilkan panjangnya misal "46" kan panjangnya = 2
  // you can only write your code here!
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

// DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
// saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  let cek = str.split("");
  for (let i = 0; i < cek.length; i++) {
    for (let j = 0; j < cek.length - 1; j++) {
      if (cek[j] > cek[j + 1]) {
        // [cek[j], cek[j + 1]] = [cek[j + 1], cek[j]]
        let result = cek[j];
        cek[j] = cek[j + 1];
        cek[j + 1] = result;
      }
    }
  }
  return cek.join("");
  // you can only write your code here!
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
//penjelasan code di atas agar lebih paham
//pertama kita jadikan dulu setiap huruf str menjadi array dgn method split, 'hello' = 'h','e','l','l','o'
// lalu kita buat looping bubble sort, cara kerja loopingnya begini
//'h','e','l','l','o'
//jika 'h' > 'e' = akan bertukar posisi, 'e','h','l','l','o'
//jika 'h' > 'l' = tidak ada pertukaran karena 'h' tidak lebih besar dari 'l'
//begitu sterusnya sampe mendapatkan urutan yg paling besar di index paling akhir
//(ini menggunakan urutan huruf abjad)
//gunakan .length -1 agar saat sudah dapat yg paling besar di akhir array tidak usah di bandingkan lgi dgn
//yg dluar array karna paling ujung atau akhir
//lalu return menngunakan .join tambahkan lagi ('') agar tidak dipecah lgi atau agar menjadi satu kalimat lagi




//TIPS: gunakan method toUpperCase() dan toLowerCase()
// function tukarBesarKecil(kalimat) {
//   let result = "";// buat variable kosong untuk menampung hasil
//   for (let i = 0; i < kalimat.length; i++){
//     if (kalimat[i] === kalimat[i].toUpperCase()){
//       result += kalimat[i].toLowerCase()
//     } else {
//       result += kalimat[i].toUpperCase()
//     }
//   }
//   return result
// }

// // TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"



/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut 
terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
Jika tidak ditemukan sama sekali, kembalikan nilai false.
Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  let result = -1;
  let result2 = -1;
  let ubah = num.split('')
  for (let i = 0; i < ubah.length; i++){
    if (ubah[i] === 'a' || ubah[i] === 'A'){
      result = i
      // console.log(`${ubah[result ] + ubah[result + 4]}`)
    } else if (ubah[i] === 'b' || ubah[i] === 'B'){
      result2 = i
      // console.log(`${ubah[result2 + 1]}`)
    }
    if (ubah[result + 4] === 'b' || ubah[result - 4] === 'a'){
      return true
    } else if (ubah[result + 4] === 'B' || ubah[result - 4] === 'A'){
      return true
    }
    // console.log(`${result2} - ${result} = ${result2 - result}`)
  }
  return false
  // you can only write your code here!
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false




