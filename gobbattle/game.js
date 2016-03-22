var game = {version:"0.1.4"};
var engine = document.getElementById("game").getContext("2d");
var player = {x:0, y:0, height: 42, width:42, health:100, speed:1.5, spriteX:0, spriteY:0 };
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
 if(keys[38]){ player.y -=player.speed; player.spriteX=0;}
 if(keys[40]){ player.y +=player.speed; player.spriteX=84;}
 if(keys[37]){ player.x -=player.speed; player.spriteX=148;}
 if(keys[39]){ player.x +=player.speed; player.spriteX=48;}
}



function gameUpdate(){
  engine.clearRect(0,0, 1000, 1000);
  engine.drawImage(player_sprite, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.width, player.height);
  Keys();
}
setInterval(function(){
 gameUpdate();
}, 10);


console.log("Current version: "+game.version);
