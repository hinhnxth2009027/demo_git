$('.chon_avatar').click(function () {
    $('.avatar').click()
})
$('.chon_cover_photo').click(function () {
    $('.cover_photo').click()
})

// $('.avatar').change(function (){
//     var file = this.files[0]
//     var form_data = new FormData()
//     form_data.append('upload_preset', key)
//     form_data.append('tags','browser_upload')
//     form_data.append('file',file)
//     $.ajax({
//         type:'POST',
//         url:'https://api.cloudinary.com/v1_1/${}/image/upload',
//         dataType:'jsonp',
//         data: form_data,
//         success: function (data) {
//             alert(data)
//         }})
// })
$('#form-validate').validate({
    rules: {
        ten: {
            required: true,
            minlength: 5,
            maxlength: 20
        },
        bietdanh: {
            required: true,
            minlength: 5,
            maxlength: 30
        },
        tieusu: {
            required: true,
            minlength: 5,
            maxlength: 100
        },
        email: {
            email: true,
            required: true
        },
        phone: {
            required: true,
            minlength: 5,
            maxlength: 10
        }
    },
    messages: {
        ten: {
            required: "Nhập tên của bạn",
            minlength: "Tên phải tối thiểu 5 ký tự",
            maxlength: "Tên không được quá 20 ký tự"
        },
        bietdanh: {
            required: "Thêm biệt danh",
            minlength: "Biệt danh phải tối thiểu 5 ký tự",
            maxlength: "Biệt danh không được quá 30 ký tự",
        },
        tieusu: {
            required: " Thêm biệt danh",
            minlength: "tiểu sử phải tối thiểu 5 ký tự",
            maxlength: " Tiểu sử không được quá 30 ký tự"
        },
        email: {
            email: "email phải có dấu @",
            required: "Nhập email"
        },
        phone: {
            required: "phải nhập số điện thoại",
            minlength: "Số điện thoại phải ít nhất 5 ký tự",
            maxlength: "Số điện thoại không được quá 10 ký tự"
        }
    }
})
var cloudName = 'dpd15pgka'
var key = 'ngocanh1807'
var url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
var xhr = new XMLHttpRequest();
$('.avatar').change(function () {
    var file = this.files[0]
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText)
                $('.show_avatar').attr('src', `${data.url}`)
            }
        }
    }
    xhr.open('POST', url, true)
    var data = new FormData()
    data.append('upload_preset', key)
    data.append('tags', 'browser_upload')
    data.append('file', file)
    xhr.send(data)
})
$('.cover_photo').change(function () {
    var file = this.files[0]
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText)
                $('.dat').attr('src', `${data.url}`)
            }
        }
    }
    xhr.open('POST', url, true)
    var data = new FormData()
    data.append('upload_preset', key)
    data.append('tags', 'browser_upload')
    data.append('file', file)
    xhr.send(data)
})
//gọi thẻ theo tên
$('input[name= "ten"]').keyup(function () {
    $('.show_name').text(`${$('input[name= "ten"]').val()}`)
})
$('input[name= "bietdanh"]').keyup(function () {
    $('.show_nick_name').text(`${$('input[name= "bietdanh"]').val()}`)
})
$('input[name= "tieusu "]').keyup(function () {
    $('.det').text(`${$('input[name= "tieusu"]').val()}`)
})
$('input[name= "email"]').keyup(function () {
    $('.det1').text(`${$('input[name= "email"]').val()}`)
})
$('input[name= "phone"]').keyup(function () {
    $('.det2').text(`${$('input[name= "phone"]').val()}`)
})
document.addEventListener('DOMContentLoaded', function (){
    if($('img').src === ""){
        alert(1)
    }
})