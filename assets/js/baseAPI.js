$.ajaxPrefilter(function (options) {
    
options.url="http://ajax.frontend.itheima.net"+options.url


    if (options.url.indexOf('/my/')!==-1) {
        options.headers = {
            Authorization:localStorage.getItem('token')||''
        }
    }

    //全局同一挂在complete 回调函数
    options.complete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //   1.强制清 空 token
            localStorage.removeItem('token')
// 2.强制跳转到登陆页面
            location.href ='/login.html'
        }
    }
})