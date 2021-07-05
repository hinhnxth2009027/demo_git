document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('button')
    var value = document.querySelector('input')
    var data = document.getElementById('app')

    btn.addEventListener('click', () => {
        if (value.value.length < 10) {
            alert('vui lòng nhập đầy đủ thông tin')
        } else {
            var key = randomkey(15)
            data.innerHTML += `<div id="${key}">
        <p>${value.value}</p>
        <span slot="${key}" >&times;</span>
    </div>`
            var close = document.querySelectorAll('span')
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var key = this.slot
                    document.getElementById(`${key}`).remove()
                }
            }
        }
        value.value = ''
    })

    function randomkey(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

})