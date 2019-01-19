var kutu=[
    {
        id: 1,
        resim: 'müzik.jpg',
        baslik: 'MÜZİK',
        bilgi:'Ben sizin için beat ve remixler yapabilirim. Kişiye özel besteler ve müzikler de yapabilirim.',
        fiyat: '65TL',
        isim: 'Furkan Yıldız',
        soyisim: '19.2.2019'

    },
    {
        id:2,
        resim: 'code.jpg',
        baslik: 'KODLAMA',
        bilgi:'Çok iyi kod yazabilirim. Öff varya efsaneyim bu işte beni alırsanız şirketiniz büyür, her türlü işi yaparım CSS HTML Java vs..',
        fiyat: '150TL',
        isim: 'Ahmet Yılmaz',
        soyisim: '21.12.2018'
    },
    {
        id:3,
        resim: 'translate.jpg',
        baslik: 'ÇEVİRİ',
        bilgi:'Çevirim çok iyidir. Evelallah büyükelçi olacak kadar yabancı dilim var. Bana ulaşın tüm metinlerinizi çevireyim.',
        fiyat: '50TL',
        isim: 'Nurullah Çalıkuşu',
        soyisim: '14.01.2019'
    },
    {
        id:4,
        resim: 'video.jpg',
        baslik: 'VİDEO DÜZENLEME',
        bilgi:'8 yıllık video tasarım tecrübem var. Belirli şirketlerle de yıllarca çalıştım. Montajlar ve efektler konusunda uzmanım.',
        fiyat: '220TL',
        isim: 'Kazım Soylu',
        soyisim: '09.01.2019'
    },
    {
        id:5,
        resim: 'video.jpg',
        baslik: 'OTHER 1',
        bilgi:'8 yıllık video tasarım tecrübem var. Belirli şirketlerle de yıllarca çalıştım. Montajlar ve efektler konusunda uzmanım.',
        fiyat: '220TL',
        isim: 'Kazım Soylu',
        soyisim: '09.01.2019'
    },
    {
        id:6,
        resim: 'video.jpg',
        baslik: 'OTHER 2',
        bilgi:'8 yıllık video tasarım tecrübem var. Belirli şirketlerle de yıllarca çalıştım. Montajlar ve efektler konusunda uzmanım.',
        fiyat: '220TL',
        isim: 'Kazım Soylu',
        soyisim: '09.01.2019'
    }
];
function basla(){
    $('#kayip').hide();
    $('#kayip2').hide();
    $('.kayit').hide();
    var myElem = document.getElementById("muzik");
    var myElem2 = document.getElementById("code");
    var myElem3 = document.getElementById("translate");
    var myElem4 = document.getElementById("video");
    var myElem5 = document.getElementById("other1");
    var myElem6 = document.getElementById("other2");
    
    var myInner = '';
    var myInner2='';
    var myInner3='';
    var myInner4='';
    var myInner5='';
    var myInner6='';

    myInner = myInner + '<img class="card-img-top" src="' + kutu[0].resim + '"/>';
    myInner = myInner + '<div class="card-body">';
    myInner = myInner + '<h5 class="card-title">' + kutu[0].baslik + '</h5>';
    myInner = myInner + '<p class="card-text">' + kutu[0].bilgi+ '</p>';
    myInner = myInner + '</div>';
    myInner = myInner + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[0].isim+ '</li><li class="list-group-item">' + kutu[0].soyisim+ '</li><li class="list-group-item">' + kutu[0].fiyat+ '</li></ul>';
    myInner = myInner + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem.innerHTML = myInner;

    myInner2 = myInner2 + '<img class="card-img-top" src="' + kutu[1].resim + '"/>';
    myInner2 = myInner2 + '<div class="card-body">';
    myInner2 = myInner2 + '<h5 class="card-title">' + kutu[1].baslik + '</h5>';
    myInner2 = myInner2 + '<p class="card-text">' + kutu[1].bilgi+ '</p>';
    myInner2 = myInner2 + '</div>';
    myInner2 = myInner2 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[1].isim+ '</li><li class="list-group-item">' + kutu[1].soyisim+ '</li><li class="list-group-item">' + kutu[1].fiyat+ '</li></ul>';
    myInner2 = myInner2 + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem2.innerHTML = myInner2;

    myInner3 = myInner3 + '<img class="card-img-top" src="' + kutu[2].resim + '"/>';
    myInner3 = myInner3 + '<div class="card-body">';
    myInner3 = myInner3 + '<h5 class="card-title">' + kutu[2].baslik + '</h5>';
    myInner3 = myInner3 + '<p class="card-text">' + kutu[2].bilgi+ '</p>';
    myInner3 = myInner3 + '</div>';
    myInner3 = myInner3 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[2].isim+ '</li><li class="list-group-item">' + kutu[2].soyisim+ '</li><li class="list-group-item">' + kutu[2].fiyat+ '</li></ul>';
    myInner3 = myInner3 + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem3.innerHTML = myInner3;

    myInner4 = myInner4 + '<img class="card-img-top" src="' + kutu[3].resim + '"/>';
    myInner4 = myInner4 + '<div class="card-body">';
    myInner4 = myInner4 + '<h5 class="card-title">' + kutu[3].baslik + '</h5>';
    myInner4 = myInner4 + '<p class="card-text">' + kutu[3].bilgi+ '</p>';
    myInner4 = myInner4 + '</div>';
    myInner4 = myInner4 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[3].isim+ '</li><li class="list-group-item">' + kutu[3].soyisim+ '</li><li class="list-group-item">' + kutu[3].fiyat+ '</li></ul>';
    myInner4 = myInner4 + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem4.innerHTML = myInner4;

    myInner5 = myInner5 + '<img class="card-img-top" src="' + kutu[4].resim + '"/>';
    myInner5 = myInner5 + '<div class="card-body">';
    myInner5 = myInner5 + '<h5 class="card-title">' + kutu[4].baslik + '</h5>';
    myInner5 = myInner5 + '<p class="card-text">' + kutu[4].bilgi+ '</p>';
    myInner5 = myInner5 + '</div>';
    myInner5 = myInner5 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[4].isim+ '</li><li class="list-group-item">' + kutu[4].soyisim+ '</li><li class="list-group-item">' + kutu[4].fiyat+ '</li></ul>';
    myInner5 = myInner5 + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem5.innerHTML = myInner5;

    myInner6 = myInner6 + '<img class="card-img-top" src="' + kutu[5].resim + '"/>';
    myInner6 = myInner6 + '<div class="card-body">';
    myInner6 = myInner6 + '<h5 class="card-title">' + kutu[5].baslik + '</h5>';
    myInner6 = myInner6 + '<p class="card-text">' + kutu[5].bilgi+ '</p>';
    myInner6 = myInner6 + '</div>';
    myInner6 = myInner6 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[5].isim+ '</li><li class="list-group-item">' + kutu[5].soyisim+ '</li><li class="list-group-item">' + kutu[5].fiyat+ '</li></ul>';
    myInner6 = myInner6 + '<div class="card-body"><button type="button" class="btn btn-primary">İlana Git</button></div>';
    myElem6.innerHTML = myInner6;



}





var sayacara=0;
var sayacgiris=0;
function ara(){
    if(sayacara==0){
    $('#kayip').show();
    $('#kayip2').show();


sayacara++;
}
else if(sayacara==1){
    $('#kayip').hide();
    $('#kayip2').hide();

    sayacara--;
}
}
function giris(){
    if(sayacgiris==0){
        $('.kayit').show();
    sayacgiris++;
    }
    else if(sayacgiris==1){
        $('.kayit').hide();
        sayacgiris--;
    }

}