$(function() {
    'use strict';

    //ヘッダーとフッターを表示
    $("header").load("header.html");
    $("footer").load("footer.html");

    //画面幅が834px未満の時、
    //メニューボタンをクリックしたら。
    $.ajax({
        type:'GET',
        url:'./header.html',
        dataType:'html'
      })
      .then(
          //通信成功時
          function(data){
            var ham_btn = $(".ham_btn");
            var nav = $("nav");
                   ham_btn.click(function () {
                ham_btn.toggleClass("show_nav");
                nav.toggle(300);
            });
        
            $(window).on("resize", function() {
                var winwid = $(window).outerWidth();
                if(winwid >= 834){
                    nav.css({"display":"block"});
                    ham_btn.removeClass("show_nav");
                } else {
                    nav.css({"display":"none"});
                    ham_btn.removeClass("show_nav");
                };
            });
        
          },
          //通信失敗時
          function(){
              //alert("読み込み失敗");
          }
      );

});
