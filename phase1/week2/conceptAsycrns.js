
// const wow = (status) => {
//     console.log(status)
//   }
//   const status = wow('Refagi')
  
  
//   const getASyc = (id, cb ) => {
  
//     const time = id === 1 ? 3000 : 5000
//     setTimeout (() => {
//       const cek = id === 1 ? 'Reno Ganteng' : 'Reno Ganteng Banget'
//       cb({id, cek})
//     }, time)
//   }
  
//   const dataOne = getASyc(1, (result) => {
//     console.log(result)
//   })
  
//   const dataTwo = getASyc(2, (result) => {
//     console.log(result)
//   })
  
//   const test = 'Reno Faza Givaro'
//   console.log(test)


// secara synchronous
// const npmMhs = ~~(Math.random() * 354354354)
// const noMhs = Math.floor(Math.random() * 10)


// const getLogin = (nama) => {
//   return {nama, npmMhs}
// }

// const getCode= (npmMhs) => {
//   if (npmMhs) {
//     return {code : 'refagi123'}
//   } else {
//     return 'npm is wrong !'
//   }
// }

// const getNoMhs = (code) => {
//   if (code) {
//     return noMhs
//   } else {
//     return 'code is wrong !'
//   }
// }

// const cekOne = getLogin('Reno Faza Givaro')
// console.log(cekOne.nama, cekOne.npmMhs)
// const {code} = getCode(cekOne.npmMhs)
// console.log(code)
// const cekTwo = getNoMhs(code)
// console.log(cekTwo)

// dengan cara Asynchronous dan callback
// const npmMhs = ~~(Math.random() * 354354354)
// const noMhs = Math.floor(Math.random() * 10)


// const getLogin = (nama, cb) => {
//   setTimeout (() => {
//     cb({nama, npmMhs}) 
//   }, 300)
// }

// const getCode= (npmMhs, cb) => {
//   setTimeout (() => {
//     if (npmMhs) {
//       cb({code : 'refagi123'})
//     } 
//   }, 500)
// }

// const getNoMhs = (code, cb) => {
//   if (code) {
//   setTimeout (() => {
//       cb({noMhs}) 
//   }, 200)}
// }

// const cekOne = getLogin('Reno Faza Givaro', (resultOne) => {
//   const {nama, npmMhs} = resultOne
//   console.log({nama, npmMhs})

//   getCode(npmMhs, (resultTwo) => {
//     const {code} = resultTwo
//     console.log({code})

//     getNoMhs(code, (resultThree) => {
//       console.log(resultThree)
//     })
//   })
// })


// menggunakan promise
// const npmMhs = ~~(Math.random() * 354354354)
// const noMhs = Math.floor(Math.random() * 10)


// const getLogin = (nama) => {
//   return new Promise ((succes, failed) => {
//     setTimeout (() => {
//       if (nama === 'Reno Faza Givaro') {
//          succes({nama, npmMhs})
//       } else {
//          failed('Name or is wrong !')
//       }
//     }, 300)
//   })
// }

// const getCode= (npmMhs) => {
//   return new Promise ((succes, failed) => {
//     setTimeout (() => {
//       if (npmMhs) {
//         succes({code : 'refagi123'}) 
//       } failed ('Npm is Wrong !')
//     }, 500)
//   })
// }

// const getNoMhs = (code) => {
//   return new Promise ((succes, failed) => {
//       setTimeout (() => {
//          if (code) {
//           succes({noMhs})
//          } failed('Code is Wrong !')
//       }, 200)
//   })
// }


// const cekOne = getLogin('Reno Faza Givaro')
// cekOne.then((resultOne) => {
//   const {nama, npmMhs} = resultOne
//   console.log(({nama, npmMhs}))

//   getCode(npmMhs).then((resultTwo) => {
//     const {code} = resultTwo
//     console.log({code})

//     getNoMhs(code).then((resultThree) => {
//       const{noMhs} = resultThree
//       console.log({noMhs})
//     }).catch(err =>
//       console.log(err))
//   }).catch(err => {
//     console.log(err)
//   })
// }).catch(err => {
//   console.log(err)
// })


//menggunakan Async await
const npmMhs = ~~(Math.random() * 354354354)
const noMhs = Math.floor(Math.random() * 10)


const getLogin = (nama) => {
  console.log('process nama dan npm mahasiswa...')
  return new Promise ((succes, failed) => {
    setTimeout (() => {
      if (nama === 'Reno Faza Givaro') {
         succes({nama, npmMhs})
      } else {
         failed('Name or is wrong !')
      }
    }, 300)
  })
}

const getCode= (npmMhs) => {
  console.log('process code mahasiswa...')
  return new Promise ((succes, failed) => {
    setTimeout (() => {
      if (npmMhs) {
        succes({code : 'refagi123'}) 
      } failed ('Npm is Wrong !')
    }, 500)
  })
}

const getNoMhs = (code) => {
  console.log('process no mahasiswa...')
  return new Promise ((succes, failed) => {
      setTimeout (() => {
         if (code) {
          succes({noMhs})
         } failed('Code is Wrong !')
      }, 5000)
  })
}


const cek = async () => {

  try {
    const {nama, npmMhs} = await getLogin('Reno Faza Givaro')

    const {code} = await getCode(npmMhs)

    const {noMhs} = await getNoMhs(code)

  // console.log(`nama : ${nama} npm : ${npmMhs} code : ${code} no mahasiswa : ${noMhs}`)
  console.log({nama, npmMhs})
  console.log({code})
  console.log({noMhs})
  } catch(err) {
    console.log(err)
  }
  
}
cek()

