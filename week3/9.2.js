//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  for (let i = 2; i < angka; i++) {
    //kenapa i = 2 ? karena 2 adalah bilngan prima terkecil/ dibagi dgn bilangan prima terkecil,
    // knpa tidak 1 ? karena klau dibagi 1 semua angka hasilnya sama
    if (angka % i === 0) {
      //jika angka di bagi i sisanya 0, maka langsung hasilnya false
      return false;
    } // misal, 4 dibagi 2 sisa 0, maka langsung false
    //beda dengan bilangan ganjil misal, 3 dibagi 2 sisa 1, maka tidak masuk pada kondisi ini
  }
  if (angka < 1) {
    // setelah looping selesai, dikondisikan lgi jika angka kurang dari 1 maka false
    return false;
  }
  return true; //jika angka tidak masuk dalam if pertama, maka dia true (bilangan prima)
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  for (let i = angka1; i >= 1; i--) {
    // di loop dari parameter angka1 ke 1, misal 4 = 4,3,2,1
    if (angka1 % i === 0 && angka2 % i === 0) {
      // jika kedua parameter di bagi i sisanya = 0,
      //maka kembalikan nilai i, yaitu angka yg bisa membagi keduanya menjadi = 0
      return i
      //6 dibagi 6, sisa = 0      4 dibagi 4, sisa = 0    jadi angka i yg bisa membagi keduanya yaitu 2 & 1
      //6 dibagi 5, sisa = 1      4 dibagi 3, sisa = 1    ambil yg paling besar yaitu 2
      //6 dibagi 4, sisa = 2      4 dibagi 2, sisa = 0
      //6 dibagi 3, sisa = 0      4 dibagi 1, sisa = 0
      //6 dibagi 2, sisa = 0
      //6 dibagi 1, sisa = 0
    }
  }
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(6, 4)); // 2
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

function cariMedian(arr) {
  arr.sort(function (a, b) {
    return a - b;
  }); // urutkan angka dari 1 sampai seterusnya....
  let median = Math.floor(arr.length / 2); //buat variable untuk mencari nilai tengah dengan floor membulatkan ke bawah
  //panjang array dibagi 2 untuk mencari nilai tengah
  if (arr.length % 2) {
    // kenapa tidak pake !== 0 atau == 0?
    //karena kita mau mencari panjang array ganjil atau genap bukan mencari sebuah nilai sisanya 0 atau tidak
    return arr[median]; //misal, variable media = 2, berrti arr[median] = arr[2] index ke 2
  } else {
    return (arr[median - 1] + arr[median]) / 2;
  }

  // you can only write your code here!
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log(cariMedian([5, 4, 6, 4]));

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul
(dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama 
maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });//urutkan dari 1 sampai sterusnya... boleh jga tidak pake
  let cek = [0, 0];
  //maksudnya cek[0, 0] itu ada dua elemen array jdi gini,
  //cek[0] untuk menghitung jumlah modus misalnya  dalam array modusnya 4 nah ada berapa 4 dalam array itu
  //selanjutnya, cek[1] kenapa di atas 0 karena belum ada modus yg ditemukan, karena itu gunakan 0 untuk sementara
  let result = 0;
  //untuk menghitung jumlah modus, nanti di masukan ke dalam cek[0]
  for (let i = 0; i < arr.length; i++) {
    let result2 = 0;
    for (let j = i; j < arr.length; j++) {
      //untuk menghitung berapa kali arr[i] muncul dalam array
      //misal (2), 4, 4, 5, 10. => (4), 4, 5, 10. => (4), 5, 10. => (5), 10. => (10) selesai
      if (arr[i] === arr[j]) {
        result2++;
        //lalu jika menemukan angka yg sama, misal (4), 4, 5, 10 nah kan selanjutnya 4 sama 4 lagi,maka result2 + 1
      }
    }
    if (result2 > result) {
      result = result2;
      cek[0] = result;
      cek[1] = arr[i]; 
    }//kenapa yg dimasukkan arr[i]?, karena arr[i] yg menjadi modusnya, yg dicari dengan loop arr[j]
  }
  if (cek[0] === 1 || cek[0] === arr.length) {
    //jika jumlah modus dlm array hanya 1 atau
    //sama panjangnya dgn panjang array maka kembalikan -1
    return -1;
  }
  return cek[1];
  //kembalikan lagi cek[1] yg isinya arr[i] yaitu hasil mencari modus
  // you can only write your code here!
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1



//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let result = ''
  let huruf = 'abcdefghijklmnopqrstuvwxyz'//dibuat hruf abjad untuk perbandingan dengan huruf yg di console dri a-z
for (let i = 0; i < kata.length; i++){//jdi loop[i] mengecek pada loop[k] satu persatu atau index per index
    for (let k = 0; k < huruf.length; k++){//kata[i] akan mengecek satu persatu dari index[0] sampai terakhir, 
      //apakah ada huruf yg sama di index[] huruf[k], 
      //jika ada maka akan menghasilkan huruf[k] selanjutnya dgn huruf[k + 1]
      if (kata[i] === huruf[k]){
        result += huruf[k + 1]
      }
      //console.log(`${kata[i]} = ${huruf[k]}`)
    }
  }
  return result
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
