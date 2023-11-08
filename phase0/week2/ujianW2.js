
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let arrO = -1; // gunakan -1 tandaya kita belum menemukan 'o' & 'x' saat di loop dan menemukan 'o'/'x' 
    let targetO = -1;//maka -1 akan berubah sesuai urutan index berada dimana
    for (let h = 0; h < arr.length; h++) {
      if (arr[h] === "o") {
        arrO = h;
      } else if (arr[h] === "x") {
        targetO = h;
      }
  // kita buat jika lebih dari -1 maka akan stop atau break misal sudah menemukan x pertama yang dekat dgn o
  // maka akan berhenti disitu, tidak mencari x selanjutnya
      if (arrO > -1 && targetO > -1) {
        break; // buat break agar berhenti
      }
    }
  // maksudnya -1 itu berrti tidak ditemukan 'x'/'o' atau index sudah iterasi/ sudah berjalan 
  //dan tidak berhenti di index yg ada 'o'/'x' nya jadi nilainya -1 maka mengembalikan nilai 0
    if (arrO === -1 || targetO === -1) {
      return 0;
    }
    let jarak = Math.abs(targetO - arrO || arrO - targetO);// gunakan Math.abs agar kalau (-) menjadi (+)
    return jarak;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
  console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
  console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
  console.log(targetTerdekat([" ", " ", "o", " "])); // 0
  console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
  
  /*
  Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
  
  kelompok pertama (baris pertama) merupakan angka-angka genap
  kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
  kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
  Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
  */
  function mengelompokkanAngka(arr) {
      let invt = [];
      let invt2 = [];
      let invt3 = [];
      for (let i = 0; i < arr.length; i++){
          if (arr[i] % 2 === 0){//jika dibagi 2 = 0 atau tidak koma(,)
            invt.push(arr[i])// maka masukan di variable []
          } else if (arr[i] % 3 !== 0){//jika dibagi 3 tidak = 0 atau hasilnya koma (,)
              invt2.push(arr[i])// maka masukan divariable []
          }
  
          if (arr[i] % 3 === 0 ){ //dibuat conditional percabangan jika dibagi 3 = 0 atau tidak koma(,)
            invt3.push(arr[i])// maka masukan di variable []
          }
      }
      return [invt, invt2, invt3]
      // you can only write your code here!
    }
  
    // TEST CASES
    console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
    console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  
  /*
  diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
  fungsi ini akan me-return array 2 dimensi
  */
  function groupAnimals(animals) {
    let invtOne = [];
    let result = [];
    let sorted = animals.sort(); //gunakan method sort untuk mengurutkan huruf awal sesuai abjad
    for (let j = 0; j < sorted.length; j++) {
      if (j === 0) {
        // kenapa j = 0 ? karena untuk mengecek jika j yg sudah di sort = 0 yaitu 'anoa' maka masukan kedalam variable array invtOne untuk sementara
        invtOne.push(sorted[j]);
        continue; //skip langsung ke iterasi selanjutnya
      }
      // maksud dri invtOne[0][0] yaitu [0] = index pertama, dan [0] huruf pertama
      if (invtOne[0][0] === sorted[j][0]) {// karena kalau tidak di continue hasil dari if pertama akan muncul lagi
        // di if yg ini (kedua)
        //untuk mmbuat group pertama yg mempunyai huruf awal yg sama
        invtOne.push(sorted[j]); // masukan bersama hasil if sebelumnya / digabungkan satu group krena huruf awal sama
      } else {
        //jika sudah selesai di iterasi
        result.push(invtOne); //masukan variable invtOne kedalam variable result karena variable invtOne sementara
        invtOne = [sorted[j]]; // untuk membuat group baru yg memiliki huruf depan yg berbeda
        // ubah invtOne menjadi sorted[j] karena invtOne yg pertama sudah dimasukan ke variable result
      }
    }
    result.push(invtOne); // setelah menemukan group" lainnya / stelah loop selesai masukkan / tambahnkan lagi ke result
    return result;
    // // you can only write your code here!
  }
  
  // TEST CASES
  console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "angsa"])
  );
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
  );

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let arrO = -1; // gunakan -1 tandaya kita belum menemukan 'o' & 'x' saat di loop dan menemukan 'o'/'x' maka -1 akan berubah sesuai urutan index berada dimana
    let targetO = -1;
    for (let h = 0; h < arr.length; h++) {
      if (arr[h] === "o") {
        arrO = h;
      } else if (arr[h] === "x") {
        targetO = h;
      }
  // kita buat jika lebih dari -1 maka akan stop atau break misal sudah menemukan x pertama yang dekat dgn o
  // maka akan berhenti disitu, tidak mencari x selanjutnya
      if (arrO > -1 && targetO > -1) {
        break; // buat break agar berhenti
      }
    }
  // maksudnya -1 itu berrti tidak ditemukan 'x'/'o' atau index sudah iterasi/ sudah berjalan 
  //dan tidak berhenti di index yg ada 'o'/'x' nya jadi nilainya -1 maka mengembalikan nilai 0
    if (arrO === -1 || targetO === -1) {
      return 0;
    }
    let jarak = Math.abs(targetO - arrO || arrO - targetO);// gunakan Math.abs agar kalau (-) menjadi (+)
    return jarak;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
  console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
  console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
  console.log(targetTerdekat([" ", " ", "o", " "])); // 0
  console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
  
  /*
  Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
  
  kelompok pertama (baris pertama) merupakan angka-angka genap
  kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
  kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
  Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
  */
  function mengelompokkanAngka(arr) {
      let invt = [];
      let invt2 = [];
      let invt3 = [];
      for (let i = 0; i < arr.length; i++){
          if (arr[i] % 2 === 0){//jika dibagi 2 = 0 atau tidak koma(,)
            invt.push(arr[i])// maka masukan di variable []
          } else if (arr[i] % 3 !== 0){//jika dibagi 3 tidak = 0 atau hasilnya koma (,)
              invt2.push(arr[i])// maka masukan divariable []
          }
  
          if (arr[i] % 3 === 0 ){ //dibuat conditional percabangan jika dibagi 3 = 0 atau tidak koma(,)
            invt3.push(arr[i])// maka masukan di variable []
          }
      }
      return [invt, invt2, invt3]
      // you can only write your code here!
    }
  
    // TEST CASES
    console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
    console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  
  /*
  diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
  fungsi ini akan me-return array 2 dimensi
  */
  function groupAnimals(animals) {
    let invtOne = [];
    let result = [];
    let sorted = animals.sort(); //gunakan method sort untuk mengurutkan huruf awal sesuai abjad
    for (let j = 0; j < sorted.length; j++) {
      if (j === 0) {
        // kenapa j = 0 ? karena untuk mengecek jika j yg sudah di sort = 0 yaitu 'anoa' maka masukan kedalam variable array invtOne untuk sementara
        invtOne.push(sorted[j]);
        continue; //skip langsung ke iterasi selanjutnya
      }
      // maksud dri invtOne[0][0] yaitu [0] = index pertama, dan [0] huruf pertama
      if (invtOne[0][0] === sorted[j][0]) {// karena kalau tidak di continue hasil dari if pertama akan muncul lagi di if yg ini (kedua)
        //untuk mmbuat group pertama yg mempunyai huruf awal yg sama
        invtOne.push(sorted[j]); // masukan bersama hasil if sebelumnya / digabungkan satu group krena huruf awal sama
      } else {
        //jika sudah selesai di iterasi
        result.push(invtOne); //masukan variable invtOne kedalam variable result karena variable invtOne sementara
        invtOne = [sorted[j]]; // untuk membuat group baru yg memiliki huruf depan yg berbeda
        // ubah invtOne menjadi sorted[j] karena invtOne yg pertama sudah dimasukan ke variable result
      }
    }
    result.push(invtOne); // setelah menemukan group" lainnya / stelah loop selesai masukkan / tambahnkan lagi ke result
    return result;
    // // you can only write your code here!
  }
  
  // TEST CASES
  console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "angsa"])
  );
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
  );
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]