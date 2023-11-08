

function hapusSimbol(str) {
    let result = ''
    let cek = new RegExp('[a-z,0-9]')
    for (let i = 0; i < str.length; i++){
        if (cek.test(str[i])){//jika variable cek === yg ada di str[i], maka true karena true maka jalankan result
            result += str[i]
        } //jika false maka akan menjadi kosong sperti 'CODING'
    }
    return result
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100
  console.log(hapusSimbol('CODING')); // coding




  /*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. Function akan me-return 
jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut. 
Gunakan regex untuk melatih kemampuan regex.
*/
function cariPelaku(str) {
    let result = 0
    let temukan = str.match(/abc/g)
    for (let i = 0; i < temukan.length; i++){
        if (temukan){//jika abc maka jumlahkan
            result++
        }
    }
    return result
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2