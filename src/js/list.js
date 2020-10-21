// 引入公共的部分
$(function(){
    // 头部
    $('header nav').load('public.html .header-nav');
    // logo图部分
    $('.main-logo').load('public.html .logo');
    // 购物车
    $('.main-cart').load('public.html .top-cart');
    // 页面底部
    $('.foot').load('public.html footer');
    // 回到顶部
    $('.top').load('public.html .toTop');
})