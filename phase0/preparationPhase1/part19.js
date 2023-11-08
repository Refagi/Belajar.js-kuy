/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  
    let arr1 = []
    let arr2 = []
    let change = arr.join().split(',')
    for (let i = 0; i < change.length; i++){
      if (change[i] === ' '){
        continue
      }
      let change2 = Number(change[i])
      arr1.push(change2)
    }
    for (let j = 0; j < arr1.length; j++){
      for (let h = 0; h < arr1.length - 1; h++){
        if (arr1[h] > arr1[h + 1]){
          let result = arr1[h]
          arr1[h] = arr1[h + 1]
          arr1[h + 1] = result
        }
      }
    }
    let terkecil = arr1[0]
    let terbesar = arr1[arr1.length - 1]
    for (let k = terkecil; k < terbesar; k++){
      let cek = false
      if (arr1.includes(k) === cek){
        arr2.push(k)
      }
    }
    
    if (arr.length === 0){
      return []
    }
    return arr2
      //code here
    }
    
    
    console.log(missingNum([
      [3, ' ', 5],
      [1, ' ', 7],
      [9, ' ', ' ']
    ])) // [ 2, 4, 6, 8 ]
    console.log(missingNum([
      [2, ' '],
      [' ', 5]
    ])) // [ 3, 4 ]
    console.log(missingNum([
      [11, ' ', 13],
      [17, ' ', 19],
      [' ', 16, ' ']
    ])) // [ 12, 14, 15, 18 ]
    console.log(missingNum([
      [3, ' ', 5, 15],
      [1, ' ', 7, 13],
      [9, ' ', ' ', 12],
      [' ', 16, ' ', ' ']
    ])) // [ 2, 4, 6, 8, 10, 11, 14 ]
    console.log(missingNum([])) // []
  
    
    /**
    Square Number
  
    Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
    Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
    proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
    alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
    - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
    - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
    - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'
  
    Contoh 1:
    ==========
    input: 3
    proses:
            [
              [ 1, 2, 3 ],
              [ 6, 5, 4 ],
              [ 7, 8, 9 ]
            ]
    output:
            [
              [x, o, x],
              [o, x, #],
              [x, #, x]
            ]
  
    Contoh 2:
    ==========
    input: 4
    proses:
          [
            [ 1, 2, 3, 4 ],
            [ 8, 7, 6, 5 ],
            [ 9, 10, 11, 12 ],
            [ 16, 15, 14, 13 ]
          ]
    output:
          [
            [ x, o, x, # ],
            [ #, x, o, x ],
            [ x, o, x, # ],
            [ #, x, o, x ]
          ]
  NOTE:
   - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
  **/
  
  
  function squareNumber(num) {
    let arr1 = []
    let plus = 1
    for (let i = 1; i <= num; i++){
      let arr2 = []
      for (let j = 1; j <= num; j++){
        arr2.push(plus++)
      }
      arr1.push(arr2)
    }
    for (let l = 0; l < arr1.length; l++){
      if (l % 2 === 1){
        arr1[l].reverse()//jika index i di modulus sisanya 1 maka i di reverse atau di balik posisinya 
        //misal [4, 5, 6] jdai [6, 5, 4]
      }
    }
    for (let k = 0; k < arr1.length; k++){
      for (let h = 0; h < arr1[k].length; h++){
        if (arr1[k][h] % 4 === 0 ){
          arr1[k][h] = '#'
        } else if (arr1[k][h] % 2 === 0 ){
          arr1[k][h] = 'o'
        } else {
          arr1[k][h] = 'x'
        }
      }
    }
  
    if (num <= 2){
      return 'Minimal input adalah 3'
    }
    return arr1
    //code here
  }
  
  console.log(squareNumber(3));
  // [ [x, o, x],  [o, x, #], [x, #, x] ]
  
  console.log(squareNumber(4));
  // [ [ x, o, x, # ],
  //   [ #, x, o, x ],
  //   [ x, o, x, # ],
  //   [ #, x, o, x ] ]
  
  console.log(squareNumber(5));
  // [ [ x, o, x, #, x ],
  //   [ o, x, #, x, o ],
  //   [ x, #, x, o, x ],
  //   [ #, x, o, x, # ],
  //   [ x, o, x, #, o ] ]
  
  console.log(squareNumber(2)); // Minimal input adalah 3
  
  
  /**
    Square Number
    Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
    Function ini akan mengembalikan array multidimensi angka x angka yang isi value
    dari array multidimensi tersebut menyerupai `board snakes and ladders`
    Contoh 1:
    input: 3
    output:
        [
          [7, 8, 9],
          [6, 5, 4],
          [1, 2, 3]
        ]
    Contoh 2:
    input: 4
    output:
        [
          [ 16, 15, 14, 13 ],
          [ 9, 10, 11, 12 ],
          [ 8, 7, 6, 5 ],
          [ 1, 2, 3, 4 ]
        ]
  NOTE:
   - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
   - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS
   - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
     menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
     CONTOH:
       [
         [ 13, 14, 15, 16 ],
         [ 9, 10, 11, 12 ],
         [ 5, 6, 7, 8 ],
         [ 1, 2, 3, 4 ]
       ]
  **/
  
  function squareNumber(num) {
    let arr1 = []
    let result = 1
    for (let i = 0; i < num; i++){
      let arr2 = []
      for (let j = 0; j < num; j++){
        arr2.push(result++)
      }
      arr1.push(arr2)
    }
    for (let l = 0; l < arr1.length; l++){
      if (l % 2 === 1){
        arr1[l].reverse()
      }
    }
  
    for (let k = 0; k < arr1.length ; k++){
      for (let h = 0; h < arr1.length - 1 ; h++){
        if (arr1[h][0] < arr1[h + 1][0]){
          let result2 = arr1[h]
          arr1[h] = arr1[h + 1]
          arr1[h + 1] = result2
        }
      }
    }
    // arr1.sort(function(a, b){return b[0]-a[0]})
  
    if (num <= 2){
      return 'Minimal input adalah 3'
    }
    return arr1
    //code here
  }
  
  console.log(squareNumber(3));
  // [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]
  
  console.log(squareNumber(4));
  // [ [ 16, 15, 14, 13 ],
  //   [ 9, 10, 11, 12 ],
  //   [ 8, 7, 6, 5 ],
  //  [ 1, 2, 3, 4 ] ]
  
  console.log(squareNumber(5));
  // [ [ 21, 22, 23, 24, 25 ],
  //   [ 20, 19, 18, 17, 16 ],
  //   [ 11, 12, 13, 14, 15 ],
  //   [ 10, 9, 8, 7, 6 ],
  //   [ 1, 2, 3, 4, 5 ] ]
  
  console.log(squareNumber(2)); // Minimal input adalah 3
  
  
  /**
  Mini Sudoku Board
  =================
  Implementasikan function `miniSudokuBoard` untuk membuat
  papan 3x3 yang tipe data-nya berupa Array.
  `miniSudokuBoard` akan menerima satu parameter yaitu `text`
  yang tipe data-nya berupa String.
  
  # Contoh I/O
  - Input: '290500007'
    Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
    
  - Input: '302609005'
    Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]
  
  # Kondisi khusus
  - Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
  - Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'
  
  */
  
  function miniSudokuBoard(text) {
    //result = ['0','0','5','0','3','0','0','8','1']
    //rumus result[i * 3 + j], misal i = 0, * 3 + j = 0, result[0] maka masukan '0' trus sampai i index ke 3
    //misal, i = 1 * 3 + j = 1, result[4] maka masukan index result ke 4 yaitu '3' 
    //misal i = 2 * 3 + j = 2, result[8] maka masukan index result ke 6 yaitu '1'
     if (text.length === 0){
      return 'Empty board'
    }
    let arr1 = []
    let result = text.split('')
    if (result.length !== 9){
      return 'Invalid input'
    } 
  
    for (let i = 0; i < 3; i++){
      let arr2 = []
      for (let j = 0; j < 3; j++){
        arr2.push(result[i * 3 + j])
      }
      arr1.push(arr2)
    }
    return arr1
    //code here
  }
  
  console.log(miniSudokuBoard('005030081'));
  // /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
  console.log(miniSudokuBoard('105802000'));
  // [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
  console.log(miniSudokuBoard('608730000'));
  // [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
  console.log(miniSudokuBoard('096040001'));
  // // [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
  console.log(miniSudokuBoard('87109'));
  // Invalid input
  console.log(miniSudokuBoard(''));
  // Empty board
  