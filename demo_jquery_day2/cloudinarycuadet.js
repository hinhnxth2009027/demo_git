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
})