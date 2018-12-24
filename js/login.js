//登陆界面的北京大小调整 height-》窗口高度
$(".login-bg").css("height", $(window).height());

$(window).resize(function() {
    //登陆界面的背景大小调整 height-》窗口高度
    $(".login-bg").css("height", $(window).height());
});

//点击signin打开登陆界面
$(".sign").click(function() {
    $(".login-bg").css({ "display": "block", "z-index": "999" });
    return false;
});
//关闭登陆界面
$(".login-remove").click(function() {
    $(".login-bg").css({
        "display": "none",
        "z-index": "-99",
    });
});

//提交失败
function failure() {
    alert("Error,please resubmit!");
}
//注册ajax
$(".signUp").click(function() {
    var form = {
        ID: $(".signID").val(),
        email: $(".signPwd").val()
    };
    // $.ajax({
    //     url: 'http://118.89.46.176/api/suggestion',
    //     type: 'post',
    //     data: form,
    //     timeout: 5000,
    //     success: null,
    //     error: failure()
    // });
});
//登陆ajax
$(".signIn").click(function() {
    var form = {
        id: $(".signID").val(),
        password: $(".signPwd").val()
    };

    // var temp = $.ajax({
    //     url: 'http://118.89.46.176/api/login',
    //     type: 'get',
    //     data: form,
    //     success: function(data) {
    //         if ("\"success\"" == data) {
    //             window.open("https://www.baidu.com", "_self");
    //         } else if ("\"failure\"" == data) {
    //             failure();
    //         }
    //         $(".login-form")[0].reset();
    //     },
    //     error: function() {
    //         failure();
    //         $(".login-form")[0].reset();
    //     }
    // });
});