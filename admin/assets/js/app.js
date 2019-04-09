let token = docCookies.getItem("token");
if (!token) window.location.href = '/login/login.html';

$('#menu').ready(()=>{
    $('#menu').empty().load('../../common/menu.html');
});