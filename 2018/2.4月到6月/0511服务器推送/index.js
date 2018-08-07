/**
 * Created by Administrator on 2016/5/12.
 */
var serverData,statusDiv;
var SERVER_URL = "index.php";

window.onload = function(){
    serverData = document.getElementById("serverData");
    statusDiv = document.getElementById("statusDiv");
    startlistenServer()
}


function startlistenServer(){
    statusDiv.innerHTML = "start Connect Server...";
    var es = new EventSource(SERVER_URL);
    es.addEventLiener("newDate",newDateHandler);
    es.onopen = openHandler;
    es.onerror = errorHandler;
    es.onmessage = messageHandler;
}

function openHandler(e){
    statusDiv.innerHTML="Server open";
}
function errorHandler(e){
    statusDiv.innerHTML="Error";
}

function messageHandler(e){
    serverData.innerHTML = e.data;
}
function newDateHandler(e){
    serverData.innerHTML = e.data;
}