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
var dx =0;
var dy =0;
var ex =0;
var ey =0;

block.onload = function(){
  start();
  refresh();
}

c.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
  if(click.y < 400){
    click.y = click.y -=20;
    click.x = click.x -=10;
    context.drawImage(blocks, 448, 0, 32, 32, click.x, click.y, 32, 32);
  }
  
  
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
    cy = 464;
    context.drawImage(block, 64, 0, 32, 32, cx, cy, 32, 32);
    cx +=32;
    dy =496;
    context.drawImage(block, 64, 0, 32, 32, dx, dy, 32, 32);
    dx +=32;
    ey =528;
    context.drawImage(block, 64, 0, 32, 32, ex, ey, 32, 32);
    ex +=32;
  }
  setTimeout(function(){
    //loads ore's 
    context.drawImage(block, 64, 0, 32, 32, 64, 496);
  }, 2000);
}

function refresh(){
 context.fillRect(lefbtn.x, leftbtn.y, leftbtn.width, leftbtn.height);
 context.fillRect(rightbtn.x, rightbtn.y, rightbtn.width, rightbtn.height);
}
