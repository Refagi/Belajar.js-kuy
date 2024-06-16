function paperwork(n, m) {
    if (n >= 0 && m >= 0){
     return n * m
    } else if (n <= 0 || m <= 0) {
     return 0
    }
 }
 console.log(paperwork(5, 5))//25
 console.log(paperwork(-5, 5))//0
 
 function sumMix(x){
   let result = 0
 for (let i = 0; i < x.length; i++){
   result += Number(x[i])
 }
 return result
 }
 console.log(sumMix([9, 3, '7', '3']))//22
 console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))//42
 console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))//41
 
 
 // Write a function "greet" that returns "hello world
 function greet(){
   return 'hello world!'
 }
 
 function doubleInteger(i) {
   // i will be an integer. Double it and return it.
   return i * 2;
 }
 
 function booleanToString(b){
   if (b === true){
    return 'true'
  } else {
    return 'false'
  }
 //your code here
 }
 console.log(booleanToString(true))
 console.log(booleanToString(false))
 
 function getASCII(c){
   let result = ''
   for (let i = 0; i < c.length; i++){
     result = c.charCodeAt(0)//jadi method ini adalah untuk mencari urutan ke berapa dalam tabel ASCII
   }//ASCII itu seperti urutan code di amerika setau ku begitu, jadi sperti A itu urutan ke 65 dalam tabel ASCII 
   return result
   // ...
 }
 console.log(getASCII('A'))//65
 console.log(getASCII(' '))//32
 console.log(getASCII('!'))//33
 
 // basis angka
 var num = 6;
 console.log(num.toString(2)); // "1111" (basis 2 atau biner)
 console.log(num.toString(8)); // "17" (basis 8 atau oktal)
 console.log(num.toString(10)); // "15" (basis 10 atau desimal)
 console.log(num.toString(16)); // "f" (basis 16 atau heksadesimal)
 var num = 15;
 console.log(num.toString(3)); // "120" (basis 3 atau ternary)
 console.log(num.toString(4)); // "33" (basis 4 atau quaternary)
 console.log(num.toString(5)); // "30" (basis 5 atau quinary)
 console.log(num.toString(6)); // "23" (basis 6 atau senary)
 
 // jdi cara hitung biner sperti ini, jika sisa = 0, maka return 0, jika sisa = 1, maka return 1
 // misal 6, 6 % 2 = 3 sisa 0, 3 % 2 = 1 sisa 1, 1 % 2 = 0 sisa 1 jadi binernya =  110 
 
 function addBinary(a,b) {
   let result = a + b
 return result.toString(2)//jadi method ini untuk mengconvert bilangan desimal ke biner
 }
 console.log(addBinary(1, 1))//'10'
 console.log(addBinary(5, 9))//'1110'
 
 function checkAlive (health) {
   if (health > 0) {
     return true
   } else {
     return false
   }
 }
 console.log(checkAlive(5))
 console.log(checkAlive(0))
 
 
 function greet(language) {
     let obj = {
 "english": "Welcome",
 "czech": "Vitejte",
 "danish": "Velkomst",
 "dutch": "Welkom",
 "estonian": "Tere tulemast",
 "finnish": "Tervetuloa",
 "flemish": "Welgekomen",
 "french": "Bienvenue",
 "german": "Willkommen",
 "irish": "Failte",
 "italian": "Benvenuto",
 "latvian": "Gaidits",
 "lithuanian": "Laukiamas",
 "polish": "Witamy",
 "spanish": "Bienvenido",
 "swedish": "Valkommen",
 "welsh": "Croeso",
   }
 
   for (const key in obj){
     if (language === key){
       return obj[key]
     }
   }
   return "Welcome"
 }
 console.log(greet("english"))
 console.log(greet("dutch"))
 console.log(greet("IP_ADDRESS_INVALID"))
 
 
 function evenOrOdd(number) {
   
    if (number % 2 === 0){
     return 'even'
    } else {
     return 'Odd'
    }
 }
 console.log(evenOrOdd(2))
 console.log(evenOrOdd(7))
 console.log(evenOrOdd(-42))
 console.log(evenOrOdd(-7))
 console.log(evenOrOdd(0))
 
 
 function getPlanetName(id){
     var id;
     switch(id){
       case 1:
         id = 'Mercury'
         break
       case 2:
         id = 'Venus'
         break
       case 3:
         id = 'Earth'
         break
       case 4:
         id = 'Mars'
         break
       case 5:
         id = 'Jupiter'
         break
       case 6:
         id = 'Saturn'
         break
       case 7:
         id = 'Uranus'
         break
       case 8:
         id = 'Neptune'
         break
     }
     
     return id;
   }
   console.log(getPlanetName(2))//venus
   console.log(getPlanetName(5))//jupiter
   console.log(getPlanetName(3))//earth
 
 //kyu 6
 function createPhoneNumber(numbers){
     let result = ''
     let result2 = ''
     let result3 = ''
     for (let j = 0; j <= 2; j++){
         result += numbers[j]
     }
     for (let h = 3; h <= 5; h++){
         result2 += numbers[h]
     }
     for (let k = 6; k <= 9; k++){
         result3 += numbers[k]
     }
   return `(${result}) ${result2}-${result3}`
 //   return `(${result}) ${result2}-${result3}`
 }
 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
 console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
 
 function oddOrEven(array) {
     let result = 0
     for (let i = 0; i < array.length; i++){
         result += array[i]
     }
     let cek = Math.abs(result)
     if (cek % 2 === 0){
         return 'even'
     } else {
         return 'odd'
     }
     //enter code here
  }
  console.log(oddOrEven([0]))//even
  console.log(oddOrEven([1]))//odd
  console.log(oddOrEven([]))//even
  console.log(oddOrEven([0, 1, 5]))//even
  console.log(oddOrEven([0, 1, 3]))//even
  console.log(oddOrEven([1023, 1, 2]))//even
  console.log(oddOrEven([0, -1, -5]))//even
  console.log(oddOrEven([0, -1, -3]))//even
  console.log(oddOrEven([-1023, 1, -2]))//even
  console.log(oddOrEven([0, 1, 2]))//odd
  console.log(oddOrEven([0, 1, 4]))//odd
  console.log(oddOrEven([1023, 1, 3]))//odd
  console.log(oddOrEven([0, -1, 2]))//odd
  console.log(oddOrEven([0, 1, -4]))//odd
  console.log(oddOrEven([-1023, -1, 3]))//odd
 
 
 function countAnimals(animals,count){
   let cek = animals.split(',')
   let arr = []
   for (let i = 0; i < count.length; i++){
     let result = 0
     for (let j = 0; j < cek.length; j++){
       if (cek[j] === count[i]){
         result++
       }
     }
     arr.push(result)
   }
   return arr
   }
   console.log(countAnimals("dog,cat",["dog","cat"])) // menampilkan [1, 1]
   console.log(countAnimals("dog,cat",["dog","cat","pig"])) // menampilkan [1, 1, 0]
   console.log(countAnimals("dog,dog,cat",["dog","cat"]))//[2,1]
   console.log(countAnimals("dog,dog,cat",["pig","cow"]))//[0,0]
 
 
 function charConcat(string){
     let result1 = ""
     let cek = string.split('')
     for (let i = 1;  cek.length > 1; i++){
      result1 += cek.shift() + cek.pop() + i
      //['a','b','c','','d','e','f'] shift menghapus 'a' dan menambahkan ke result1 dan seterusnya begitu juga 
      //pop 
     } 
     return result1
     //your code here
   }
   console.log(charConcat("abc def"))//'af1be2cd3'
   console.log(charConcat("CodeWars"))//'Cs1or2da3eW4'
   
 
   
 
 function hammingWeight(x) {
     let i = 0
     while (x > 0) {
       i += x & 1
       x >>= 1
     }
     return i
   }
   console.log(hammingWeight(2))
 
 
 function pillars(numPill, dist, width) {
     let result = ''
     if (numPill > 1){
         let result1 = (numPill - 1) * (dist * 100)
         let result2 = (numPill - 2) * width
         result += result1 + result2
     } else {
         result += 0
     }
     return Number(result)
     // your code here
   }
   console.log(pillars(1, 10, 10))//0
   console.log(pillars(2, 20, 25))//2000
   console.log(pillars(11, 15, 30))//15270
 
 
 multiplicationTable = function(size) {
     let arr1 = []
     for (let j = 1; j <= size; j++){
         let arr2 = []
         for (let k = 1; k <= size; k++){
             arr2.push(j * k)
         }
         arr1.push(arr2)
     }
     return arr1
     // insert code here
 }
 console.log(multiplicationTable(3))//[[1,2,3], [2,4,6], [3,6,9]]
 
 function solve(s){
    let result = s.match(/\d+/g)
    return Math.max(...result)
 //(...)Ini digunakan karena Math.max() argumen-argumen harus yang terpisah, bukan array. 
 //Dengan menggunakan spread operator, kita dapat mengubah array menjadi argumen terpisah sehingga Math.max()
 // dapat berfungsi dengan benar. contoh, 
 //jika result berisi [12, 695, 1], menggunakan Math.max(...result) akan menjadi ekivalen dengan Math.max(12, 695, 1)
     //..
 };
 console.log(solve('gh12cdy695m1'))//695
 console.log(solve('2ti9iei7qhr5'))//9
 console.log(solve('vih61w8oohj5'))//61
 console.log(solve('f7g42g16hcu5'))//42
 console.log(solve('lu1j8qbbb85'))//85
 
 function solution(string) {
     let result = ''
     for (let i = 0; i < string.length; i++){
         if (string[i] === string[i].toUpperCase()){
             result += ' ' + string[i]
         } else {
             result += string[i]
         }
     }
     return result
 }
 console.log(solution('camelCasing'))//camel Casing
 console.log(solution('camelCasingTest'))//camel Casing Test
 
 function order (word){
     let change = word.split(" ")
     for (let i = 0; i < change.length; i++){
         for (let j = 0; j < change.length - 1 ; j++){
             let cek1 = Number(change[j].match(/\d/g))
             let cek2 = Number(change[j + 1].match(/\d/g))
             
             if (cek1 > cek2){
                 let result1 = change[j]
                 change[j] = change[j + 1]
                 change[j + 1] = result1
             }
         }
     }
     return change.join(" ")
 }
 console.log(order("is2 Thi1s T4est 3a"))//Thi1s is2 3a T4est
 console.log(order("4of g3ood Thi1s pe6ople Th5e the2"))//Thi1s the2 g3ood 4of Th5e pe6ople
 console.log(order(""))//""
 
 
 function meeting(s) {
    let cekOne = s.split(';')
    let arr2 = []
    for (let i = 0; i < cekOne.length; i++){
     let arr = cekOne[i].split(':')
     let besar1 = arr[0].toUpperCase()
     let besar2 = arr[1].toUpperCase()
     arr2.push(`(${besar2}, ${besar1})`)
    }
     for (let j = 0; j < arr2.length; j++){
         for (let k = 0; k < arr2.length - 1; k++){
             if (arr2[k] > arr2[k + 1]){
                 let result = arr2[k]
                 arr2[k] = arr2[k+1]
                 arr2[k+1] = result
             }
         }
     }
     return arr2.join('')
     // your code
 }
 console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
 //"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
 
 
 
 
 function toCamelCase(str){
     let cek1 = str.split('_')
     let arr = []
     let cek2 = str.split('-')
 
     for (let i = 0; i < cek1.length; i++){
        if (cek1.length > 1){
         arr.push(cek1[i])
        }
     }
     for (let j = 0; j < cek2.length; j++){
         if (cek2.length > 1){
             arr.push(cek2[j])
         }
     }
     let result2 = ''
     let result = arr[0]
     for (let k = 0; k < arr.length; k++){
           arr[k] = arr[k].replaceAll(arr[k][0], arr[k][0].toUpperCase())
          result2 = arr.slice(1)
     }
     let result5 = ''
    let result3 = result + result2
    let result4 = result3.split(',')
    for (let h = 0; h < result4.length; h++){
     result5 += result4[h]
    }
    if (arr.length === 0){
     return " "
    }
 
    return result5
 }
 console.log(toCamelCase(''))
 console.log(toCamelCase("the_stealth_warrior"))//theStealthWarrior
 console.log(toCamelCase("The-Stealth-Warrior"))//TheStealthWarrior
 console.log(toCamelCase("A-B-C"))//ABC
 
 function toCamelCase(str) {
     let arr = str.split(/[_-]/);
   
     if (arr.length === 0) {
       return "";
     }
   
     let result = arr[0];
     for (let i = 1; i < arr.length; i++) {
       result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
     }
   
     return result;
   }
   console.log(toCamelCase(''))
   console.log(toCamelCase("the_stealth_warrior")); // theStealthWarrior
   console.log(toCamelCase("The-Stealth-Warrior")); // TheStealthWarrior
   console.log(toCamelCase("A-B-C"))//ABC
 
 
   function findNeedle(haystack) {
    // your code here
    for (let i = 0; i < haystack.length; i++){
            if (haystack[i] === 'needle'){
                return `found the needle at position ${i}`
            } 
            // console.log(haystack[3])
    }
    return 'needle is not find'
  }

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))//found the needle at position 3
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))//found the needle at position 5
console.log(findNeedle( [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]))//found the needle at position 30



