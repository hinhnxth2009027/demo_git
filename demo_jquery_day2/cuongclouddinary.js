$('.chonavatar').click(function (){
    $('.avatar').click()
})
$('.choncover_photo').click(function (){
    $('.cover_photo').click()
})

// $('.avatar').change(function (){
//     var file = this.files[0]
//     var form_data = new FormData()
//     form_data.append('upload_preset ,key')
//     form_data.append('\'tags\',\'browser_upload\'')
//     form_data.append('file',file)
//     $.ajax({
//         type:'POST',
//         url:`https://api.cloudinary.com/v1_1/dgpsv30kz/image/upload`,
//         dataType:'jsonp',
//         data:form_data,
//         success:function (data){
//             alert(data)
//         }
//     })
//
// })

$('#validate_form').validate({
    rules:{
        name:{
            required:true,
            minlength:5,
            maxlength:20
        },
        nickname:{
            required: true,
            minlength: 5,
            maxlength: 10
        },
        story:{
            required: true,
            minlength: 10,
            maxlength: 50
        },
        email:{
            required: true,
            email:true

        },
        phone:{
            required: true,
            minlength: 9,
            maxlength: 12
        }
    },
    messages:{
        name:{
            required:' ten khong duoc de trong',
            minlength:'ten khong duoc nho hon 5 ky tu',
            maxlength:'ten vuot qua 20 ky tu'
        },
        nickname:{
            required: ' nick name khong duoc de trong',
            minlength: 'nick name khong duoc nho hon 5 ky tu',
            maxlength: 'nick name vuot qua 20 ky tu'
        },
        story:{
            required: ' story khong duoc de trong',
            minlength: 'story khong duoc nho hon 10 ky tu',
            maxlength: 'story vuot qu 50 ky tu'
        },
        email:{
            required: ' email khong duoc de trong',
            email:'email sai dinh dang'
        },
        phone:{
            required: ' phone khong duoc de trong',
            minlength: 'so dien thoai khong duoc nho hon 9',
            maxlength: 'so dien thoai vuot qua 12'
        }
    }
})
var cloudname = 'dgpsv30kz'
var key = 'NguyenManhCuong'
$('.avatar').change(function (){
    var file = this.files[0]
    var url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (this.readyState === 4){
            if (this.status === 200){
                var data = JSON.parse(this.responseText)
                $('.show_avatar').attr('src',`${data.url}`)
            }
        }
    }
    xhr.open('POST',url,true)
    var data = new FormData()
    data.append('upload_preset',key)
    data.append('tags','browser_upload')
    data.append('file',file)
    xhr.send(data)
})
$('.cover_photo').change(function (){
    var file = this.files[0]
    var url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (this.readyState === 4){
            if (this.status === 200){
                var data = JSON.parse(this.responseText)
                $('.anhnen').attr('src',`${data.url}`)
            }
        }
    }
    xhr.open('POST',url,true)
    var data = new FormData()
    data.append('upload_preset',key)
    data.append('tags','browser_upload')
    data.append('file',file)
    xhr.send(data)
})
$('input[name="name"]').keyup(function (){
    $('.show_name').text(`${$('input[name="name"]').val()}`)
})
$('input[name="nickname"]').keyup(function (){
    $('.show_nick_name').text(`${$('input[name="nickname"]').val()}`)
})
$('input[name="story"]').keyup(function (){
    $('.show_story').text(`${$('input[name="story"]').val()}`)
})
$('input[name="email"]').keyup(function (){
    $('.show_email').text(`${$('input[name="email"]').val()}`)
})
$('input[name="phone"]').keyup(function (){
    $('.show_phone').text(`${$('input[name="phone"]').val()}`)
})


