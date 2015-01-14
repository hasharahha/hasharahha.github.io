var errors =" "
try{
var socket = dojox.socket("/main.html");
socket.on("message", function(e){
 static = event.data;
 JSON.parse(static);
 data = static;
});
}catch(e){
 console.log("There was a problem with server: \n"+e);
 errors +=e;
}
