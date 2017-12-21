// 使画廊高度为浏览器窗口高度
$(".gallery-border").css("height", $(window).height());
galleryVetically();
//使画廊高度为浏览器窗口高度的响应式
$(window).resize(function() {
    // 使画廊高度为浏览器窗口高度
    $(".gallery-border").css("height", $(window).height());
    //画廊图片居中
    galleryVetically();
});
//设置关闭
$(".gallery-remove").click(function() {
    $(".gallery-border").css({ "display": "none" });
    return false;
});
//设置打开画廊
$(".openGallery").click(function() {
    $(".gallery-border").css({ "display": "block" });
    //更换照片
    selectRightImg(this);
    // 画廊图片居中
    galleryVetically();
    return false;
});
//更换照片
function selectRightImg(Obj) {
    var orign = $(Obj).find("img.orign-img").attr("src");
    $(".gallery-image").attr("src", orign);
}
//画廊图片垂直居中
function galleryVetically() {
    var win_height = $(".gallery-border").height(); //窗口高度
    var img_height = $(".gallery-image").height(); //图片高度
    if (win_height > img_height) {
        var temp = (win_height - img_height) / 2;
        $(".gallery-image").css("top", temp);
    } else {
        $(".gallery-image").css("top", 0);
    }
}