        var box = document.getElementById("box2");
        var uls = box.getElementsByTagName("ul")[0];
        var liss = box.getElementsByTagName("li");
     
        for (var i = 0; i < liss.length; i++) {
              liss[i].onmouseover = function () {
          for (var j = 0; j < liss.length; j++) {
                animate(liss[j], {"width": 100});      
              }  
              animate(this, {"width": 800});
            };
        }
            box.onmouseout = function () {
          for (var i = 0; i < liss.length; i++) {
              animate(liss[i], {"width":240});   
        };
      };
        function getStyle(obj, attr) {
          if (window.getComputedStyle) {
              return window.getComputedStyle(obj, null)[attr];
          } else {
              return obj.currentStyle[attr];
            }
          }

