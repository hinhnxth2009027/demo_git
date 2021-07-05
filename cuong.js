var fullname = document.querySelector('#fullname')
var age = document.querySelector('#age')
var phone = document.querySelector('#phone')
var button = document.querySelector('button')
var messages = document.querySelectorAll('span')
button.onclick = function (){
    if (fullname.value.length < 2){
        messages[0].innerHTML = 'khong du ky tu'
        messages[0].classList.add('loi')
        messages[0].classList.remove('thanhcong')
    }else{
        messages[0].innerHTML = 'thanh cong'
        messages[0].classList.remove('loi')
        messages[0].classList.add('thanhcong')
    }

    if (Number(age.value) < 18){
        messages[1].innerHTML = 'Tuoi khong du'
        messages[1].classList.add('loi')
        messages[1].classList.remove('thanhcong')
    }else{
        messages[1].innerHTML = 'thanh cong1'
        messages[1].classList.remove('loi')
        messages[1].classList.add('thanhcong')
    }
    if (phone.value.length < 10){
        messages[2].innerHTML = 'khong du ky tu2'
        messages[2].classList.add('loi')
        messages[2].classList.remove('thanhcong')
    }else{
        messages[2].innerHTML = 'thanh cong2'
        messages[2].classList.remove('loi')
        messages[2].classList.add('thanhcong')
    }

}
