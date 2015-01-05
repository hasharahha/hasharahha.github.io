var canvas = document.getElementById("world");
var ctx = canvas.getContext("2d");
canvas.height = 516;
canvas.width =1024;
var blocks = new Image();
alert("Generating terrain");
blocks.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
blocks.onload = function(){
  loop();
}
var terrain =[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0,0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 13,14, 0, 0, 0,0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0,0],
[15,15,15,15,15,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0,0,0],
[15, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,0, 0],
[15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1,0, 0],
[15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 3, 2, 2, 2,1, 0],
[15,15,15,15,15,15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2,2, 1],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 4, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 4, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];

function generateTerrain(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 for(var y = 0; y < terrain.length; y++){
 for(var x = 0; x < terrain[y].length; x++){
 if(terrain[y][x] ==1){
  ctx.drawImage(blocks, 0, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==2){
  ctx.drawImage(blocks, 32, 0, 32, 32, x*32, y*32, 32, 32); 
 }
 if(terrain[y][x] ==3){
   ctx.drawImage(blocks, 64, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==4){
   ctx.drawImage(blocks, 96, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==5){
   ctx.drawImage(blocks, 128, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==6){
   ctx.drawImage(blocks, 160, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==7){
   ctx.drawImage(blocks, 192, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==8){
   ctx.drawImage(blocks, 224, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==9){
   ctx.drawImage(blocks, 256, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==10){
   ctx.drawImage(blocks, 288, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==11){
   ctx.drawImage(blocks, 320, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==12){
   ctx.drawImage(blocks, 352, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==13){
   ctx.drawImage(blocks, 384, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==14){
   ctx.drawImage(blocks, 416, 0, 32, 32, x*32, y*32, 32, 32);
 }
 if(terrain[y][x] ==15){
   ctx.drawImage(blocks, 448, 0, 32, 32, x*32, y*32, 32, 32);
 }
 }
 }
}

function gravity(){
  try{
    if(terrain[Math.round(player.y/32) +1][Math.round(player.x/32)] ==0){
      player.y += player.weight;
    }
    if(terrain[Math.round(player.y/32)][Math.round(player.x/32)-1] >=1){
      player.x +=16;
    }
    if(terrain[Math.round(player.y/32)][Math.round(player.x/32)] >=1){
      player.x -=16;
    }
    
  }catch(e){
   error =e;
  }
}
function loop(){
  ctx.clearRect(0, 0, 3000, 512);
generateTerrain();
gravity();
window.requestAnimationFrame(function(){
loop();
}, 100);
}

setInterval(function(){
  ctx.translate(-32, 0);
  context.translate(-32, 0);
}, 10000);

function jump(){
  try{
    if(terrain[Math.round(player.y/32)+1][Math.round(player.x/32)] >= 1&&player.hunger > 3){
      player.y -= 75;
      player.hunger -=0.1;
    }
    if(terrain[Math.round(player.y/32)-1][Math.round(player.x/32)] >= 1&&player.hunger > 3){
      player.y -=32;
      player.hunger -=0.1;
    }
  }catch(e){
    error =e;
  }
}


setInterval(function(){
  if(player.health < 16){
  player.health +=0.5;
  player.hunger -=0.5;
}
}, 10000);
