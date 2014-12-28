var tilecanvas = document.getElementById("tiles");
var set = tilecanvas.getContext("2d");
var statictiles;
var tileset = new Image();
tileset.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";

var tiles ={
  o1: ["0, 0", 0, 0, 32, 32, 0, 0, 32, 32],
  o2: ["0, 1", 0, 0, 32, 32, 0, 42, 32, 32]
};
alert("tiles loaded");
tileset.onload = function(){
  set.drawImage(tileset, tiles.o1[1], tiles.o1[2], tiles.o1[3], tiles.o1[4], tiles.o1[5], tiles.o1[6], tiles.o1[7], tiles.o1[8]);
  set.drawImage(tileset, tiles.o2[1], tiles.o2[2], tiles.o2[3], tiles.o2[4], tiles.o2[5], tiles.o2[6], tiles.o2[7], tiles.o2[8]);  
};
