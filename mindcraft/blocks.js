var c = document.getElementById("terrain");
var context = c.getContext("2d");
var block = new Image();
block.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
var ax =0;
var ay =0;

block.onload = function(){
  start();
}

var a;
function start(){
  for(a=0; a < 30; a++){
    ay = 500;
    context.drawImage(block, 0, 0, 32, 32, ax, ay, 32, 32);
    ax +=32;
  }
}
