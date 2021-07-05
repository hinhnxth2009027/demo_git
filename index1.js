var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var btn = document.querySelector('#btn')
btn.onclick = function () {
    alert(Number(num1.value) + Number(num2.value))
}