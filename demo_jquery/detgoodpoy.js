document.addEventListener('DOMContentLoaded', function () {
    var Productname = $('#productname')
    var thumbnail = $('#thumbnail')
    var price = $('#price')
    var content = $('#Products')
    var products = []
    var btn = $('#add')
    btn.click(function () {
        if (Productname.val().length < 1 || thumbnail.val().length < 1 || price.val().length < 1){
            alert('Khong duoc bo trong truong nao')
        }else {
            content.html('')
            var product = {
                name: Productname.val(),
                anh: thumbnail.val(),
                gia: price.val()
            }
            products.push(product)
            for (let i = 0; i < products.length; i++) {
                content.append(`<div id="dat${i}" class="col-3">
            <img src="${products[i].anh}">
            <h2>${products[i].name}</h2>
            <h3>${products[i].gia}$</h3>
            <button class="btn btn-warning">Buy</button>
            <span slot="${i}">&times;</span>
        </div>`)
            }
            Productname.val('')
            thumbnail.val('')
            price.val('')
            $('span').click(function () {
                $(`#dat${this.slot}`).remove()
                products.splice(Number(this.slot), 1)
            })
        }
    })
})
