var terrain = document.getElementById("terrain");
var load = terrain.getContext("2d");
var blocks = new Image();
blocks.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
var height = 600;
var width =1200;
canvas.height = height;
canvas.width = width;
blocks.onload = function(){
start();
}
function start(){
  var i;
  var ax =0;
  var ay =0;
  for(i =0; i > 40; i++){
    ay =400;
    ax +=32;
   load.drawImage(blocks, 0, 0, 32, 32, ax, ay, 32, 32); 
  }
}
