var tilecanvas = document.getElementById("tiles");
var set = tilecanvas.getContext("2d");
var statictiles;
var tileset = new Image();
tileset.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";

var tiles ={
  1: ["0, 0", 0, 0, 42, 42, 0, 0, 42, 42],
  2: ["0, 1", 0, 0, 42, 42, 0, 0, 42, 42]
};

tileset.onload = function(){
  set.drawImage(tileset, tiles.1[1], tiles.1[2], tiles.1[3], tiles.1[4], tiles.1[5], tiles.1[6], tiles.1[7], tiles.1[8]);
  set.drawImage(tileset, tiles.2[1], tiles.2[2], tiles.2[3], tiles.2[4], tiles.2[5], tiles.2[6], tiles.2[7], tiles.2[8]);  
};
