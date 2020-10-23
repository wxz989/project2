$(function(){
    let arr1 = [false,false];
    let arr2 = [false,false];
// 手机验证
    // 输入手机号码框
    $('.mobile').blur(function(){
        let re = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(re.test($(this).val())){
            arr1[0] = true;
            $('.text-tip').eq(0).text('手机号正确');
            $('.text-tip').eq(0).css('color','green');
        }else{
            arr1[0] = false;
            $('.text-tip').eq(0).text('手机号格式不正确');
        }
        let unumbers = $(this).val();
        // 获取cookie
        let cookie_STR = $.cookie('users') ? $.cookie('users') : '';
        //转为对象
        let cookie_OBJ = convertStrToObj(cookie_STR);
        // 判断cookie中是否存在当前手机号
        if(unumbers in cookie_OBJ){
            $('.text-tip').eq(0).text('手机号已存在');
            $('.text-tip').eq(0).css('color','red');
            return;
        }
    }) 
    // 图形验证码
    $('.subfix').blur(function(){
        if($(this).val() == 'u2u3'){
            arr1[1] = true;
            $('.text-tip').eq(1).text('图形验证码正确');
            $('.text-tip').eq(1).css('color','green');
        }else{
            arr1[1] = false;
            $('.text-tip').eq(1).text('图形验证码不正确');
        }
    })
// 手机验证 end

// 设置登录密码
    // 设置密码
    $('.pwd').blur(function(){
        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        if(re.test($(this).val())){
            arr2[0] = true;
            $('.text-tip').eq(4).text('密码格式符合规则');
            $('.text-tip').eq(4).css('color','green');
        }else{
            arr2[0] = false;
            $('.text-tip').eq(4).text('密码应大于6位并少于18位的数字字母组合');
        }
    })
    // 确认密码
    $('.confirm-pwd').keyup(function(){
        if($(this).val() === $('.pwd').val()){
            arr2[1] = true;
            $('.text-tip').eq(5).text('密码一致');
            $('.text-tip').eq(5).css('color','green');
        }else{
            arr2[1] = false;
            $('.text-tip').eq(5).text('两次输入密码不一致，请重新输入');
        }
    })
// 设置登录密码 end

    $('#check').click(()=>{
        if(arr1.indexOf(false) === -1){
            $('.next-btn').removeAttr('disabled');
            $('.next-btn').css({
                "background" : "#e4393c",
                "color" : "#fff"
            }).click(function(){
                $('.step1').addClass('hidden');
                $('.step2').css('display','block');
                $('.progressbar').eq(0).removeClass('active');
                $('.progressbar').eq(1).addClass('active');
            })
            
        }        
    })

  
    $('.submit-btn').mouseenter(function(){
        if(arr2.indexOf(false) === -1){
            $('.submit-btn').removeAttr('disabled');
            $('.submit-btn').css({
                "background" : "#e4393c",
                "color" : "#fff"
            }).click(function(){
                $('.step2').css('display','none');
                $('.step3').css('display','block');
                $('.progressbar').eq(1).removeClass('active');
                $('.progressbar').eq(2).addClass('active');

         // 将数据存入cookie
                let unumber = $('.mobile').val();
                let upwd = $('.pwd').val();
                // 获取cookie
                let cookie_str = $.cookie('users') ? $.cookie('users') : '';
                //转为对象
                let cookie_obj = convertStrToObj(cookie_str);
                // 判断cookie中是否存在当前手机号
                if(unumber in cookie_obj){
                    alert('此号码已存在');
                    return;
                }else{
                    cookie_obj[unumber] = upwd;
                }
                // 加入cookie
                $.cookie('users',JSON.stringify(cookie_obj),{expires : 2,path : '/'});
        })
        }
        
    })
        
})
