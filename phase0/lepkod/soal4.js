/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text){
    let cek = {}
    let change = text.toLowerCase()
    for (let i = 0; i < change.length; i++){
        if (cek[change[i]]){
            cek[change[i]]++
        } else {
            cek[change[i]] = 1
        }
    }
    let result = 0
    for(const key in cek){
        if (cek[key] > 1){
            result++
        }
    }
    return result
    //...
  }
  
  console.log(duplicateCount("")) //0
  console.log(duplicateCount("abcde")) //0
  console.log(duplicateCount("aabbcde")) //2
  console.log(duplicateCount("aabBcde")) //2
  console.log(duplicateCount("Indivisibility")) //1
  console.log(duplicateCount("Indivisibilities")) //2
  console.log(duplicateCount("abcabcdABcefGhg")) //4