document.addEventListener('DOMContentLoaded', function () {
    var name = $('#name')
    var thumbnail = $('#thumbnail')
    var price = $('#price')
    var content = $('#products')
    var btn = $('#btn-add')
    var products = []
    btn.click(function () {
        if (name.val().length < 1 || thumbnail.val().length < 1 || price.val().length < 1) {
            alert("Please fill all!")
        } else {
            content.html('')
            var product = {
                name: name.val(),
                thumbnail: thumbnail.val(),
                price: price.val()
            }
            products.push(product)
            for (let i = 0; i < products.length; i++) {
                content.append(`<div id="xoa${i}" class="col-3">
            <img src="${products[i].thumbnail}">
            <h2>${products[i].name}</h2>
            <h3>${products[i].price} Beli</h3>
            <button class="btn btn-warning">Buy</button>
            <span slot="${i}">&times;</span>
            </div>`)
            }
            name.val('')
            thumbnail.val('')
            price.val('')
            $('span').click(function () {
                $(`#xoa${this.slot}`).remove()
                products.splice(Number(this.slot),1)
            })
        }
    })
})

function xoa(index) {

}