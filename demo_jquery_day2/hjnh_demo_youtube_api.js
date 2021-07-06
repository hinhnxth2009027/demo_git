

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'https://content.googleapis.com/youtube/v3/search?q=jquery&type=video&maxResults=30&part=snippet&key=AIzaSyC-1R0OFg7uqHuiyiTCYjQ2DdTJmheEozw',
        dataType: "jsonp",
        crossDomain: true,
        success: function (data) {
            for (let i = 0; i < data.items.length; i++) {
                $('#show_data_yiutube').append(`<div class="col-12 row items_video video_element">
                <div class="col-5">
                    <img onclick="choose_video(this.id)" id="${data.items[i].id.videoId}" class="thumbnail_video"
                         src="${data.items[i].snippet.thumbnails.high.url}">
                </div>
                <div class="title col-7">
                    <h4>${data.items[i].snippet.title}</h4>
                </div>
            </div>`)
            }
        },
    });

    $('button').click(function (){
        if ($('input').val().length < 1){
            alert('vui lòng nhập gì đó để tiếp tục')
        }else {
            $('#show_data_yiutube').html('')
            $.ajax({
                type: 'GET',
                url: `https://content.googleapis.com/youtube/v3/search?q=${$('input').val()}&type=video&maxResults=30&part=snippet&key=AIzaSyC-1R0OFg7uqHuiyiTCYjQ2DdTJmheEozw`,
                dataType: "jsonp",
                crossDomain: true,
                success: function (data) {
                    for (let i = 0; i < data.items.length; i++) {
                        if (i === 0){
                            $('#video').attr('src',`https://www.youtube.com/embed/${data.items[0].id.videoId}`)
                        }
                        $('#show_data_yiutube').append(`<div class="col-12 row items_video video_element">
                <div class="col-5">
                    <img onclick="choose_video(this.id)" id="${data.items[i].id.videoId}" class="thumbnail_video"
                         src="${data.items[i].snippet.thumbnails.high.url}">
                </div>
                <div class="title col-7">
                    <h4>${data.items[i].snippet.title}</h4>
                </div>
            </div>`)
                    }
                },
            });
        }
    })



});


function choose_video(id){
    $('#video').attr('src',`https://www.youtube.com/embed/${id}?autoplay=1`)
}