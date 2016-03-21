var engine = document.getElementById("game").getContext("2d");
var player = { postion:{ x:0, y:0 }, height: 50, width:50, health:100, speed:10 };
var keys =[];
window.addEventListener('keydown', function(e){
 keys[e.keyCode]=true;
}, false);
window.addEventListener('keyup', function(e){
 keys[e.keyCode]=true;
}, false);

function Keys(){
 if(keys[38]){
  player.position.y -=player.speed;
 }
 if(keys[40]){
  player.position.y +=player.speed;
 }
 if(keys[37]){
  player.position.x -=player.speed;
 }
 if(keys[39]){
  player.position.x +=player.speed;
 }
}

function gameUpdate(){
  engine.clearRect(0,0, 1000, 1000);
  engine.fillRect(player.position.x, player.position.y, player.height, player.width);
}
setInterval(function(){
 gameUpdate();
}, 100);
