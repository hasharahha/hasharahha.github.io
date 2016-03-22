var game = {version:"0.2.2", tick:1000/30};
var engine = document.getElementById("game").getContext("2d");
var player = {x:0, y:0, height: 42, width:42, health:100, speed:5, spriteX:0, spriteY:0 };
var keys =[];
var player_sprite = new Image();
player_sprite.src="player.png";
player_sprite.onload = function(){ this.loaded=true; };
window.addEventListener('keydown', function(e){
 keys[e.keyCode]=true;
}, false);
window.addEventListener('keyup', function(e){
 keys[e.keyCode]=false;
}, false);

function Keys(){ // GOT TO LOVE THEM KEYS ^^ 
 if(keys[38]){ player.y -=player.speed; player.spriteY=0;}
 if(keys[40]){ player.y +=player.speed; player.spriteY=84;}
 if(keys[37]){ player.x -=player.speed; player.spriteY=126;}
 if(keys[39]){ player.x +=player.speed; player.spriteY=42;}
}



function renderUpdate(){
  engine.clearRect(0,0, 1000, 1000);
  engine.drawImage(player_sprite, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.width, player.height);
}
setInterval(function(){
 renderUpdate();
}, game.tick);

setInterval(function(){
 Keys();
}, 50);

console.log("Current version: "+game.version);
