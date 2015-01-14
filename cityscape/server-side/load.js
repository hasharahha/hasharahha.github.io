
try{
var socket = dojox.socket("http://hasharahha.github.io/cityscape/main.html");
socket.on("message", function(e){
 static = event.data;
 JSON.parse(static);
 data = static;
});
}catch(e){
 alert(e);
}
