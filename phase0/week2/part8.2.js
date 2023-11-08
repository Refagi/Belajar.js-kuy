/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
  ];
  function dataHandling(input) {
    for (let i = 0; i < input.length; i++) {// meng iterasi / menghasilkan setiap baris (ada 4 baris)
      for (let j = 0; j < input[i].length; j++){// kenapa [i], karena untuk mengakses array string yang di iterasi oleh for(let i) itu/ untuk menghasilkan setiap elemen pada baris input[i]
        if (j === 0) {
          console.log(`Nomor ID: ${input[i][j]}`);
        } else if (j === 1) {
          console.log(`Nama Lengkap: ${input[i][j]}`);
        } else if (j === 2) {
          console.log(`TTL: ${input[i][j]} ${input[i][j + 1]}`);// j + 1 untuk menambahkan index selanjutnya 
        } else if (j === 4) {
          console.log(`Hobi: ${input[i][j]}`);
        }
      }
      console.log(" ");
    }
  }
  dataHandling(input);
  /*
  output yang diharapkan
  
  Nomor ID:  0001
  Nama Lengkap:  Roman Alamsyah
  TTL:  Bandar Lampung 21/05/1989
  Hobi:  Membaca
  
  Nomor ID:  0002
  Nama Lengkap:  Dika Sembiring
  TTL:  Medan 10/10/1992
  Hobi:  Bermain Gitar
  
  Nomor ID:  0003
  Nama Lengkap:  Winona
  TTL:  Ambon 25/12/1965
  Hobi:  Memasak
  
  Nomor ID:  0004
  Nama Lengkap:  Bintang Senjaya
  TTL:  Martapura 6/4/1970
  Hobi:  Berkebun
  */
  
  let input1 = [
    "0001",
    "Roman Alamsyah ",
    "Bandar Lampung",
    "21/05/1989",
    "Membaca",
  ];
  
  function dataHandling(input1) {
    input1.splice(
      1,
      4,
      "Roman Alamsyah Elsharawy",
      "Provinsi Bandar Lampung",
      "21/05/1989",
      "Pria",
      "SMA Internasional Metro"
    );
    console.log(input1);
  
    console.log(" ");
  
    let spliteinput1 = input1[3]; //ini kita ambil satu data dari array input1 yang paling atas pada urutan ke (3) yaitu "21/05/1989"
    let month = spliteinput1.split("/"); //menghilangakan tanda(/) dan di pecah
  
    let result = "";
    if (month[1] === "05") {
      //kenapa month[1] karena data "21/05/1989" sudah dipecah menjadi "21","05","1989" maka month[1] ada pada urutan "05"
      result = "Mei";
    } else {
      result = "Wrong";
    }
    console.log(result);
  
    console.log(" ");
  
    let tanggal = month;
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
  
    console.log(" ");
  
    let dateJoin = month; //diambil dari variable di atas yaitu let month
    let date = dateJoin.join("-");// tambahkan "-" mnggunakan .join
  
    console.log(date);
  
    console.log(" ");
  
    //  let name = input1[1]
    //  let ubahName = name.split(" ")
    //  console.log(ubahName[0],ubahName[1])
    // cara ngarang ini wkwkwkwk
  
    console.log(input1[1].slice(0, 15));
  }
  dataHandling(input1);
  
  /**
   * keluaran yang diharapkan (pada console)
   *
   * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
   * Mei
   * ["1989", "21", "05"]
   * 21-05-1989
   * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
   */
  