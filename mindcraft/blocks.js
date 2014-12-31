var terrain = document.getElementById("terrain");
var load = terrain.getContext("2d");
var blocks = new Image();
blocks.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
var height = 600;
var width =1200;
var x =0;
var y =0;
var a;
canvas.height = height;
canvas.width = width;
blocks.onload = function(){
for(a = 0; a < 40; a++){
y =400;
load.drawImage(blocks, 0, 0, 32, 32, x, y, 32, 32);
x +=32;
}
};
