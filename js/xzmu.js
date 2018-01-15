var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var lis =slide.getElementsByTagName("li");
    var arrow = document.querySelector("#arrow");
    var btn = document.querySelectorAll("#arrow a");
    //  存储了每个图片的信息
    var json = [
        {   //  1
            width:600,
            top:0,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:800,
            top:0,
            left:100,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:1000,
            top:0,
            left:250,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:800,
            top:0,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:600,
            top:0,
            left:850,
            opacity:20,
            zIndex:2
        }
    ];


      animate(lis[0],json[0])     
      animate(lis[1],json[1])     
      animate(lis[2],json[2])     
      animate(lis[3],json[3])     
      animate(lis[4],json[4])     

    // 初始化
    for(var i =0;i<lis.length;i++){
        animate(lis[i],json[i])      
    }

    // 让按钮出来
    wrap.onmouseover = function (){
        animate(arrow,{opacity:100}) 
    }

    wrap.onmouseout = function (){
        animate(arrow,{opacity: 0}) 
    }

    btn[0].onclick = function (){

      json.unshift(json.pop())
       for(var i =0;i<lis.length;i++){
            animate(lis[i],json[i])      
        }
    }

    btn[1].onclick = function (){

      json.push(json.shift())
       for(var i =0;i<lis.length;i++){
            animate(lis[i],json[i])      
        }
    }
