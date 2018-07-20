/**
 * Created by Administrator on 2016/4/30.
 */
var canvas;
var stage;
var txt;
var count =0;
window.onload = function() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    txt = new createjs.Text("变化的数字->", "20px Arial", "#d200d2");
    stage.addChild(txt);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", tick);
}
function tick(e){
    count++;
    txt.text = "变化的数字->"+count+"!";
    stage.update();

}
