

let batas = 0

while (batas === 0){
    let jumlahSoal = prompt(`Masukan Jumlah Soal Yang kamu mau = `)
    let jumlahBenar = 0;
    let jumlahSalah = 0;
    let nilai = 0;
    for (let i = 1; i <= jumlahSoal; i++){
        let a = Math.floor(Math.random() * 10)
        let b = Math.floor(Math.random() * 10)
         let jawaban = prompt(`Soal ${i} = ${a} + ${b} = `)
        if ( jawaban == (a + b)){
            jumlahBenar++
        } else{
            jumlahSalah++
        }
        nilai = (jumlahBenar / jumlahSoal) * 100
    }
    alert(`Jawaban Benar = ${jumlahBenar}`)
    alert(`Jawaban Salah = ${jumlahSalah}`)
    alert(`Nilai = ${Math.floor(nilai)}`)

    let pertanyaan = prompt(`Apakah mau belajar lagi ? (y/n)`)
    if (pertanyaan !== 'y' && pertanyaan !== 'Y'){
        batas++
    }
}

