$('.chon_avatar').click(function () {
    $('.avatar').click()
})
$('.chon_cover_photo').click(function () {
    $('.cover_photo').click()
})
var cloudname = 'datgutpoy'
var key = 'datgoodpoy'
$('.avatar').change(function () {
var file = this.files[0]
    var form_data = new FormData()
    form_data.append('upload_preset',key)
    form_data.append('tags','browser_upload')
    form_data.append('file', file)
    $.ajax({
        type:'POST',
        url:`https://api.cloudinary.com/v1_1/datgutpoy/image/upload`,
        dataType:'jsonp',
        data:form_data,
        success: function (data) {
            alert(data)
        }})
})