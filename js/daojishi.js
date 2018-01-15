var txt = document.getElementsByTagName("input")
    var iNow = new Date();
    var iNew = new Date( 2018, 11, 6,  21,56,0  );
    var t = Math.floor(iNew - iNow)/1000;
   
    var sec =Math.floor(t%60); 
    var day =Math.floor(t/86400);
    var hou =Math.floor(t%86400/3600);
    var min =Math.floor(t%86400%3600/60);

     var dsq = null;
    dsq = setInterval(func,1000)
    function func(){

        sec--;
        if(sec<0){
            sec = 59;
            min--;
        }
        if(min<0){
            hou--;
            min=59;
        }
        if(hou<0){
            day--;
            hou=23;
        }
       txt[26].value = day;
       txt[27].value = addZero(hou);
       txt[28].value = min;
       txt[29].value = addZero(sec);
   
    }
    function addZero(a) {
      return a=a<10?"0"+a:a
    }
    

