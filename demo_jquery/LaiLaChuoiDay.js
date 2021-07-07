document.addEventListener('DOMContentLoaded', function () {
    var productName = $('#product-name')
    var thumbnail = $('#thumbnail')
    var price = $('#price')
    var content = $('#products')
    var btn = $('#add')
    var products = []
    btn.click(function () {
        if (productName.val().length < 1 || thumbnail.val().length < 1 || price.val().length < 1) {
            alert('Không được bỏ trống trường nào')
        } else {
            content.html('')
            var product = {
                name: productName.val(),
                thumbnail: thumbnail.val(),
                price: price.val()
            }
            products.push(product)
            for (let i = 0; i < products.length; i++) {
                content.append(`<div class="col-3">
            <img src="${products[i].thumbnail}" alt="">
            <h2>${products[i].name}</h2>
            <h3>${products[i].price}đ</h3>
            <button class="btn btn-primary">Buy</button>
            <span id="hi${i}">&times;</span>
            </div>`)
            }
            productName.val('')
            thumbnail.val('')
            price.val('')

        }
    })
})