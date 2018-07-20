/**
 * Created by Administrator on 2016/4/26.
 */
var CANVAS_WIDTH = 500 , CANVAS_HEIGHT = 500;
var mycanvas,context;



window.onload = function(){
  createCanvas();
   // drawRect();
    drawImage()
}
function createCanvas(){
    document.body.innerHTML = "<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\"height=\""+CANVAS_HEIGHT+"\"></canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawRect(){
    context.fillStyle="#d200d2";
   // context.rotate(45);
    context.translate(200,200);
    context.scale(2,0.5);
    context.fillRect(0,0,200,200);
}

function drawImage(){
    var img = new Image();
    img.onload = function(){
        context.drawImage(img,0,0)
    }
    img.src = "美女3.jpg"
}
