//Block Configuration
var blockCanvas = document.getElementById("blocktiles");
var setb = blockCanvas.getContext("2d");
var rnd;
var blockpath ={};
var blocktile = new Image();
blocktile.src ="https://dl.dropboxusercontent.com/s/3qb4u8ws3ehqops/block_tiles.jpg"
blocktile.onload = function(){
  drawblock();
};
/*
function chooseblock(){
  if(rnd < 100){
    var block ="BRICK";
    blockpath.x = randomWidth;
    blockpath.y = randomHeight;
    blockpath.spriteX =0;
    blockpath.spriteY =96;
    blockpath.height =32;
    blockpath.width =32;
    drawblock();
  }
}
*/

function drawblock(){
  setb.drawImage(blocktile, blockpath.spriteX, blockpath.spriteY, 32, 32, blockpath.x, blockpath.y, 32, 32);
}
function rndtick(){
  rnd = Math.floor(Math.random() *460);
  var randomWidth = Math.floor(Math.random()*860);
  var randomHeight = Math.floor(Math.random()*460);
}

setInterval(function(){
  rndtick();
}, 500);
