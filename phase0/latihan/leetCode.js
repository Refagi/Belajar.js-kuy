function premierLeagueStandings(teamStandings) {
    let arr = []
    let arr2 = []
    for (const key in teamStandings){
        arr.push(teamStandings[key])
    }
    let first = arr[0]
    for (let j = 0; j < arr.length; j++){
        if (arr[j] === first){
            continue
        }
     arr2.push(arr[j])
    }
    const obj = {1: first}
    for (let i = 0; i < arr2.length; i++){
        for (let l = 0; l < arr2.length - 1; l++){
            if (arr2[l] > arr2[l + 1]){
                let result = arr2[l]
                arr2[l] = arr2[l + 1]
                arr2[l + 1] = result
            }
        }
        
    }
    for (let k = 0; k < arr2.length; k++){
        obj[k + 2] = arr2[k]
    }
    return obj
  }
console.log(premierLeagueStandings({1:'Arsenal'}))
//{1:'Arsenal'}
console.log(premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'})) 
// {1:'Leeds United', 2:'Accrington Stanley', 3:'Arsenal'} 
console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'})) 
// {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'} 


function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }

  console.log(greet("Ryan")) //"Hello, Ryan how are you doing today?"
  console.log(greet("Shingles"))// "Hello, Shingles how are you doing today?"


let arr = [2, 4, 6, 8, 10];
let result = arr.flatMap((x) => x + 1)
console.log(result)


var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                result.push(i, j)
            }
        }
    }
    return result
};
console.log(twoSum ([2,7,11,15], 9))//[ 0, 1 ]
console.log(twoSum ([3,2,4], 6))//[ 1, 2 ]
console.log(twoSum ([3,3], 6))//[ 0, 1 ]
console.log(twoSum ([3,2,3], 6))//[0,2]


var addTwoNumbers = function(l1, l2) {
    let arr = []
    let result1 = ''
    let result2 = ''
    for (let i = l1.length-1; i >= 0; i--){
        result1 += l1[i]
    }
    for (let j = l2.length-1; j >= 0; j--){
        result2 += l2[j]
    }
    let result3 = Number(result1) + Number(result2)
    let result4 = result3.toString().split('')
    for (let k = 0; k < result4.length; k++){
        arr.push(parseInt(result4[k]))
    }
    let result5 = []
    for (let h = arr.length-1; h >= 0; h--){
        result5.push(arr[h])
    }
    if (result5 >= 0 && result5 <= 9){
        return result5
    } else;{

    }
};
console.log(addTwoNumbers([2,4,3], [5,6,4]))//[ 7, 0, 8 ]
console.log(addTwoNumbers([0], [0]))//[0]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
/*[
    8, 9, 9, 9,
    0, 0, 0, 1
  ]
*/


//soal dari pascal
// Buatlah sebuah program dengan menggunakan bahasa pascal, untuk menghitung gaji bersih seseorang karyawan
// denagn ketentuan, GAJI BERSIH = GAJI POKOK + TUNJANGAN - PAJAK, tunjangan karyawan adalah20% dari besaran gaji
// pokok sedangkan pajak adalah 15% dari gaji pokok ditambah tunjangan
// program menerima 2 buah inputan berupa nama karywan dan gaji pokok, serta menampilkan besaran gaji bersih

// function MenghitunGaji (nama, gajiPokok){
//  const tunjangan = ((20/100) * gajiPokok)
//  const pajak = ((15/100) * (gajiPokok + tunjangan))
//  const gajiBersih = gajiPokok + tunjangan - pajak
//  return ` Gaji bersih yang diterima oleh ${nama} adalah ${gajiBersih}`
// }
// console.log(MenghitunGaji('Refagi', 3000000 ))


