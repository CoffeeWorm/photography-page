    //调整首页大小至浏览器窗口高度
    $(".homepage").css("height", $(window).height());
    // 首页视差效果
    $(window).scroll(function() {
        $(".homepage").css("background-position-y", -$(window).scrollTop() / 8)
        return false;
    });
    $(window).resize(function() {
        //自动调整home高度 自适应高度
        $(".homepage").css("height", $(window).height());
    });
