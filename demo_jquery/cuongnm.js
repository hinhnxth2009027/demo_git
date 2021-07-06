document.addEventListener('DOMContentLoaded', function (){
    var productname = $('#productname')
    var thumnail = $('#thumbnail')
    var price = $('#price')
    var showconten = $('#showproducts')
    var products = []
    var buttonaddproduct = $('#btnaddproduct')
    buttonaddproduct.click(function (){

        if (productname.val().length < 1 || thumnail.val().length < 1 || price.val().length < 1){
            alert('vui long khong bo trong truong nao')
        }else{
            showconten.html('')
            var product = {
                name: productname.val(),
                thumnail:thumnail.val(),
                price:price.val()
            }
            products.push(product)
            for (let i = 0; i < products.length; i++) {
                showconten.append(` <div id="sp${i}" class="col-3">
            <img src="${products[i].thumnail}">
            <h2>${products[i].name}</h2>
            <h3>${products[i].price}$</h3>
            <button class="btn btn-warning">Buy</button>
            <span slot="${i}">&times;</span>
        </div>`)
            }
            productname.val('')
            thumnail.val('')
            price.val('')
            $('span').click(function () {
                $(`#sp${this.slot}`).remove()
                products.splice(Number(this.slot),1)
            })
        }
    })
})

