var btn = document.querySelector("button")
var input = document.querySelector("input")
var di = document.querySelector('.notice')
btn.onclick = function (){
    if (input.value.length<1){
        alert("mời nhập thông tin")
    }else {
        var key = makeid(20)
        di.innerHTML += `<div id="${key}">
            <p>${input.value}</p>
            <span slot="${key}" onclick="cancel(this.slot)">&times;</span>
        </div>`
    }
}
function cancel(abc){
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