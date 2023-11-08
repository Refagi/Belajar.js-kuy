/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika
panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {

    let result1 = []
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i].length % 2 === 0){
            let result2 = ''
            for (let j = arr[i].length - 1; j >= 0; j--){
                result2 += arr[i][j]
            }
            result1.push(result2)
        } else {
            result1.push(arr[i])
        }
    }
    if (arr.length === 0){
        return 'invalid input parameter' 
    }
    return result1
    //code here 
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'aggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
//  invalid input parameter



/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

function findNotRelative(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++){
        let change = false
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                change = true
            }
        }
        if (!change){
            result.push(arr1[i])
        }
    }
    return result
    //code here
  }
  
  console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
  console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
  console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]


  /*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. 
Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali.
Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
  let result1 = 0
  let result2 = 0
  let result3 = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > result1){
      result1 = arr[i]
      result3 = [i]// isi dengan index nilai yg pertama kali di dapatkan
      //misal nilai terbesar yg pertama di dapat 5 di index 1 maka masukan index 5 itu yaitu index(1)
    } else if (arr[i] === result1){
      result3.push(i)
    }
  }
  for (let j = 1; j < result3.length; j++){
    result2 = result3[j] - result3[j - 1]
  }
  return result2
    // your code here
  }
  
  console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
  console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
  console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
  

 /*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  let change1 = words.split('')
  let change2 = words.split(' ')
  let result1 = 0
  // let result2 = 0
  for (let i = 1; i <= change1.length; i++){
    if (change1[i] === ' '){
      continue
    }
    result1 += [i].length
  }
  let result2 = Math.round(result1 / change2.length)
  let arr = []
  for (let j = 0; j < change2.length; j++){
    if (change2[j].length === result2){
      arr.push(change2[j])
    }
  }
  return arr
  
  //code here
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!'));
 // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []