var fullname = document.querySelector('#fullname')
var old = document.querySelector('.old')
var phone = document.querySelector('.phone')
var button = document.querySelector('button')
var messages = document.querySelectorAll('span')
button.onclick = function () {
    if (fullname.value.length < 5){
        messages[0].innerHTML = 'ngu'
        messages[0].classList.add('loi')
        messages[0].classList.remove('thanhcong')
    }else {
        messages[0].innerHTML = 'khon'
        messages[0].classList.remove('loi')
        messages[0].classList.add('thanhcong')
    }
    if (Number(old.value) < 18){
        messages[1].innerHTML = "ditu"
        messages[1].classList.add('loi')
        messages[1].classList.remove('thanhcong')
    }else {
        messages[1].innerHTML = "cony"
        messages[1].classList.remove('loi')
        messages[1].classList.add('thanhcong')
    }
    if (phone.value.length < 10){
        messages[2].innerHTML = 'sai'
        messages[2].classList.add('loi')
        messages[2].classList.remove('thanhcong')
    }else {
        messages[2].innerHTML = 'true'
        messages[2].classList.remove('loi')
        messages[2].classList.add('thanhcong')
    }
}