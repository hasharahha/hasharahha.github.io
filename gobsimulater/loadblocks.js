//Block Configuration
var blockCanvas = document.getElementById("blocktiles");
var setb = blockCanvas.getContext("2d");
var rnd;
var blockpath ={};
var blocktile = new Image();
blocktile.src ="https://dl.dropboxusercontent.com/s/3qb4u8ws3ehqops/block_tiles.jpg"
blocktile.onload = function(){
setb.drawImage(blocktile, 160, 0, 32, 32, 64, 32, 32, 32);
setb.drawImage(blocktile, 192, 0, 32, 32, 64, 256, 32, 32);
};


