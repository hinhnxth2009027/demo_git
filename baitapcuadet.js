var btn = document.querySelector('button')
var input = document.querySelector('input')
var di = document.querySelector('.acc')
btn.onclick = function () {
    if (input.value.length < 1){
        alert('vui long nhap')
    }else {
        var key = makeid(20)
        di.innerHTML += `<div id="${key}">
        <p>${input.value} </p>
        <span slot="${key}" onclick="delete_content(this.slot)">&times;</span>
    </div>`
    }
}
function delete_content(abc) {
    document.getElementById(`${abc}`).remove()
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