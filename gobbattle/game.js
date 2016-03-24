var game = {version:"1.0.1", tick:50};
var engine = document.getElementById("game").getContext("2d");
var renderMap = document.getElementById("map").getContext("2d");
var player = {x:0, y:0, height: 42, width:42, health:100, speed:5, spriteX:0, spriteY:0 };
var keys =[];
var player_sprite = new Image(); player_sprite.src="player.png"; player_sprite.onload = function(){ this.loaded=true; };
var tileset = new Image(); tileset.src=map.image; tileset.onload=function(){ this.loaded=true};
window.addEventListener('keydown', function(e){ keys[e.keyCode]=true; }, false);
window.addEventListener('keyup', function(e){ keys[e.keyCode]=false; }, false);

function Keys(){ // GOT TO LOVE THEM KEYS ^^ 
 if(keys[38]){ player.y -=player.speed; player.spriteY=0;}
 if(keys[40]){ player.y +=player.speed; player.spriteY=84;}
 if(keys[37]){ player.x -=player.speed; player.spriteY=126;}
 if(keys[39]){ player.x +=player.speed; player.spriteY=42;}
}

function renderUpdate(){
 if(tileset.loaded){
  for(var y=0; y<map.data.length; y++){
   for(var x=0; x<map.data[y].length; x++){
    renderMap.drawImage(tileset, map.tile_id[0].x, map.tile_id[0].y, 32, 32, x*32, y*32, 32, 32);
    tileset.loaded=false;
   }
  }
 }
 
  engine.clearRect(0,0, 1000, 1000);
  engine.drawImage(player_sprite, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, 32,32);
 window.requestAnimationFrame(renderUpdate);
}

renderUpdate();
setInterval(function(){  Keys(); }, game.tick);

console.log("Current version: "+game.version);
