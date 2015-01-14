
try{
var socket = dojox.socket("main.html");
socket.on("message", function(e){
 static = event.data;
 JSON.parse(static);
 data = static;
});
}catch(e){
 alert(e);
}