function squareOrSquareRoot(array) {
  //jika array memiliki akar kuadrat maka tampilkan akar kuadratnya, jika tidak pangkatkan 2
  let result = []
 for (let i = 0; i < array.length; i++){
  if (array[i] % Math.sqrt(array[i]) !== 0){
      result.push(Math.pow(array[i], 2))
  } else {
      result.push(Math.sqrt(array[i]))
  }
 }
  return result;  
}
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))//[2,9,3,49,4,1]
console.log(squareOrSquareRoot([ 2, 9, 3, 49, 4, 1 ]))//[ 4, 3, 9, 7, 2, 1 ]


function xo (baris, kolom){

  for (let i = 1; i <= baris; i++){
      let result = ''
      for (let j = 1; j <= kolom; j++ ){
          if ((i + j) % 2 !== 0){
              result += 'O' + ' '
          } else {
              result += 'X' + ' '
          }
      }
      console.log(result)
  }

}

console.log(xo(3, 5))
// X O X O X 
// O X O X O
// X O X O X

function solution(a, b){
  if(a.length > b.length){
    return `${b}${a}${b}`
  } else {
    return `${a}${b}${a}`
  }
}

console.log(solution('45', '1'));
console.log(solution('13', '200'));
console.log(solution('Soon', 'Me'));
console.log(solution('U', 'False'));