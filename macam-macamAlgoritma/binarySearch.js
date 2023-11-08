/* 
Setelah kalian membaca apa itu binary search, ternyata oh ternyata binary search itu bukan semata-mata 
harus di SORT DULU BARU MENCARI SESUATU

TERNYATA BINARY SEARCH BISA MENYELESAIKAN MASALAH YANG BERVARIASI LOH

namun perlu diketahui ada pertanyaan pertanyaan saat hendak meng-implementasi-kan algoritma ini
kapan loopnya harus berhenti? apakah harus dengan kondisi left < right atau left <= right??
Bagaimana menginisialisasi variabel batas kiri dan kanan?
Bagaimana cara memperbarui batas? Bagaimana cara memilih kombinasi yang tepat dari left = mid, left = mid + 1 dan 
right = mid, right = mid - 1?

Oke setelah mengetahui pertanyaan untuk implementasi algoritma, template ini yang akan sering dipake dan dirubah 
ubah, karena hanya TEMPLATE jadi kalian harus merubahnya sendiri sesuai dengan kondisi permasalahan yang didapat 

BERIKUT TEMPLATE MAUT YANG BISA DIPAKE UNTUK BANYAK PERMASALAHAN
*/

function binarySearch(arr) { //-> akan mereturn angka
    //param bisa berupa tipe data array atau angka. arranya juga harus ya angka wkwk
      function condition(value) { //-> akan mereturn boolean
        //kondisi sesuai permasahalan
      }
      
      let left = 0, right = arr.length
      //left adalah batas terendah dan right adalah batas tertinggi
      //biasa jadi left = 0, right = n dan left = 1, right = n
      while (left < right) {
        let mid = Math.floor(left + (right - left) / 2) //nilai tengah penentu percabangan
          if (condition()) { //kalau kondisi true
            right = mid;
          } else { //kalau kondisi false
            left = mid + 1;
          }
      }
      return left //kita akan mereturn false
    }



/* You are a product manager and currently leading a team to develop a new product. Unfortunately, 
the latest version of your product fails the quality check. Since each version is developed based on the
previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 
Constraints:

1 <= bad <= n <= 231 - 1
nah solusinya bisa dengan binarySearch*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    //isBadVersion ini fungsi yang kalo dijalanin dengan param angka
    //akan mereturn false atau true, sesuai dengan nama fungsinya
    return function(n) {
        let left = 1, right = n
        while (left < right) {
        let mid = Math.floor(left + (right - left) / 2) //4
            if (isBadVersion(mid)) {
            right = mid;
            } else {
            left = mid + 1;
            }
        }
        return left
    }
};



/*pertanyaan sekarang adalah:
kenapa ribet banget sih pake Binary Search????

jawaban:
itu karena dia itu kencang sekali bosss untuk pencarioan di inputan ter-urut

kali ini gua bikin simulasi soal yang di leetcode untuk di uji coba di VSCODE kalian*/

const badVersion = (n) => {
    if (n > 50) {
      return true
    } else {
      return false
    }
  }
  
  var firstBadVersion = function(isBadVersion) {
    return function(n) {
      let left = 1, right = n
      while (left < right) {
        console.log('anjay')
        let mid = Math.floor(left + (right - left) / 2) //4
          if (isBadVersion(mid)) {
            right = mid;
          } else {
            left = mid + 1;
          }
      }
      return left
    }
  }
  
//   var firstBadVersion = function(isBadVersion) {
//     return function(n) {
//       for (let i = 1; i < n; i++) {
//         console.log('anjay')
//         if (isBadVersion(i)) {
//           return i
//         }
//       }
//     }
//   }
  
  console.log(firstBadVersion(badVersion)(100))


  /* BANDINGKAN ADA BERAPA ANJAY ANTARA SOLUSI BINARY SEARCH DAN LINEAR SEARCH
  
  Perbandingan antara Binary Search dengan Linear Search bagai Ferarri lawan Angkot namun sayangnya angkot bisa 
  lewat gundukan, kalo ferarri ga bisa awkawkawk, jadi lebih flexibel Linear Search karena ga perlu diurut, 
  dan ga perlu hal yang monoton*/




  /*Binary search adalah sebuah algoritma pencarian yang efisien untuk menemukan elemen dalam sebuah array yang 
sudah terurut. Prinsipnya adalah membandingkan elemen yang dicari dengan elemen tengah dari array,
kemudian membagi array menjadi dua bagian dan melanjutkan pencarian di salah satu bagian yang sesuai. 
Algoritma ini berulang sampai elemen ditemukan atau array habis  */


// Fungsi untuk mencari elemen x dalam array arr yang sudah terurut
function binarySearch(arr, x) {
    // Inisialisasi indeks awal dan akhir
    let start = 0;
    let end = arr.length - 1;
  
    // Ulangi sampai indeks awal lebih besar dari indeks akhir
    while (start <= end) {
      // Hitung indeks tengah
      let mid = Math.floor((start + end) / 2);
  
      // Jika elemen tengah sama dengan x, kembalikan indeks tengah
      if (arr[mid] === x) {
        return mid;
      }
      // Jika elemen tengah lebih besar dari x, cari di bagian kiri
      else if (arr[mid] > x) {
        end = mid - 1;
      }
      // Jika elemen tengah lebih kecil dari x, cari di bagian kanan
      else {
        start = mid + 1;
      }
    }
  
    // Jika elemen tidak ditemukan, kembalikan -1
    return -1;
  }
  
  // Contoh penggunaan
  let arr = [1, 3, 5, 7, 9, 11]; // Array yang sudah terurut
  let x = 7; // Elemen yang dicari
  let result = binarySearch(arr, x); // Panggil fungsi binarySearch
  if (result === -1) {
    console.log("Elemen tidak ditemukan");
  } else {
    console.log("Elemen ditemukan pada indeks " + result);
  }
  //output 
  //Elemen ditemukan pada indeks 2