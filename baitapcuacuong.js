var btn = document.querySelector('#button')
var input = document.querySelector('input')
var div = document.querySelector('.register1')
btn.onclick = function (){
    var key = makeid('20')
    if (input.value.length < 1){
        alert('Vui long nhap')
    }else{
        div.innerHTML += `<div id="${key}">
            <p>${input.value}</p>
            <span slot="${key}" onclick="remove(this.slot)">&times;</span>
        </div>`
    }
}
function remove(asd){
    document.getElementById(`${asd}`).remove()
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}