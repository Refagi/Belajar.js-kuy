/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack (damage) {
   let result = damage
   return result - 2
    // Code disini
  }
//   console.log(attack(25));
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    let attackKers = attack(damagePerAttack)
    let result = 0
    for (let i = 0; i < numberOfAttacks; i++){
        result = numberOfAttacks
    }
    return result * attackKers
    // Code disini
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90



  /*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan 
meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/
function meleeRangedGrouping (str) {
    let arr = str.split(',')
    let result = []
    let typeR = []
    let typeM = []

    if (str.length === '' || str.length === 0){
        return result
    } else {
        for (let i = 0; i < arr.length; i++){
            let date = arr[i]
            let remove = date.split('-')

            if (remove[1] === 'Ranged'){
                typeR.push(remove[0])
            } else if (remove[1] === 'Melee'){
                typeM.push(remove[0])
            }
        }
        result.push(typeR, typeM)
    }
    return result
    //your code here
  }
    
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
 

  