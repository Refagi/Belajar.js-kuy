/* hash map / hash tables Approach 
contoh permasalahan:
const twoSum = (array, goal) => {
    //code here
   }
   
console.log(twoSum([1, 3, 9, 7, 6, 11, 14], 13)); //akan mereturn index[3,4]
//karena index 3 ditambah index 4 hasilnya sama dengan parameter goal, yaitu 13
*/



// SOLUSI 1
// dibawah ini pendekatan secara naive, alias brute force algorithm
// keliatan lah yak O(n^2) soalnya nested loop dengan kondisi array.length yang sama

const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
            indexes.push(i);
            indexes.push(j);
          }
       }
    }
    return indexes;
}
console.log(twoSum([1, 3, 9, 7, 6, 11, 14], 13))
/*diatas ini karena nested loop dengan kondisi i < array.length dan j < < array.length hasilnya akan 
berkuadrat dan bisa diartikan lumayan lemot wkwk 


SOLUSI 2
dibawah ini pendekatan dengan hashmap, dengan hashing algorithm
disini paling kenceng untuk permasalah two sum 

*/
const twoSumm = (array, goal) => {
    //code here
    let obj = {}; //nampung apa yg sudah kita cek contoh { 5: 0, 7: 1 }
    //struktur data
    for (let i = 0; i < array.length; i++) {
      if (obj[goal - array[i]] !== undefined) {
        //pake pendekatan matematika dikit wkwk
        return [obj[goal - array[i]], i];
      } else {
        obj[array[i]] = i;
      }
    }
  };
  console.log(twoSumm([1, 3, 9, 7, 6, 11, 14], 13))
/*variabel obj untuk hashTables nya, digunakan untuk menaruh data yang sebelumnya kita sudah akses/temui. 
sehingga kalian bisa nge test sendiri dah wakakaka, pelan pelan pahamin, gunakan console.log() untuk track datanya
Dan juga pendekatan ini bisa digunakan untuk problem yang lainnya, seperti mencari item yang duplikat */