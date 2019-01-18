function basla(){
    $('#kayip').hide();
    $('#kayip2').hide();

    $('.kayit').hide();
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