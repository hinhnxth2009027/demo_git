document.addEventListener('DOMContentLoaded', function () {
    // $('.avatar').change(function () {
    //     var file = this.files[0]
    //     var key = 'datgoodpoy'
    //     var url = `https://api.cloudinary.com/v1_1/datgutpoy/image/upload`
    //     var xhr = new XMLHttpRequest()
    //     xhr.onreadystatechange = function () {
    //         if (this.readyState === 4) {
    //             if (this.status === 200) {
    //                 var dataJson = JSON.parse(this.responseText)
    //                 $('.show_avatar').attr('src', `${dataJson.url}`)
    //             }
    //         }
    //     }
    //     xhr.open('POST', url, true)
    //     var data = new FormData()
    //     data.append('upload_preset', key)
    //     data.append('tags', 'browser_upload')
    //     data.append('file', file)
    //     xhr.send(data)
    // })
    $('.chon_avatar').click(function () {
        $('.avatar').click()
    })
    $('.chon_cover_photo').click(function () {
        $('.cover_photo').click()
    })

    // $('.cover_photo').change(function () {
    //     var file = this.files[0]
    //     var key = 'datgoodpoy'
    //     var url = `https://api.cloudinary.com/v1_1/datgutpoy/image/upload`
    //     var xhr = new XMLHttpRequest()
    //     xhr.onreadystatechange = function () {
    //         if (this.readyState === 4) {
    //             if (this.status === 200) {
    //                 var dataJson = JSON.parse(this.responseText)
    //                 $('.dat').attr('src', `${dataJson.url}`)
    //             }
    //         }
    //     }
    //     xhr.open('POST', url, true)
    //     var data = new FormData()
    //     data.append('upload_preset', key)
    //     data.append('tags', 'browser_upload')
    //     data.append('file', file)
    //     xhr.send(data)
    // })

    // var data_users = document.querySelectorAll('.form_user')
    // data_users[0].onkeyup = function () {
    //     $('.show_name').html(data_users[0].value)
    // }
    // data_users[1].onkeyup = function () {
    //     $('.show_nick_name').html(data_users[1].value)
    // }
    // data_users[2].onkeyup = function () {
    //     $('.det1').html(data_users[2].value)
    // }
    //
    // data_users[3].onkeyup = function () {
    //     $('.det2').html(data_users[3].value)
    // }
    //
    // data_users[4].onkeyup = function () {
    //     $('.det3').html(data_users[4].value)
    // }
    $('#dat').validate({
        rules: {
            Ten: {
                required: true,
                minlength: 5,
                maxlength: 10
            },
            Bietdanh: {
                required: true,
                minlength: 1,
                maxlength: 10
            },
            Tieusu: {
                required: true,
                minlength: 1,
                maxlength: 20
            },
            Email: {
                required: true,
                email: true
            },
            sdt: {
                required: true,
                minlength: 9,
                maxlength: 12,
            }
        },
        messages: {
            Ten: {
                required: 'Tên không được để trống',
                minlength: 'Tên khong nho hon 5 ky tu',
                maxlength: 'Tên khong lon hon 10 ky tu'
            },
            Bietdanh: {
                required: 'Biệt danh không được để trống',
                minlength: 'Biệt danh khong nho hon 1 ky tu',
                maxlength: 'Biệt danh khong lon hon 10 ky tu'
            },
            Tieusu: {
                required: 'Tiểu sử không được để trống',
                minlength: 'Tiểu sử khong nho hon 1 ky tu',
                maxlength: 'Tiểu sử khong lon hon 20 ky tu'
            },
            Email: {
                required: 'Điền email của bạn',
                email: 'Email la email'
            },
            sdt: {
                required: 'Nhập Số điện thoại',
                minlength: 'khong nho hon 9 ky tu',
                maxlength: 'khong lon hon 10 ky tu'
            }
        }
    })
    var key = 'datgoodpoy'
    var cloudname = 'datgutpoy'
    $('.avatar').change(function () {
        var file = this.files[0]
        var url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4){
                if (this.status === 200){
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
        var url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if (this.readyState === 4){
                if (this.status === 200){
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



    $('input[name="Ten"]').keyup(function () {
        $('.show_name').text(`${$('input[name="Ten"]').val()}`)
    })
    $('input[name="Bietdanh"]').keyup(function () {
        $('.show_nick_name').text(`${$('input[name="Bietdanh"]').val()}`)
    })
    $('input[name="Tieusu"]').keyup(function () {
        $('.det1').text(`${$('input[name="Tieusu"]').val()}`)
    })
    $('input[name="Email"]').keyup(function () {
        $('.det2').text(`${$('input[name="Email"]').val()}`)
    })
    $('input[name="sdt"]').keyup(function () {
        $('.det').text(`${$('input[name="sdt"]').val()}`)
    })

})