//soal dari bahasa pascal
// Sebuah perusahaan ojek online menentukan tarif berdasarkan jarak tempuh, dimana untuk 
//     minimal 4Km pertama adalah Rp. 9.500,- sedangkan untuk Km selanjutnya adalah Rp. 
//     2.500,- per Km. Selain itu, pihak perusahaan ojek online juga memberikan promo 
//     berdasarkan jarak tempuh sebagai berikut: 
//     jarak tempuh    :       diskon    
//          0-10 km               0%
//          10-15 km             Rp 2500
//          >15 km               Rp 5000
//     Dari studi kasus diatas, buatlah sebuah program dengan menggunakan bahasa 
//     pemrograman pascal, dimana program menerima 2 buah inputan, yaitu nama customer 
//     dan jarak yang akan ditempuh. Kemudian menampilkan besaran biaya yang harus dibayar 
//     customer! 
//     Contoh output
//     Nama Customer : Tony Stark <inputan> 
//     Jarak yang akan ditempuh (Km) : 12 <inputan> 
//     Selamat, anda mendapatkan potongan Rp. 2000 
//     Tarif yang harus dibayarkan Tony Stark adalah sebesar 27500

function menghitungOngkosGojek (nama, jarak){
    let diskon = 0
    let totalOngkos = 0
    let hargaOngkos = 0
    if (jarak >= 0 && jarak < 10){
        diskon = 0
        console.log(`yah anda belum dapat diskon Rp. ${diskon}`)
    } else if (jarak >= 10 && jarak <= 15){
        diskon = 2000
        console.log(`Selamat, anda mendapatkan potongan Rp. ${diskon}`)
    } else {
        diskon = 5000
        console.log(`Selamat, anda mendapatkan potongan Rp. ${diskon}`)
    }

    if (jarak <= 4){
        hargaOngkos = 9500
    } else {
        hargaOngkos = 9500 + (jarak - 4) * 2500
    }

    totalOngkos = hargaOngkos - diskon
    return `Tarif yang harus dibayarkan ${nama} adalah sebesar ${totalOngkos}`
}
console.log(menghitungOngkosGojek('Refagi', 10))





//buatlah algoritma untuk menentukan luas persegi panjang, keliling persegi panjang, dan panjang diagonalnya, 
//lengkapi program dengan pilihan menu : 1)luas 2) keliling 3)panjang diagonal 4)keluar program. 
//pada setiap pilihan menu, dibaca panjang dan lebar empat persegi panjang.
//luas persegi panhang = P * L,  keliling = 2*P + 2*L,  panjang diagonal = sqrt(P*P + L*L)


// function menghitugPersegiPanjang (panjang, lebar, angka){

//     console.log('silahkan pilih angka (1-4)')
//     console.log('1. Menghitung Luas Persegi Panjang')
//     console.log('2. Menghitung Keliling Persegi Panjang')
//     console.log('3. Menghitung Panjang Diagonal Persegi Panjang')
//     console.log('4. Keluar program')
//     console.log('===========')

//     let Luas = panjang * lebar
//     let Keliling = ((2 * panjang) + (2 * lebar))
//     let panjangDiagonal = Math.sqrt((panjang * panjang) + (lebar * lebar))
function menghitugPersegiPanjang (number1, number2, number3){
    switch (angka) {
        case 1 : 
        angka = `luas Persegi Panjang = ${Luas}`
        break
        case 2 :
        angka = `Keliling Persegi Panjang = ${Keliling}`
        break
        case 3 :
        angka = `Panjang Diagonal Persegi Panjang = ${panjangDiagonal}`
        break
        case 4 :
        angka = `Keluar Program`
        break
        default:
        angka = 'angka tidak dalam jangkauan'
        break
    }
    return angka
}
console.log(menghitugPersegiPanjang(5, 7, 2))



// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
// Example 2:

// Input: pref = [13]
// Output: [13]
// Explanation: We have pref[0] = arr[0] = 13.

