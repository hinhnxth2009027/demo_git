// var imgs =['http://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00.jpg','https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-2.jpg','https://i.pinimg.com/originals/7b/77/fc/7b77fc7de7cbe9df1b9def672269aa15.jpg','https://i.imgur.com/fabcJBE.jpg','https://68.media.tumblr.com/62ae4472b05aff3a0cc7ec48d6f34277/tumblr_ouqdnbNtus1qadv0oo1_1280.jpg','https://keomoi.com/wp-content/uploads/2019/05/anh-gai-dep-de-thuong-hinh-14.jpg','https://lh3.googleusercontent.com/proxy/5Zna4TK4zJR6WCxnss-zOYn_kx5McDh0n2TnMSHMTNVmzh5bmqmRgfY5NI51Kv6oSLHuloRfkH2zm8MlP-Wuya_NmzgKB5B3oPb4AQPL6I4k9cAYR_qWTgiV8PoVq6fjJIhoWilmpmavcAUZBvwHiAcQVTI-32jG','https://static2.yan.vn/YanNews/2167221/202011/le-bong-la-ai-tieu-su-doi-tu-su-nghiep-cua-co-057d0b59-4eceb02c.png','https://thongcongnghethcm.net/uploads/lebong/le-bong-5.jpg','https://cdn.gametv.vn/gtv-photo/GTVNews/1615455235/api_cdn.gametv.vn-3a33a8c2c309cd1300eeac3ee8014cad.jpg']
// var div = document.querySelector('div')
// for (var i = 0; i < imgs.length; i++){
//     div.innerHTML += `<img onclick="display_none()" style="width: 200px; height: 400px; object-fit: cover" src="${imgs[i]}">`
// }
// function display_none(){
//     console.log(event.target.style.display = 'none')
// }

$('#validate').validate({
    rules: {
        fullname: {
            required: true,
            minlength: 5,
            maxlength: 20
        },      
      age:{
            required: true,
        },
        phone:{
            required:true,
            minLength: 9,
            maxlength: 12
        }
    },
    messages:{
        fullname:{
            required:'khong duoc de trong',
            minlength: 'khong duoc nho hon 5 ky tu',
            maxlength: 'khong duoc nhueu hon 20 ky tu',
        },
        age:{
            required:'khong duoc de trong',
        },
        phone:{
            required:'khong duoc de trong',
            minlength: 'khong duoc nho hon 9 ky tu',
            maxlength: 'khong duoc nhueu hon 12 ky tu',
        }
    }
})

$('#cuongvalidate').validate({
    rules:{
        fullname:{

            required:true,
            minlength: 5,
            maxlength: 20,
        },

        old: {
            required: true,
            number: true
        },
        phone: {
            required: true,
            minlength: 9,
            maxlength: 12,
        }
    },
    messages:{
        fullname: {
            required:'Khongduocdetrong',
            minlength: 'Ten khong duoc nho hon 5',
            maxlength: 'Ten khong duoc dai hon 20',
        },
        old: {
            required: 'Khongduocdetrong',
            number: 'Tuoi Phai La So'
        },
        phone: {
            required:'Khongduocdetrong',
            minlength: 'Sdt khong duoc nho hon 9',
            maxlength: 'Sdt khong duoc dai hon 12',
        }
    }
})

