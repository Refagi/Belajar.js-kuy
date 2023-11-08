
/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui
 berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). 
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    // code di sini
  for (let i = 0; i < arrNumber.length; i++){
    for (let j = 0; j < arrNumber.length - 1; j++){
      if (arrNumber[j] > arrNumber[j + 1]){
       let result = arrNumber[j]
      arrNumber[j] = arrNumber[j + 1]
      arrNumber[j + 1] = result
      }//gunakan bubble short untuk mengurutkan angak dari terkecil ke terbesar
    }
  }
  return arrNumber
}
  
  function getTotal(arrNumber) {
    // code di sini
    let result = 0;
    for (let i = 0; i < arrNumber.length; i++){
      let terbesar = arrNumber[i]
      if (terbesar > result){
        result = terbesar
      }//mencari nilai terbesar 
    }
    let terBanyak = 0
    for (let j = 0; j < arrNumber.length; j++){
      if (arrNumber[j] === result){
        terBanyak++
      }//jika j === nilai terbesar, makan jumlahkan banyaknya
    }
    if (arrNumber.length === 0){ //jika panjang nya = 0 maka kembalikan ""
      return "''"
    } else {// jika tidak maka ini
      return `angka paling besar adalah ${result} dan jumlah kemunculan sebanyak ${terBanyak} kali`
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {//hasil dari dua fungsi diatas, dimasukan kedalam variable didalam
    var listSort = sorting(arrNumber);//fungsi yg berbeda 
    var countHighest = getTotal(listSort);
    return countHighest;
  }

  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  // //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  // //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''


/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf
setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  let vocal = 'aiueo'
  let setelahVocal = 'bjvfp'
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < vocal.length; j++){
      if (str[i] === vocal[j]){//jika pada str[i] ada huruf yg sama di variable vocal
       str = str.replace(str[i], setelahVocal[j])//maka ganti dengan yg ada di variable setelahVocal
      }
      if (str[i] === vocal[j].toUpperCase()){//untuk huruf yang besar
        str = str.replace(str[i], setelahVocal[j].toUpperCase())
      }
    }
  }
  return str
  //code di sini
}
// console.log(changeVocals('Sergei Dragunov'));//'VPNVGBRdJFGRFs' //sfrgfjdrbgunov


function reverseWord (str) {
  let result = ''
  for (let i = str.length -1; i >= 0; i-- ){//balik kalimat
    result += str[i]
  }
  return result
  //code di sini
}
// console.log(reverseWord('Sergei Dragunov'));

function setLowerUpperCase (str) {
  let result = ''
  for (let i = 0; i < str.length; i++){//ubah kata dengan hruf besar menjadi kecil, dan sebaliknya
    if (str[i] === str[i].toLowerCase()){
      result += str[i].toUpperCase()
    } else if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase()
    }
  }
  return result
  //code di sini
}
// console.log(setLowerUpperCase('Sergei Dragunov'));

function removeSpaces (str) {
  let result = ''
  let remove = str.split(' ')//hilangkan spasi dengan method split
  for (let i = 0; i < remove.length; i++){
   result += remove[i]
  }
  return result
  //code di sini
}
// console.log(removeSpaces('Sergei Dragunov'));

function passwordGenerator (name) {
  let  first = changeVocals(name)
  let second = reverseWord(first)
  let thirth = setLowerUpperCase(second)
  let fourth = removeSpaces(thirth)
  if (fourth.length < 5){
    return  'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    return fourth
  } 
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'




/*
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu
yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan 
memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .
Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. 
Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali 
seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/

function makanTerusRekursif(waktu) {
  if (waktu <= 0){
    return 0
  } else {
    return 1 + makanTerusRekursif(waktu - 15)
  }
  // you can only write your code here!
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
//jadi cara kerja hasil outpunya kira" begini :
//jika waktu(66) <= 0, maka berhenti
//kan 66 blum <= 0, jadi jalankan rekursifnya, 
//1 + (66 - 15 = 51), 1 + (51 - 15 = 35), 1 + (35 - 15 = 21), 1 + (21 - 15 = 6), 1 + (6 - 15 = -9)
//lalu kita jumlahkan ada berapa kali munculnya 1, 1 ada 5, 1 + 1 + 1 + 1 + 1 = 5
//lalu kenapa saat waktu sisa 6 masih bisa ngambil makanan, karena belum <= 0, jika sudah 0 atau kurang dri 0 (-)
//maka sudah tidak bisa ambil makanan lagi





/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. 
Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka 
dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! 
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
  if (angka <= 10){
    return angka
  } else {
    let x = angka % 10
    return x + totalDigitRekursif(Math.floor(angka / 10))
  }
  // you can only write your code here!
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
//jadi jika angka <= 10, maka kembalikan angka itu sendiri, karena misal 21 >= 10, maka di modulos dengan 10 
//sisanya = 1, lalu 21 / 10 = 2.1 gunakan Math.floor pembulatan terdekat kebawah menjadi 2
//nah karena 2 <= 10, maka return angka = 2
//lalu jumlahkan pembagian(pertama) = 1, pembagian(kedua) = 2 jadi 1 + 2 = 3
//knp harus dibagi 10? krena untuk mengambil sisa bagi sebuah angka misal 123 % 10 = 12.3, ambil sisanya = 3




/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka.
Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. 
Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya 
untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, 
namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, 
maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, 
maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {
  if (angka < 10){
    return angka
  } else {
    let result = 1;
    let ubah = angka.toString()
    for (let i = 0; i < ubah.length; i++){
      result *= Number(ubah[i])
    }
    return kaliTerusRekursif(result)
  }
  // you can only write your code here!
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
//jadi, jika angka kurang dari 10 maka kembalikan angka tersebut karena sudah satu digit, jika belum maka
//ubah angka menjadi string agar bisa dikali per indexnya, misal 66, index(0) = 6, index(1) = 6
//lalu looping dan kalikan 
//result= result * ubah[i], result = 1 * 6 = 6, >>>  result = 6 * 6 = 36, >>>lalu masuk ke fungsi rekursif
// karena digit belum < 10 , atau masih 2 digit maka teruskan looping >>> result = 3 * 6 = 18 
// >>> result = 1 * 8 = 8 , karena 8 < 10 maka berhenti dan kembalikan angka itu sendiri yaitu 8