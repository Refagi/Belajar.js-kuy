//distructuring array
const arr = ['reno', 'faza', 'givaro', 'refagi', 'brongz']
let [firstname, middleName, lastname, ...dll] = arr

console.log (firstname, middleName, lastname)//reno faza givaro
console.log(dll)//[ 'refagi', 'brongz' ]


//distructuring object
{
    const known = {
    firstname : 'reno',
    npm : '10192048148',
    addres : {
        jalan : 'mawar',
        block : 'C12'
    },
    hobby : 'ngoding',
    country : 'palestina'
}

let {firstname, npm, addres, ...other} = known

console.log(firstname, npm, addres)//reno 10192048148 { jalan: 'mawar', block: 'C12' }
console.info(other)//{ hobby: 'ngoding', country: 'palestina' }
}


{
    const known = {
    firstname : 'reno',
    npm : '10192048148',
    addres : {
        jalan : 'mawar',
        block : 'C12'
    },
    hobby : 'ngoding',
    country : 'palestina'
}

let {firstname, npm, addres : {jalan, block}, ...other} = known

console.log(jalan, block)//mawar C12

}


//distructuring function parameter
function obj ({kesatu, kedua, ketiga}){
    console.log(kesatu, kedua, ketiga)

}
const wow = {
    kesatu : 'reno',
    kedua : 'faza',
    ketiga : 'givaro'
}

obj(wow)//reno faza givaro

//kalau dengan array
function arr ([number1, number2, number3]){
    console.log(number1 + number2 * number3) 
}
arr([3, 5, 2])//13


//distructuring default velue
let arr1 = ['reno', 'faza', 'givaro']
let [nama1, nama2, nama3, nama4 = 'refagi'] = arr1

console.log(nama1, nama2, nama3, nama4)//reno faza givaro refagi
//begitu juga dengan object caranya sama


//mengubah nama variable
const kiw = {
    firstname : 'reno',
    middleName : 'faza',
    lastname : 'givaro'
}
const {firstname : namaKesatu, middleName : namaKedua, lastname : namaKetiga} = kiw
console.log(namaKesatu, namaKedua, namaKetiga)//reno faza givaro
