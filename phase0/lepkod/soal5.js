function piramid2(num) {
    for (let i = 5; i >= 1; i--){
        let result = ''
        for (let j = 0; j < i; j++){
            result += i
        }
        console.log(result)
    }
    for (let k = 2; k <= 5; k++){
        let result2 = ''
        for (let h = 1; h <= k; h++){
            result2 += k
        }
        console.log(result2)
    }
    //code here
  }
  
  console.log(piramid2(5))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */