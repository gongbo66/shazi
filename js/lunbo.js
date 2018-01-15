var arr = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"]
var btns = document.querySelectorAll("button");
var inps = document.querySelectorAll("input");
var img = document.querySelector("img");
var timer = null;
var n = 0;
    for(var i =0;i<btns.length;i++){
        btns[i].index = i;   
        btns[i].onmouseover = (function(a){
          return function (){
          clearInterval(timer)
              for(var i =0;i<btns.length;i++){
                btns[i].className = "";
                  }
                  btns[a].className = "bg"
                    img.src = arr[a]
              }
            })(i);
          
        btns[i].onmouseout = function (){
              timer = setInterval(fun,2000)
                n = this.index;
          }
        }

        inps[1].onclick = function (){
              change(true)
          }
        inps[0].onclick = function (){
              change(false)
          }
    
        function change(flag){
          if(flag){
              n++;
                if(n>3){n=0}
                  bg(n)
           }else{
               n--;
                if(n<0){n=3}
                  bg(n)
           }      
        }

        timer = setInterval(fun,2000)

       

        function bg(n){
          img.src = arr[n]
            for(var i =0;i<btns.length;i++){
              btns[i].className = "";

          }
         btns[n].className = "bg";
      }
       
         function fun(){
              n++;
                if(n>3){
              n=0
          }  
           bg(n);
        }
 
      inps[0].onmouseover =function (){
          clearInterval(timer)
      }
      inps[1].onmouseover =function (){
         clearInterval(timer)
      }
     inps[0].onmouseout =function (){
         timer = setInterval(fun,2000)
      }
      inps[1].onmouseout =function (){
         timer = setInterval(fun,2000)
     }




    