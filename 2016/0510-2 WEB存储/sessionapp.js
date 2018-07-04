/**
 * Created by Administrator on 2016/5/10.
 */
var num = 0;
var tet;
var btn;
window.onload = function(){
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");
    if(sessionStorage.num){
        num = sessionStorage.num;
    }else{
        num = 0;
    }

    btn.onclick = function(){
        num++;
        sessionStorage.num = num;
        showNum();
    }
}
function showNum(){
    txt.innerHTML = num;
}
