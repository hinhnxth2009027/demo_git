var input = document.querySelector('input')
var btn = document.querySelector('button')
var inra = document.querySelector('.hienra')
btn.onclick = function () {
    var key = makeid(10)
    if (input.value.length < 1) {
        alert('Mày phải nhập gì đó vào chứ')
    } else {
        inra.innerHTML += `<div id="${key}">
        <p>${input.value}</p>
        <span slot="${key}" onclick="remove(this.slot)">&times;</span>
    </div>`
    }
}

function remove(aaa) {
    document.getElementById(`${aaa}`).remove()
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}