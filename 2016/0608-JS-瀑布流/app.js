/**
 * Created by Administrator on 2016/6/8.
 */
window.onload = function(){
   imgLocation("container","box")
    var imgData={"data":[{"src":"美女2.jpg"},{"src":"美女3.jpg"},{"src":"美女4.jpg"},{"src":"美女5.jpg"},{"src":"美女6.jpg"},{"src":"美女7.jpg"},{"src":"美女8.jpg"},{"src":"美女9.jpg"}]};
    window.onscroll = function(){
        if(checkFlag()){
                 var cparent = document.getElementById("container");
            for(var i=0;i<imgData.data.length;i++){
                var ccontent =document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boxing = document.createElement("div");
                boxing.className="box_img";
                ccontent.appendChild(boxing);
                var img = document.createElement("img");
                img.src = "img-美女/"+imgData.data[i].src;
                boxing.appendChild(img);
            }
            imgLocation("container","box")
        }
    }
}
function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChildnodes(cparent,"box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    //console.log(lastContentHeight);
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
   // console.log(scrollTop);
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    //console.log(lastContentHeight+":"+scrollTop+":"+pageHeight);
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
}

function imgLocation(parent,content){
    //将parent下所有的content全部取出
    //就是取出每一个box
    var cparent = document.getElementById(parent);
    var ccontent = getChildnodes(cparent,content);
    //console.log(ccontent);//显示打印16
    //console.log(ccontent.length);//直接打印16
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    //获得一排的个数
    cparent.style.cssText = "width:"+imgWidth*cols+"px;margin:0 auto";

    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<cols){
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            //console.log(BoxHeightArr[i]);//打印所有高度
        }else{
            var minHeight = Math.min.apply(null,BoxHeightArr);
            //console.log(minHeight);//打印最小高度
            var minIndex =getminheightLocation(BoxHeightArr,minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight+"px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}
function getminheightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]== minHeight){
            return i;
        }
    }
}
function getChildnodes(parent,content){
    var contentArr=[];
    var allcontent = parent.getElementsByTagName("*");
    for(var i =0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
           contentArr.push(allcontent[i]);
           //数组里面的push方法，向其末尾进行追加
        }
    }
    return contentArr;
}
//获得屏幕有多少个图片
//function imgLocation(parent,content){}
//将parent下所有的content全部取出
//var cparent = document.getElementById(parent);
