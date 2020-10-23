$(function(){
    $('header').load('public.html .logo');
    $('.log-footer').load('public.html footer');

    $('.msg').click(function(){
        $(this).addClass('active');
        $('.pwd').removeClass('active');
        $('.account_tab').css('display','none');
        $('.mobile_tab').css('display','block');
        $('.remember_pwd').css('display','none');
    })
    $('.pwd').click(function(){
        $(this).addClass('active');
        $('.msg').removeClass('active');
        $('.account_tab').css('display','block');
        $('.mobile_tab').css('display','none');
        $('.remember_pwd').css('display','block');
    })

    $('.accountVerify').eq(0).blur(function(){
        if($(this).val() == ''){
            $('.error_hint').eq(0).html('帐号不能为空');
        }else{
            $('.error_hint').eq(0).html('');
        }
    })
    $('.password').blur(function(){
        if($(this).val() == ''){
            $('.error_hint').eq(1).html('密码不能为空');
        }else{
            $('.error_hint').eq(1).html('');
        }
    })

    // 密码登录
    $('.password').keyup(function(){
        $('#login_btn').css('background','#e4393c');
    })
    $('#login_btn').click(function(){
        let unumber = $('.accountVerify').eq(0).val();
        let upwd = $('.password').val();
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        // 转对象
        let cookie_obj = convertStrToObj(cookie_str);
        // 判断手机号是否存在
        if(unumber in cookie_obj){
            //判断密码是否正确
            if(upwd === cookie_obj[unumber]){
                alert('登录成功');
            }else{
                $('.error_hint').eq(1).html('密码错误');
                // $('.error_hint').eq(0).html('输入的帐号或密码错误，请重新输入');

            }
        }else{
            $('.error_hint').eq(0).html('输入的帐号或密码错误，请重新输入');
        }

    })
})