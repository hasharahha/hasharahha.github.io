var c = document.getElementById("terrain");
var context = c.getContext("2d");
var block = new Image();
block.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
var ax =0;
var ay =0;
var bx =0;
var by =0;
var cx =0;
var cy =0;

block.onload = function(){
  start();
}

c.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
}, false);

c.addEventListener("touchend", function(){
  click.x =0;
  click.y =0;
  player.spriteX =0;
  player.spriteY =0;
}, false);
var a;
function start(){
  for(a=0; a < 40; a++){
    ay = 400;
    context.drawImage(block, 0, 0, 32, 32, ax, ay, 32, 32);
    ax +=32;
    by = 432;
    context.drawImage(block, 32, 0, 32, 32, bx, by, 32, 32);
    bx +=32;
  }
}

