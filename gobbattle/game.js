var engine = document.getElementById("game").getContext("2d");
var player = { postion:{ x:0, y:0 }, height: 50, width:50, health:100 };
var keys =[];
window.addEventListener('keydown', function(e){
 keys[e.keyCode]=true;
 alert("Key pressed:"+e.keyCode);
}, false);
window.addEventListener('keyup', function(e){
 keys[e.keyCode]=true;
}, false);

function Keys(){
 
}

function gameUpdate(){
  engine.clear();
  engine.fillRect(player.position.x, player.position.y, player.height, player.width);
}
