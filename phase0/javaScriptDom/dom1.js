/*Dom selection method : 
getElementById(), getElementByTagName(), getElementByClassName(), querySelector(), querySelectorALL()
*/

const chek = document.getElementById('judul')
chek.style.color = 'purple'
chek.style.backgroundColor = 'lightgreen'
chek.innerHTML = 'Refagi' // innerHTML bisa merubah dan menambahkan element apapun

const change = document.getElementsByTagName('p')

for (let i = 0; i < change.length-1; i++){
    change[i].style.backgroundColor = 'orange'
    
}
//bisa juga meskipun jumlahnya hanya ada satu
const changeUk = document.getElementsByTagName('h1')[0]
changeUk.style.fontSize = '60px' //atau changeUk[0].style.fontSize = '60px'


const changeP = document.getElementsByClassName('p1')
changeP[0].style.color = 'purple'

const changeCont = document.getElementById('container')
changeCont.style.fontSize = '20px'

const changeList = document.getElementById('b')
changeList.style.fontSize = '15px'

const p4 = document.querySelector('#b p')
p4.style.backgroundColor = 'lightgreen'

const list = document.querySelectorAll('li')
for (let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = 'lightblue'
}
