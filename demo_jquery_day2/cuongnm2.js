

document.addEventListener('DOMContentLoaded',function (){

    $.ajax({
        url:'https://content.googleapis.com/youtube/v3/search?q=sieuxe&type=video&maxResults=28&part=snippet&key=AIzaSyAz3B0liM8uoOSdYOxWASg29arF300BiEI',
        dataType:'jsonp',
        success:function (data){
            for (let i = 0; i < data.items.length; i++) {
                $('#contentyoutube').append(` <div class="col-4">
        <img onclick="play(this.id)" id="${data.items[i].id.videoId}" src="${data.items[i].snippet.thumbnails.high.url}"> <br>
        <h2>${data.items[i].snippet.title}</h2>
    </div>`)
            }
        }
    })
    $('button').click(function (){
        $('#contentyoutube').html('')
        $.ajax({
            url:`https://content.googleapis.com/youtube/v3/search?q=${$('input').val()}&type=video&maxResults=28&part=snippet&key=AIzaSyAz3B0liM8uoOSdYOxWASg29arF300BiEI`,
            dataType:'jsonp',
            success:function (data){
                for (let i = 0; i < data.items.length; i++) {
                    if (i === 0){
                        $('iframe').attr('src',`https://www.youtube.com/embed/${data.items[0].id.videoId}`);
                    }
                    $('#contentyoutube').append(` <div class="col-4">
        <img onclick="play(this.id)" id="${data.items[i].id.videoId}" src="${data.items[i].snippet.thumbnails.high.url}"> <br>
        <h2>${data.items[i].snippet.title}</h2>
    </div>`)
                }
            }
        })
    })
})
function play(id){
    $('iframe').attr('src',`https://www.youtube.com/embed/$ {id}`);
}