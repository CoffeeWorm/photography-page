var img_api = "http://118.89.46.176/api/face_list";
var img_url = "http://118.89.46.176/api/image?id=";
var comment_api = "http://118.89.46.176/api/suggestion_list";

//步骤一:创建异步对象
var ajax = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
ajax.open('get', img_api);
//步骤三:发送请求
ajax.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
ajax.onreadystatechange = function() {
    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
    if (ajax.readyState == 4 && ajax.status == 200) {
        var json = eval("(" + ajax.responseText + ")");
        //动态设置画廊图片
        setAlbumImg(json, img_url);
    }
}
//步骤一:创建异步对象
var ajax1 = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
ajax1.open('get', comment_api);
//步骤三:发送请求
ajax1.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
ajax1.onreadystatechange = function() {
    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
    if (ajax1.readyState == 4 && ajax1.status == 200) {
        var json = eval("(" + ajax1.responseText + ")");
        //动态设置评论
        setComment(json);
    }
}

//时间戳转换
function getLocalTime(timestamp) {
    var date = new Date(parseInt(timestamp));
    return (date.getMonth() + 1) + "/" +
        (date.getDate()) + "/" +
        (date.getFullYear());
}
//动态设置画廊图片
function setAlbumImg(img_json, url, num = 6) {
    for (var i = 0; i < num; i++) {
        var imgElement = document.getElementsByClassName("albumImg")[i];
        var imgIntroduce = document.getElementsByClassName("imgIntroduceContent")[i];
        try {
            imgElement.setAttribute("src", url + img_json[i].id);
            imgIntroduce.innerHTML = "<h4>" + img_json[i].introduce + "</h4>" + "<h5>" + getLocalTime(img_json[i].lastUpdate) + "</h5>";
        } catch (e) {
            console.log(e);
        }
    }
}

//动态设置评论
function setComment(comment_json) {
    for (var i = comment_json.length - 1, x = 1; i > comment_json.length - 4; i--,x++) {
        $("#comt").html(
            $("#comt").html() +
            '<div class="item"><h3>"' +
            comment_json[i].content +
            '"</h3><p>——' +
            comment_json[i].name +
            "</p></div>"
        );
        $("#dot").html($("#dot").html() + '<li data-target="#carousel-example-generic" data-slide-to="' + x + '" style="margin:0 3px;"></li>')
    }
}