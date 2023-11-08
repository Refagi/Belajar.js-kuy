
// for (;;){
    let musuh = Math.random()
    let pelayer = prompt('masukan karakter:\nsemut, orang atau gajah')
    // let result = ''
    // alert(musuh)
    for (let i = 0; i < musuh; i++){
        if (musuh < 0.40){
            musuh = 'semut'
        } else if (musuh >= 0.40 && musuh <= 0.60){
            musuh = 'orang'
        } else {
            musuh = 'gajah'
        }

        let result = ''
        if (pelayer === musuh){
            result = 'wah kamu seri'
        } else if (pelayer === 'orang'){
            if (musuh === 'semut'){
                result = 'yey kamu menang'
            } else if (musuh === 'gajah'){
                result = 'yah kamu kalah'
             }
        } else if (pelayer === 'gajah'){
            if (musuh === 'orang'){
                result = 'yey kamu menang'
            } else if (musuh === 'semut'){
                result = 'yah kamu kalah'
            }
        } else if (pelayer === 'semut'){
            if (musuh === 'gajah'){
                result = 'yey kamu menang'
            } else if (musuh === 'orang'){
                result = 'yah kamu kalah'
            }
        } else {
            result = 'karakter kamu tidak tersedia!!!!!!'
        }
        alert(`kamu pilih ${pelayer} dan musuh pilih ${musuh}`)
        alert(result)
    }
// }