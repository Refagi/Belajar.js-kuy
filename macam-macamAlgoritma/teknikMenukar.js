// kita lihat polanya dari beberapa contoh dibawah
//algoritma euclidean
function fpb(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // perhatikan bagian sini
      // let temp = b;
      // b = a % b;
      // a = temp;
  
  // lalu algoritma untuk mencari urutan Fibonacci
  //solusi dengan loop
  function fibonacci(num) {
    // x is representing the first term,
    // y is representing the second term, and
    // z is representing the sum of x and y.
    var x = 0;
    var y = 1;
    var z;
    var i = 0;
    for (i = 2; i < num; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    return y;
  }
  
  // perhatikan bagian sini
      // z = x + y;
      // x = y;
      // y = z;
  
  // lalu algoritma bubble sort
  function bblSort(arr) {
    
      for (var i = 0; i < arr.length; i++) {
    
          // Last i elements are already in place  
          for (var j = 0; j < (arr.length - i - 1); j++) {
    
              // Checking if the item at present iteration 
              // is greater than the next iteration
              if (arr[j] > arr[j + 1]) {
    
                  // If the condition is true
                  // then swap them
                  var temp = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = temp
              }
          }
      }
    
      // Print the sorted array
      console.log(arr);
  }
  
  // perhatikan dibawah ini
    var temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp
  
  
  // BISA DILIHAT POLA NYA SAMA DENGAN TUJUAN BERBEDA
      // let temp = b;
      // b = a % b;
      // a = temp;
  
      // z = x + y;
      // x = y;
      // y = z;
  
  //   var temp = arr[j]
  //   arr[j] = arr[j + 1]
  //   arr[j + 1] = temp