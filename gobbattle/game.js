var game = {version:"0.0.1"};
var engine = document.getElementById("game").getContext("2d");
var player = {x:0, y:0, height: 50, width:50, health:100, speed:10 };
var keys =[];
window.addEventListener('keydown', function(e){
 keys[e.keyCode]=true;
}, false);
window.addEventListener('keyup', function(e){
 keys[e.keyCode]=false;
}, false);

function Keys(){
 if(keys[38]){
  player.y -=player.speed;
 }
 if(keys[40]){
  player.y +=player.speed;
 }
 if(keys[37]){
  player.x -=player.speed;
 }
 if(keys[39]){
  player.x +=player.speed;
 }
}



function gameUpdate(){
 Keys();
  engine.clearRect(0,0, 1000, 1000);
  engine.fillRect(player.x, player.y, player.height, player.width);
}
setInterval(function(){
 gameUpdate();
}, 100);
console.log("Current version: "+game.version);
