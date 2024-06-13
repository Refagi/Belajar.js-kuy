
let lirik = [
  [
    'sudah',
    'sudahi semua bicara',
    'ku ingin segera berdua',
    'dan pagi menjelang melahirkan mentari pagi dan sudah',
    'sudahi semua prasangka',
    'dunia berputarlah saja',
    'rekam peristiwa yang takan terulangi',
    'lagi dan sudah',
    'sudahi malam yang duka',
    'dunia kau kan baik saja',
    'hujan akan tiba melahirkan pelangi'
  ], 
  [
    'belajar memahami masa depan',
    'takah yang di simpan akan tenang',
    'melahirkan semua nada indah',
    'mencoba menjadi bahagiamu sendiri'
  ],
  [
    'sudah',
    'lupakan semua derita',
    'doa semesta menjaga',
    'luka akan hilang perlahan terobati ooo',
    'belajar memahami masa depan',
    'takah yang di simpan akan tenang',
    'melahirkan semua nada indah',
    'mencoba menjadi bahagiamu sendiri'
  ]
];

let lirikTwo = [
  [
    'do you thing  i have forgotten?',
    'do you thing  i have forgotten?',
    'do you thing  i have forgotten?',
    'about you'
  ],
  [
    `and there was something about you that now i can't remember`,
    'its the same damn thing that made my heart surrender',
    `and i'll miss you on a train, i miss you in the morning `,
    `i never know what to think about `,
    'i think about you'
  ]
]

let indexBait = 0;
let indexBaris = 0;
let indexHuruf = 0;

function musicLirik(){
  if(indexBait < lirikTwo.length && indexBait < 1){
    if(indexBaris < lirikTwo[indexBait].length){
      if(indexHuruf < lirikTwo[indexBait][indexBaris].length){
        process.stdout.write(lirikTwo[indexBait][indexBaris].charAt(indexHuruf))
        indexHuruf++
        setTimeout(musicLirik, 120)
      } else {
        process.stdout.write('\n')
        indexHuruf = 0;
        indexBaris++
        setTimeout(musicLirik, 700)
      }
    } else {
      indexBaris = 0;
      indexHuruf = 0
      indexBait++
      setTimeout(musicLirik, 500)
    }
  } else if (indexBaris < lirikTwo[indexBait].length){
    if(indexHuruf < lirikTwo[indexBait][indexBaris].length){
      process.stdout.write(lirikTwo[indexBait][indexBaris].charAt(indexHuruf))
      indexHuruf++
      setTimeout(musicLirik, 100)
    } else {
      process.stdout.write('\n')
      indexHuruf = 0;
      indexBaris++
      setTimeout(musicLirik, 500)
    }
  } 
  return
}

musicLirik()



// function timer (second){
//   const result = new Promise(resolve => setTimeout(resolve, second))
//   return result
// };

// async function lirikMusic (){
//   for(let i = 0; i < lirik.length; i++){
//     for(let j = 0; j < lirik[i].length; j++){
//       for(let k = 0; k < lirik[i][j].length; k++){
//         process.stdout.write(lirik[i][j].charAt(k))
//         await timer(200)
//       }
//       process.stdout.write('\n')
//       await timer(1010)
//     }
//     await timer(300)
//   }
// }

// lirikMusic();