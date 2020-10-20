// 头部菜单固定定位
// $(function(){
    
// })


// bannner部分轮播及分类导航
//左侧分类导航
$(function(){
    $(window).on("scroll",function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>300){
            $("header").attr("style","display: block;");
        }
    });
    $('.category-option .cat-item').hover(function () { $(this).toggleClass('hover') })
    //图片轮播
    jQuery(".scroll-banner").slide({ mainCell: ".scroll-content", titCell: ".scroll-btn span", titOnClassName: "current", effect: "fold", autoPlay: true, delayTime: 500, interTime: 1000 });
})


