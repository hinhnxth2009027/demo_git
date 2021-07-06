document.addEventListener('DOMContentLoaded',function (){
    $.ajax({
        url:'https://content.googleapis.com/youtube/v3/search?q=Hello-world&type=video&maxResults=28&part=snippet&key=AIzaSyA2HK0zNPDbgLhH6N8ghg_bZ9LZqZlDpoM',
        dataType:'jsonp',
        success: function (data){
            for (let i = 0; i < data.items.length; i++) {
                $('#contentYoutube').append(`<div class="col-4">
        <img onclick="playVideo(this.id)" id="${data.items[i].id.videoId}" src="${data.items[i].snippet.thumbnails.high.url}" alt=""><br>
        <h2>${data.items[i].snippet.title}</h2>
    </div>`)
            }
        }
    })
    $('button').click(function (){
       $('#contentYoutube').html('')
        $.ajax({
            url:`https://content.googleapis.com/youtube/v3/search?q=${$('input').val()}&type=video&maxResults=28&part=snippet&key=AIzaSyA2HK0zNPDbgLhH6N8ghg_bZ9LZqZlDpoM`,
            dataType:'jsonp',
            success: function (data){
                for (let i = 0; i < data.items.length; i++) {
                    if(i === 0){
                        //attr là thay đổi thuộc tính
                        $('iframe').attr('src',`https://www.youtube.com/embed/${data.items[0].id.videoId}`)
                    }
                    $('#contentYoutube').append(`<div class="col-4">
        <img onclick="playVideo(this.id)" id="${data.items[i].id.videoId}" src="${data.items[i].snippet.thumbnails.high.url}" alt=""><br>
        <h2>${data.items[i].snippet.title}</h2>
    </div>`)
                }
            }
        })
    })
})
function playVideo(id){
    $('iframe').attr('src',`https://www.youtube.com/embed/${id}`);
}