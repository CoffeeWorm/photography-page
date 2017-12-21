//page-scroll特效
$(".page-scroll").click(function() {
    //接收class为a-scroll中的href属性的值
    var href = $(this).attr("href");
    var targetPosition = $(href).offset().top;
    $('html,body').animate({ scrollTop: targetPosition }, 400);
    return false;
});