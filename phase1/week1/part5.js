/*
Sorting algorithm adalah suatu metode atau algoritma yang digunakan untuk mengurutkan elemen-elemen dalam 
suatu koleksi atau array dalam urutan tertentu, seperti urutan numerik atau urutan alfabet. Tujuan utama dari 
sorting algorithm adalah untuk mengatur data dalam suatu urutan tertentu sehingga memudahkan proses pencarian 
atau analisis lebih lanjut.

Berikut adalah implementasi dari 4 algoritma pengurutan 
(Bubble Sort, Selection Sort, Insertion Sort, dan merge sort) dalam JavaScript : 
 
Bubble Sort:

Bubble Sort adalah algoritma pengurutan sederhana yang bekerja dengan membandingkan dan menukar 
elemen-elemen berpasangan jika diperlukan. Elemen-elemen yang lebih besar akan "menggelembung" 
ke akhir array secara perlahan.*/

// Algoritma Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
  
    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {
  
      // Loop dalam untuk perbandingan
      for (let j = 0; j < n - i - 1; j++) {
        // Membandingkan elemen berdekatan
        if (arr[j] > arr[j + 1]) {
          // Tukar arr[j] dan arr[j+1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  let array = [64, 34, 25, 12, 22, 11, 90];
  bubbleSort(array);
  console.log("Array terurut:", array);


/*Selection Sort:

Selection Sort adalah algoritma pengurutan yang memilih elemen terkecil dari sisa array 
dan menukarkannya dengan elemen pertama dari array yang belum diurutkan. */

// Algoritma Selection Sort
function selectionSort(arr) {
    let n = arr.length;
  
    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Cari elemen terkecil pada bagian yang belum diurutkan
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Tukar arr[i] dan arr[minIndex]
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  
  let array2 = [64, 25, 12, 22, 11];
  selectionSort(array2);
  console.log("Array terurut:", array2);




/*Insertion Sort:

Insertion Sort bekerja dengan membandingkan setiap elemen dengan elemen-elemen sebelumnya dan 
memasukkannya ke posisi yang tepat dalam urutan yang sudah diurutkan.
 */
// Algoritma Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
  
    // Dimulai dari elemen kedua (indeks 1)
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Geser elemen-elemen yang lebih besar ke posisi berikutnya
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Tempatkan elemen current pada posisi yang tepat
      arr[j + 1] = current;
    }
  }
  
  let array3 = [12, 11, 13, 5, 6];
  insertionSort(array3);
  console.log("Array terurut:", array3);

  //cara insertion kedua
  function insertionSort2 (arr){
    for (let i = 1; i < arr.length; i++){
        for (let j = i - 1; j > - 1; j--){

            if (arr[j + 1] < arr[j]){
                let result = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = result
            }
        }
    }
    return arr
}
let array5 = [12, 11, 13, 5, 6];
insertionSort2(array5);
console.log("Array terurut:", array5);






/**
 * Merge Sort:

Merge Sort adalah algoritma pengurutan yang bekerja dengan cara membagi array menjadi dua bagian sama besar, 
mengurutkan masing-masing bagian secara terpisah, lalu menggabungkan kedua bagian yang telah diurutkan menjadi satu.
 */

// Algoritma Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Bagi array menjadi dua bagian
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Rekursif: Urutkan kedua bagian
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Gabungkan dua bagian yang telah diurutkan
    return merge(sortedLeft, sortedRight);
  }
  
  // Fungsi untuk menggabungkan dua array terurut menjadi satu array terurut
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Sisa elemen pada kedua array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  let array4 = [12, 11, 13, 5, 6, 7];
  let sortedArray = mergeSort(array4);
  console.log("Array terurut:", sortedArray);



/*Pada implementasi Merge Sort di atas, kita membagi array menjadi dua bagian secara rekursif, 
kemudian mengurutkan kedua bagian tersebut juga secara rekursif, dan akhirnya menggabungkan kedua bagian yang 
telah diurutkan menggunakan fungsi merge.

Algoritma Merge Sort memiliki kecepatan waktu yang konstan dan cocok untuk mengurutkan array dengan ukuran besar. 
Ini bekerja dengan membagi array menjadi bagian-bagian kecil, mengurutkan masing-masing bagian tersebut, 
dan kemudian menggabungkannya kembali secara terurut.
=====================================================================================
Time Complexity Sorting Algo

Bubble Sort:
- Average Case: O(n^2)
- Best Case: O(n) (ketika array sudah terurut)
- Worst Case: O(n^2) (ketika array terbalik terurut)

Selection Sort:
- Average Case: O(n^2)
- Best Case: O(n^2)
- Worst Case: O(n^2)

Insertion Sort:
- Average Case: O(n^2)
- Best Case: O(n) (ketika array sudah terurut)
- Worst Case: O(n^2)

Merge Sort:
- Average Case: O(n log n)
- Best Case: O(n log n)
- Worst Case: O(n log n)

Kompleksitas waktu untuk Bubble Sort, Selection Sort, dan Insertion Sort sangat tergantung pada jumlah elemen 
dalam array. Semakin banyak elemen, semakin lama waktu yang diperlukan untuk pengurutan.

Di sisi lain, Merge Sort memiliki kompleksitas waktu yang lebih baik karena membagi array menjadi bagian-bagian 
kecil dan kemudian menggabungkan mereka secara terurut. Oleh karena itu, Merge Sort lebih efisien untuk ukuran 
array yang lebih besar.

Penting untuk diingat bahwa ini adalah analisis kompleksitas waktu dalam teori. Pada implementasi praktis, 
faktor-faktor seperti overhead dari perbandingan dan pertukaran elemen, serta pengoptimalan compiler dan hardware, 
dapat mempengaruhi kinerja sebenarnya dari algoritma pengurutan. 
 */



/**\LOGIC NOLEP (sortingAlgo.js)
Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. 
Anda bisa mengembalikan jawaban dalam urutan apa pun.

Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa 
lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali. 

Contoh 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Contoh 2:
Input: strs = [""]

Output: [[""]]

Contoh 3:
Input: strs = ["a"]

Output: [["a"]]

Constraints:

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.
*/

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// const groupAnagrams = function(strs) {
//   // Implementasi akan datang di sini
// };

// // Test Case 1
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// // Test Case 2
// console.log(groupAnagrams([""])); 
// // Output: [[""]]

// // Test Case 3
// console.log(groupAnagrams(["a"])); 
// // Output: [["a"]]

// // Test Case 4
// console.log(groupAnagrams(["listen", "silent", "hello", "world"])); 
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
// console.log(groupAnagrams(["rat", "tar", "art", "car"])); 
// // Output: [["rat","tar","art"],["car"]]

// // Test Case 6
// console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"])); 
// // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
// console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
// // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]


/*kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular 
function setiap sorting dan implement ke groupAnagrams()*/


function bubbleSort1(strs1){
  for (let i = 0; i < strs1.length; i++){
    for (let j = 0; j < strs1.length - i - 1; j++){
      if (strs1[j] > strs1[j + 1]){
          let result = strs1[j]
          strs1[j] = strs1[j + 1]
          strs1[j + 1] = result
      }
    }
  }
  return strs1
}
//   console.log(bubbleSort([13, 2, 5, 20, 16]))

function selectionSort2(strs2){
  for (let i = 0; i < strs2.length ; i++){
      let min = i

      for (let j = i + 1; j < strs2.length; j++){
          if(strs2[j] < strs2[min]){
              min = j
          }
      }
      let result = strs2[i]
      strs2[i] = strs2[min]
      strs2[min] = result
  }
  return strs2
}
// console.log(selectionSort([12, 1, 3, 8, 5]))

function insertionSort3(strs3){
  for (let i = 1; i < strs3.length; i++){
      for (let j = i - 1; j > -1; j--){

          if (strs3[j] > strs3[j + 1]){
              let result = strs3[j]
              strs3[j] = strs3[j + 1]
              strs3[j + 1] = result
          }
      }
  }
  return strs3
}
// console.log(insertionSort3([15, 11, 16, 12, 9]))


function margeSort4(strs4){
  if (strs4.length <= 1){
      return strs4
  }

  const middle = Math.floor(strs4.length / 2)
  const left = strs4.slice(0, middle)
  const right = strs4.slice(middle)

  const leftSort = margeSort4(left)
  const rightSort = margeSort4(right)

  return marge4(leftSort, rightSort)
}
function marge4(left, right){
  let result = []
  let leftKiri = 0
  let rightKanan = 0

  while (leftKiri < left.length && rightKanan < right.length){
      if (left[leftKiri] < right[rightKanan]){
          result.push(left[leftKiri])
          leftKiri++
      } else {
          result.push(right[rightKanan])
          rightKanan++
      }
  }

  return result.concat(left.slice(leftKiri)).concat(right.slice(rightKanan))
}
// console.log(margeSort4([12, 9, 5, 20, 21]))


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs, sorting) {
  // Implementasi akan datang di sini

  let obj = {}
  let arr = []
  for (let i = 0; i < strs.length; i++){
      const group1 = sorting(strs[i].split('')).join('')
      // console.log(group1)
      if (obj[group1]){
          obj[group1].push(strs[i])
      } else {
          obj[group1] = [strs[i]]
      }
  }
  for (const key in obj){
      arr.push(obj[key])
  }
  return arr
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort1)); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""], bubbleSort1)); 
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"], bubbleSort1)); 
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"], margeSort4)); 
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"], margeSort4)); 
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], margeSort4)); 
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], margeSort4)); 
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]