var findArray = function(pref) {
    if (pref.length <= 1){
        return pref
    }
    let result = []
    for (let i = 0; i < pref.length; i++){
        result.push(pref[i] ^ pref[i+1])
    }
    result.unshift(pref[0])
    result.pop()
    return result
};
console.log(findArray([5,2,0,3,1]))//[5,7,2,3,2]
console.log(findArray([13]))//[13]



var isPalindrome = function(x) {
    let change = x.toString()
    let result = ''
    for (let i = change.length - 1; i >= 0; i--){
      result += change[i]
    }
    if (x === parseInt(result)){
        return true
    } else {
        return false
    }
};
console.log(isPalindrome(121))//true
console.log(isPalindrome(-121))//false
console.log(isPalindrome(10))//false





// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]

var romanToInt = function(s) {
    let obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000}
        let count = 0
        for (let i = 0; i < s.length; i++){
            const first = obj[s[i]]
            const second = obj[s[i+1]]
        if (second > first){
            count += second - first
            i++//skip ke i berikutnya
        } else {
            count += first
        }
    }
    return count

};
console.log(romanToInt("III"))//3
console.log(romanToInt("LVIII"))//58
console.log(romanToInt("MCMXCIV"))//1994


/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.*/
 
var longestCommonPrefix = function(strs) {
    if (strs.length === 0){
        return ""
    }  

    let change = strs.sort()
    let first = change[0]
    let last = change[change.length-1]

   for (let i = 0; i < first.length; i++){
 /*jadi ini membandingkan string pertama dengan terakhir , first diatur menjadi "flower", dan last diatur menjadi 
  "flow" setelah diurutkan.
   Pada iterasi pertama loop,ini membandingkan "f" dengan "f", yang sama, jadi melanjutkan ke karakter berikutnya.
 Pada iterasi kedua, ini membandingkan "l" dengan "l", juga sama, jadi ini melanjutkan ke karakter berikutnya.
 Pada iterasi ketiga, ini membandingkan "o" dengan "i", yang berbeda, 
 sehingga ini mengembalikan potongan "first" sejauh itu, yaitu "fl".*/
    if (first[i] !== last[i]){
        return first.slice(0,i)
    }
   }
   return first //return first lagi untuk 
   /*Jika loop selesai tanpa mengembalikan hasil sebelumnya (tidak ada karakter yang berbeda ditemukan),
    maka first adalah awalan bersama terpanjang di antara semua string dalam array.
    Oleh karena itu, di luar loop, fungsi mengembalikan first sebagai hasil akhir.*/
};
console.log(longestCommonPrefix(["flower","flow","flight"]))//"fl"
console.log(longestCommonPrefix(["dog","racecar","car"]))//""


/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false*/

var isValid = function(s) {
   let arr = []
   for (let i = 0; i < s.length; i++){
    if (s[i] === "(" || s[i] === "{" || s[i] === "["){
        arr.push(s[i])
    } else {
        if (arr.length === 0){
            return false
        }
        let last = arr.pop()
        if (s[i] === ")" && last !== "("){
            return false
        }
        if (s[i] === "]" && last !== "["){
            return false
        }
        if (s[i] === "}" && last !== "{"){
            return false
        }
    }
   }
   return arr.length === 0
};
console.log(isValid("()"))//true
console.log(isValid("()[]{}"))//true
console.log(isValid("(]"))//true
console.log(isValid("{[]}"))//true


var mergeTwoLists = function(list1, list2) {
   let plus = [].concat(list1, list2)
   //let plus = [...list1, ...list2]
   for (let i = 0; i < plus.length; i++){
    for (let j = 0; j < plus.length -1; j++){
        if (plus[j] > plus[j+1]){
            let result = plus[j]
            plus[j] = plus[j+1]
            plus[j+1] = result
        }
    }
   }
   return plus
};
console.log(mergeTwoLists([1,2,4],  [1,3,4]))//[ 1, 1, 2, 3, 4, 4 ]
console.log(mergeTwoLists([], []))//[]
console.log(mergeTwoLists([], [0]))//[ 0 ]


