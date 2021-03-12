$(document).ready(function () {
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    // $("#wh-call-to-action").removeAttr("wh-click");
    $("#wh-call-to-action").removeClass("wh-animation-in");
    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#acs_lp_form').position().top;
        var width = $(window).width();

        if ((formTop <= (scrollPos + windowHeight / 2)) && (width <= 768)) {
            $("#fb-root").attr({
                style: "display: none;"
            });
            $("#wrapper img#line").attr({
                style: "display: block;"
            });
            $(".line_alert").attr({
                style: "display: block;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#fb-root").attr({
                style: "display: block;"
            });
        } 
    });
});