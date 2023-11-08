/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
    if (sentence.length === 0){
      return -1
    }
    if (sentence[0] > angkaTerbesar(sentence.slice(1))){
      return sentence[0]
    } else {
      return angkaTerbesar(sentence.slice(1))
    }
    
      //code here
    }
    
    // TEST CASES
    console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
    console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
    console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
    console.log(angkaTerbesar([])) // -1
  
  
    /**
   * ////////////////
   * changeXRecursive
   * ////////////////
   * Function ini harus dikerjakan dengan menggunakan rekursif.
   * Function ini menerima dua parameter, yaitu:
   *  1. data yang merupakan string dari number
   *  2. jenis yang merupakan string berisi antara ganjil dan genap
   *
   * [EXAMPLE]
   * Input: data = 012345678922468 dan jenis = ganjil
   * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
   * Output: x1x3x5x7x9xxxxx
   *
   * [RULES]
   * 1. Dilarang mengubah tipe parameter function
   * 2. Dilarang membuat function diluar function yang disediakan
   * 5. Wajib menggunakan rekursif
   */
  
  function changeXRecursive(data, jenis) {
    if (data === ""){
      return ""
    }
    let huruf = "x"
    if (Number(data[0]) % 2 !== 0 && jenis === "ganjil" || Number(data[0]) % 2 === 0 && jenis === "genap"){
      return  data[0] + changeXRecursive(data.slice(1), jenis)
    }else {
      return huruf + changeXRecursive(data.slice(1), jenis)
    }
    //code here
  }
  
  console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
  console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
  
  
  /**
    Vowels Counter Recursive
    Diberikan sebuah function consonantCounterRecursive(sentences) yang 
    menerima satu parameter berupa
    string. Function akan me-return jumlah huruf konsonan yang terdapat 
    di dalam parameter inputan.
    Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
  - Wajib menggunakan metode rekursif
    - DILARANG menambahkan parameter baru
    - DILARANG membuat variable di luar function vowelsCounterRecursive
    - DILARANG mengubah tipe data parameter
    - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
    - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
    - DILARANG menggunakan built in function .indexOf atau .include
    - DILARANG menggunakan REGEX
  */
  
  function consonantCounterRecursive(sentences) {
    if (sentences.length === 0){
      return 0
    }
    let result = 0
    let konsonan = 'bcdfghjklmnpqrstvwxyz'
    for (let i = 0; i < konsonan.length; i++){
      if (sentences[0].toLowerCase() === konsonan[i]){
        result++
      } 
    }
    return result + consonantCounterRecursive(sentences.slice(1))
    //code here
  }
  
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
  console.log(consonantCounterRecursive('AziZy')) // 3
  console.log(consonantCounterRecursive('awt6an')) // 3
  
  
  /*
  ================
  Recursive - Hanya Bilangan Terbagi Nol
  ================
  
  dividableRecursive adalah sebuah function yang
   menerima dua parameter berupa array dan num.
  function akan mereturn sebuah sebuah number yang 
  hanya sisa baginya nol dari bilangan num
  
  [RULE]
  - Wajib menggunakan recursive
  - Dilarang menggunakan regex .match dan lainnya!
  - Tidak boleh membuat variable diluar function
  - Tidak boleh menambahkan parameter baru
  - Tidak boleh menggunakan looping while/for    
  */
  
  function dividableRecursive(array, num) {
    if (array.length === 0){
      return ''
    } 
    let result = ' '
    if (array[0] % num === 0){
      return [array[0]] + result + (dividableRecursive(array.slice(1), num))
    } else {
      return dividableRecursive(array.slice(1), num)
    }
    
    //code here
  }
  
  // DRIVER CODE
  console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
  console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
  console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
  console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132
  
  
  
  /**
    Hapus Simbol Rekursif
    Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
    string. Function akan me-return string yang telah bersih dari berbagai simbol,
    hanya menyisakan a-z dan angka 0-9.
    RULES:
    - Wajib menggunakan metode rekursif
    - DILARANG menambahkan parameter baru
    - DILARANG membuat variable di luar function hapusSimbolRec
    - DILARANG mengubah tipe data parameter
    - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
    - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
    - DILARANG menggunakan built in function .indexOf atau .include
    - DILARANG menggunakan REGEX
  **/
  
  function hapusSimbolRec(str) {
    if (str === ""){
      return ""
    }
    let result = ""
    let symbol = "abcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < symbol.length; i++){
      if (str[0].toLowerCase() === symbol[i]){
        result += str[0]
      } else if (str[0].toUpperCase() === symbol[i]){
        result += str[0]
      }
    }
    return result + hapusSimbolRec(str.slice(1))
    //code here
  }
  
  console.log(hapusSimbolRec('test4@aa')); //test4aa
  console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbolRec('ma@#k!an~')); // makan
  console.log(hapusSimbolRec('coding')); // coding
  console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
  
  
  
  /*
  
  Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
  Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
  Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
  Contoh, 'katak' dibalik tetaplah 'katak'.
  
  RULES
  =====
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function palindromeRecursive
  - Dilarang mengubah tipe data parameter
  
  */
  
  
  function palindromeRecursive(sentence) {
    if (sentence === ''){
      return ''
    } 
    for (let i = sentence.length - 1; i > 0; i--){
      if (sentence[0] === sentence[i]){
        return true
      } else {
        return false
      }
    }
    return palindromeRecursive(sentence.slice(1))
    //code here - saran bikin fungsi rekursif didalam sini
    //lalu bandingkan dengan sentence
  }
  
  // TEST CASES
  console.log(palindromeRecursive('katak')); // true
  console.log(palindromeRecursive('blanket')); // false
  console.log(palindromeRecursive('civic')); // true
  console.log(palindromeRecursive('kasur rusak')); // true
  console.log(palindromeRecursive('mister')); // false
  
  
  
  /*
    PARSE NUMBER
    Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
    menerima parameter berupa angka dan keluaran berupa string uraian angka.
  
    EXAMPLE
    INPUT: 4321
    OUTPUT: 4000+300+20+1
  
    RULES:
    1. Wajib menggunakan rekursif!
    2. Tidak boleh menambahkan parameter dan function baru
  */
  
  function parseNumber(equation) {
   
    if (equation <= 99){
      return equation.toString()
    }
    let change = Math.floor(equation / 1000) * 1000
    let change2 = Math.floor((equation - change)/ 100) * 100
    let change3 = Math.floor((equation - change - change2)/10)* 10
    // return change + '+' + change2 + '+' + change3 + '+' + parseNumber(equation - change - change2 - change3)
    if (equation <= 10000 && equation >= 1000){
      return  change + '+' + change2 + '+' + change3 + '+' + parseNumber(equation - change - change2 - change3)
    } else if (equation <= 1000 && equation >= 99){
      return  change2 + '+' + change3 + '+' + parseNumber(equation - change - change2 - change3)
    } 
   
  
    //code here
  };
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3
  console.log(parseNumber(9999)) 
  
  
  /* 
  Budi ingin menyusun batu bata dengan ukuran yang sama sampai membentuk piramid 2 dimensi
  Jika piramid bertingkat 1, Budi hanya memerlukan 1 batu bata
    B
  Jika piramid bertingkat 2, Budi memerlukan 3 batu bata
    B
   B B
  Jika piramid bertingkat 3, Budi memerlukan 6 batu bata
    B
   B B
  B B B 
  Jika piramid bertingkat 4, Budi memerlukan 10 batu bata
     B
    B B
   B B B 
  B B B B
  ​
  Di setiap tingkat bertambah 1 batu bata dibanding tingkatan diatasnya
  ​
  Buatlah function piramid (n) yang memberitahu berapa jumlah batu bata yang diperlukan untuk membuat piramid bertingkat n.
  ​
  [RULES]
    1. Wajib menggunakan RECURSIVE.
    2. Dilarang membuat function tambahan selain function piramid.
    3. Dilarang menambah parameter function.
  */
  
  function piramid(n) {
    if (n <= 1){
      return n
    }
    return n + piramid(n - 1)
    //code here
  }
  
  // console.log(piramid()) // 0
  console.log(piramid(0)) // 0
  console.log(piramid(1)) // 1
  console.log(piramid(2)) // 3
  console.log(piramid(3)) // 6
  console.log(piramid(4)) // 10
  console.log(piramid(5)) // 15
  console.log(piramid(6)) // 21
  console.log(piramid(100)) // 5050
  console.log(piramid(888)) // 394716
  
  
  /**
  Virus Check Recursive
  ---------------------
  Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
  terdapat di dalam `str` berdasarkan `virus` yang dicari.
  
  Contoh 1:
  input:
    str: 'qlD4MZax0raQqew'
    virus: 'x|0|q' ==> berarti mencari x, 0 dan q
  
  output: 4
  
  Contoh 2:
  input:
    str: 'HH0NBP1zRa'
    virus: 'h|r' ==> berarti mencari h dan r
  
  outuput: 3
  
  
  RULES:
    - Wajib menggunakan metode rekursif
    - Dilarang menambahkan parameter baru
    - Dilarang membuat variable di luar function virusCheckRecursive
    - Dilarang mengubah tipe data parameter
    - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
    - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive
  
  */
  
  function virusCheckRecursive(str, viruses) {
    let result = 0
    if (viruses === undefined){
      return 'There is no virus'
    }
    if (str.length === 0){
      return 0
    }
    for (let i = 0; i < viruses.length; i++){
      if (str[0].toLowerCase() === viruses[i].toLowerCase()){
        result++
      }
    }
    return result + virusCheckRecursive(str.slice(1), viruses)
    //code here
  }
  
  console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
  console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
  console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
  console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
  console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
  console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
  console.log(virusCheckRecursive('')); // There is no virus
  
  
  
  
  /*
  ===================================
  Recursive Mastery : Number Iterator
  ===================================
  Nama:________
  [INSTRUCTION]
  Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
  Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
  [EXAMPLE]
  input: 5
  output: 012345
  input: 7
  output: 01234567
  [CONSTRAINTS]
  Wajib menggunakan metode rekursif
  Dilarang menggunakan sintaks for / while dan regex
  */
  function numberIterator(num) {
    if (num <= 0){
      return 0 + ''// pake ('') jadi hasilnya tidak di jumlahkan karena sudah menjadi string
    } 
    return  numberIterator(num - 1) + num
    //code here
  }
  console.log(numberIterator(5)); // '012345'
  console.log(numberIterator(7)); // '01234567'
  console.log(numberIterator(3)); // '0123'
  console.log(numberIterator(1)); // '01'
  console.log(numberIterator(0)); // '0'
  