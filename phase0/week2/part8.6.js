
function cariMean(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
       result += arr[i] // result = result + arr[i], setiap index dalam array dijumlahkan
    }
    return Math.round(result / arr.length)//pake round untuk membulatkan yg terdekat
    // hasil result penjumlahan dibagi(/) panjang array
    // you can only write your code here!
  }

  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7

//tips baca dokumentasi Math js untuk pembulatan

/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
function perkalianUnik(arr) {
  let result2 = [];
  let cek = 1;
  for (let j = 0; j < arr.length; j++) {
    cek *= arr[j]; //mengalikan semua data dalam array [j], misal [2, 4, 6]
    //cek = cek * arr[j], cek = 1 * 2 = 2, >>>  cek = 2 * 4 = 8, >>> cek = 8 * 6 = 48 
  }
  for (let h = 0; h < arr.length; h++) {
    //hasil perkalian [j] dibagi masing masing data dalam array[h] dan di push / dimasukan ke dlm variable []
    result2.push(cek / arr[h]);
  }
  return result2;
  // you can only write your code here!
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


// tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  let periksa = arr[1] - arr[0] // index[1] - index[0] // 2 - 1, 4 - 2
  for (let k = 1; k < arr.length; k++){//kenapa k=1 karena klo k=0 jdi arr[0] - arr[0-1] maka undifind
    let periksa2 = arr[k] - arr[k - 1]
    if (periksa2 !== periksa){
      return false
    } 
  }
  return true
  // you can only write your code here!
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 4, 7, 10, 13])); // false



function tentukanDeretGeometri(arr) {
  let cek1 = arr[1] / arr[0]
  for (let j = 1; j < arr.length; j++){
    let cek2 = arr[j] / arr[j-1]
    if (cek2 !== cek1){
      return false
    }
  }
  return true
  // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

function cariMean(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
       result += arr[i] // result = result + arr[i], setiap index dalam array dijumlahkan
    }
    return Math.round(result / arr.length)//pake round untuk membulatkan yg terdekat
    // hasil result penjumlahan dibagi(/) panjang array
    // you can only write your code here!
  }

  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7

//tips baca dokumentasi Math js untuk pembulatan

/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
function perkalianUnik(arr) {
  let result2 = [];
  let cek = 1;
  for (let j = 0; j < arr.length; j++) {
    cek *= arr[j]; //mengalikan semua data dalam array [j], misal [2, 4, 6]
    //cek = cek * arr[j], cek = 1 * 2 = 2, >>>  cek = 2 * 4 = 8, >>> cek = 8 * 6 = 48 
  }
  for (let h = 0; h < arr.length; h++) {
    //hasil perkalian [j] dibagi masing masing data dalam array[h] dan di push / dimasukan ke dlm variable []
    result2.push(cek / arr[h]);
  }
  return result2;
  // you can only write your code here!
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


// tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  let periksa = arr[1] - arr[0] // index[1] - index[0] // 2 - 1, 4 - 2
  for (let k = 1; k < arr.length; k++){//kenapa k=1 karena klo k=0 jdi arr[0] - arr[0-1] maka undifind
    let periksa2 = arr[k] - arr[k - 1]
    if (periksa2 !== periksa){
      return false
    } 
  }
  return true
  // you can only write your code here!
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 4, 7, 10, 13])); // false



function tentukanDeretGeometri(arr) {
  let cek1 = arr[1] / arr[0]
  for (let j = 1; j < arr.length; j++){
    let cek2 = arr[j] / arr[j-1]
    if (cek2 !== cek1){
      return false
    }
  }
  return true
  // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

