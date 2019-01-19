

$(function () {

    $(".recommendation").hide();
    
    $(".nav .menu i").click(function () {
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".main>div").eq(i).show().siblings().hide();
    });

    $(".music-list .title-left i").click(function () {
        $(this).parents(".music-type").siblings().toggle();
        if($(this).hasClass("icon-icon-test")){
            $(this).removeClass("icon-icon-test").addClass("icon-you")
        }
        else {
            $(this).removeClass("icon-you").addClass("icon-icon-test")
        }
    });

    $(".operation").hide();
    $(".music-list .music-type>i").click(function () {
        $(".operation").show();
    });
    $(".background").click(function () {
        $(".operation").hide();
    })
});