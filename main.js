    sayac=0;
    function basla(){
        $('#kayip').hide();
    
    }
    function ara(){
      
        if(sayac==0){
       $('#kayip').show();
       sayac++;
    }
      else if(sayac==1){
          $('#kayip').hide();
          sayac--;
      }
    }
    
    
    
    