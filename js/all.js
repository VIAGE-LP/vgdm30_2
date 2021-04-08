$(document).ready(function () {
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });
    $('a[href="#sale"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#sale').offset().top,
        }, 600);
    });

    // $("#wh-call-to-action").removeAttr("wh-click");
    $("#wh-call-to-action").removeClass("wh-animation-in");
    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#lp_form').position().top;
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

$("#lp_form").ready(function () {
    //購物車下拉選單判斷預購
    $('select[data-category="內衣"][data-name="size-selector"], select[data-category="內衣"][name="color-selector"]').change(function (e) {
        e.preventDefault();
        var size_selector = document.querySelector('select[data-category="內衣"][data-name="size-selector"]').value;
        var color_selector = document.querySelector('select[data-category="內衣"][name="color-selector"]').value;
        var preorder_text = $('<span>', { text: '(預購)', style: 'color: red;' });
        $('.form-group > span').empty();
        if ((color_selector == "天空藍" && size_selector == "M") || (color_selector == "櫻花粉" && size_selector == "M") || (color_selector == "櫻花粉" && size_selector == "ML") || (color_selector == "櫻花粉" && size_selector == "SM") || (color_selector == "海軍藍" && size_selector == "M") || (color_selector == "薰衣草紫" && size_selector == "M") || (color_selector == "寧靜灰" && size_selector == "S") || (color_selector == "異色黑" && size_selector == "S") || (color_selector == "異色黑" && size_selector == "ML")) {
            $('select[data-category="內衣"][data-name="size-selector"]').parent().after(preorder_text);
        } else {
            $('.form-group > span').empty();
        }
    });
    // 天空藍：M
    // 櫻花粉：M、ML、SM
    // 海軍藍：M
    // 薰衣草紫：M
    // 寧靜灰: S
    // 異色黑: S、ML
});