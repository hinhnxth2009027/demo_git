document.addEventListener('DOMContentLoaded', function () {

    $('.avatar').change(function () {
        var file = this.files[0]
        var key = 'datgoodpoy'
        var url = `https://api.cloudinary.com/v1_1/datgutpoy/image/upload`
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function (){
            if (this.readyState === 4) {
                if (this.status === 200) {
                    var dataJson = JSON.parse(this.responseText)
                    $('.show_avatar').attr('src',`${dataJson.url}`)
                }
            }
        }
        xhr.open('POST', url, true)
        var data = new FormData()
        data.append('upload_preset',key)
        data.append('tags','browser_upload')
        data.append('file',file)
        xhr.send(data)
    })
    $('.chon_avatar').click(function () {
        $('.avatar').click()
    })
    $('.chon_cover_photo').click(function () {
        $('.cover_photo').click()
    })

    $('.cover_photo').change(function () {
        var file = this.files[0]
        var key = 'datgoodpoy'
        var url = `https://api.cloudinary.com/v1_1/datgutpoy/image/upload`
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function (){
            if (this.readyState === 4) {
                if (this.status === 200) {
                    var dataJson = JSON.parse(this.responseText)
                    $('.dat').attr('src',`${dataJson.url}`)
                }
            }
        }
        xhr.open('POST', url, true)
        var data = new FormData()
        data.append('upload_preset',key)
        data.append('tags','browser_upload')
        data.append('file',file)
        xhr.send(data)
    })



    var data_users = document.querySelectorAll('.form_user')
    data_users[0].onkeyup = function (){
        $('.show_name').html(data_users[0].value)
    }
    data_users[1].onkeyup = function (){
        $('.show_nick_name').html(data_users[1].value)
    }
    data_users[2].onkeyup = function (){
        $('.det1').html(data_users[2].value)
    }

    data_users[3].onkeyup = function (){
        $('.det2').html(data_users[3].value)
    }

    data_users[4].onkeyup = function (){
        $('.det3').html(data_users[4].value)
    }



})