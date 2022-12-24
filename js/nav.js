$(function () {
    'use strict';

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
});