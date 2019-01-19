var kutu=[
    {
        id: 1,
        resim: 'müzik.jpg',
        baslik: 'MÜZİK',
        bilgi:'ses sanatçısıyım her türlü işi yaparım yeterki iş verin çok ihtiyacım var paraya sesim çok güzel',
        fiyat: '100tl',
        isim: 'furkan',
        soyisim: 'yıldız'

    },
    {
        id:2,
        resim: 'code.jpg',
        baslik: 'code',
        bilgi:'çok iyi kod yazarım öff varya efsaneyim bu işte beni alırsanız şirketiniz büyür her türlü işi yaparım css html java vs..',
        fiyat: '150tl',
        isim: 'ahmet',
        soyisim: 'yılmaz'
    }
];
function basla(){
    $('#kayip').hide();
    $('#kayip2').hide();
    $('.kayit').hide();
    var myElem = document.getElementById("muzik");
    var myElem2 = document.getElementById("code");

    var myInner = '';
    var myInner2='';
    myInner = myInner + '<img class="card-img-top" src="' + kutu[0].resim + '"/>';
    myInner = myInner + '<div class="card-body">';
    myInner = myInner + '<h5 class="card-title">' + kutu[0].baslik + '</h5>';
    myInner = myInner + '<p class="card-text">' + kutu[0].bilgi+ '</p>';
    myInner = myInner + '</div>';
    myInner = myInner + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[0].isim+ '</li><li class="list-group-item">' + kutu[0].soyisim+ '</li><li class="list-group-item">' + kutu[0].fiyat+ '</li></ul>';
    myInner = myInner + '<div class="card-body"><a href="#" class="card-link">profile git</a><a href="#" class="card-link">işe al</a></div>';
    myElem.innerHTML = myInner;
    myInner2 = myInner2 + '<img class="card-img-top" src="' + kutu[1].resim + '"/>';
    myInner2 = myInner2 + '<div class="card-body">';
    myInner2 = myInner2 + '<h5 class="card-title">' + kutu[1].baslik + '</h5>';
    myInner2 = myInner2 + '<p class="card-text">' + kutu[1].bilgi+ '</p>';
    myInner2 = myInner2 + '</div>';
    myInner2 = myInner2 + '<ul class="list-group list-group-flush"><li class="list-group-item">' + kutu[1].isim+ '</li><li class="list-group-item">' + kutu[1].soyisim+ '</li><li class="list-group-item">' + kutu[1].fiyat+ '</li></ul>';
    myInner2 = myInner2 + '<div class="card-body"><a href="#" class="card-link">profile git</a><a href="#" class="card-link">işe al</a></div>';
    myElem2.innerHTML = myInner2;

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