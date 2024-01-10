
const wow = (status) => {
    console.log(status)
  }
  const status = wow('Refagi')
  
  
  const getASyc = (id, cb ) => {
  
    const time = id === 1 ? 3000 : 5000
    setTimeout (() => {
      const cek = id === 1 ? 'Reno Ganteng' : 'Reno Ganteng Banget'
      cb({id, cek})
    }, time)
  }
  
  const dataOne = getASyc(1, (result) => {
    console.log(result)
  })
  
  const dataTwo = getASyc(2, (result) => {
    console.log(result)
  })
  
  const test = 'Reno Faza Givaro'
  console.log(test)