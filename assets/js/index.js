$(function () {
    
    // 实现退出功能
    var layer = laui.layer;
    //点击按钮，实现退出
    $('#btnLogout').on('click', function () {
        //提示用户是否确认退出

        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            //1 清空本地储存中的 token
            localStorage.removeItem('token');
            // 2.重新跳转到登录页面
            location.href = "/login.html";
            layer.close(index);
        });
    });
  




})
// 获取用户的基本信息