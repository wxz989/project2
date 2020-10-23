
//左侧分类导航
window.onload = function(){
    $(window).on("scroll",function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>600){
            $('header .header-nav').css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "z-index":"9999"
            });
            $('.hidden-header').css('display','block');
        }else{
            $('header .header-nav').css({
                "position":"relative",
            });
            $('.hidden-header').css('display','none');
        }
        if($(window).scrollTop()>800){
            $('.mod').css({
                "opacity" : "1",
                "transform" : "scale(1)"
            });
            // $('.toTop').css('display','block');
            $('.toTop').fadeIn("fast");
        }else{
            $('.mod').css({
                "opacity" : "0",
                "transform" : "scale(0.3)"
            });
            // $('.toTop').css('display','none');
            $('.toTop').fadeOut("fast");
        }
    });

    // 轮播图上的菜单栏
    $('.category-option .cat-item').hover(function () { $(this).toggleClass('hover') })
    //图片轮播
    jQuery(".scroll-banner").slide({ mainCell: ".scroll-content", titCell: ".scroll-btn span", titOnClassName: "current", effect: "fold", autoPlay: true, delayTime: 500, interTime: 1000 });

    // 每日精选tab切换
    $('.select-theme li').each(function(){
        $(this).hover(
            ()=>{
                $(this).find('.select-theme-item').addClass('default');
            },
            ()=>{
                $(this).find('.select-theme-item').removeClass('default');
                // $(this).find('.select-theme-item').css('display','none');
            }
        );
    });

    // 回到顶部
    $('.toTop').click(function(){
        $("body,html").animate({scrollTop:0},300);
    })

    // 链接公共的底部页面
    $('.foot').load('./pages/public.html footer');

}


