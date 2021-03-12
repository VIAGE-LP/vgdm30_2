// jQuery 平滑回到顶端链接
$(function() {
  $("a.gotop").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
});