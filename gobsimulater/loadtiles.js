var tilecanvas = document.getElementById("tiles");
var set = tilecanvas.getContext("2d");
var statictiles;
var tileset = new Image();
tileset.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";

var tiles ={
  o1: ["0, 0", 0, 0, 32, 32, 0, 0, 42, 42, "GRASS"],
  o2: ["1, 0", 0, 0, 32, 32, 42, 0, 42, 42, "GRASS"],
  o3: ["2, 0", 32, 0, 32, 32, 84, 0, 42, 42, "SOUL_GRASS"],
  o4: ["3, 0", 0, 96, 32, 32, 168, 0, 42, 42, "SOUL_SAND"],
  o5: ["3, 0", 0, 96, 32, 32, 210, 0, 42, 42, "SOUL_SAND"],
  o6: ["3, 0", 0, 96, 32, 32, 256, 0, 42, 42, "SOUL_SAND"],
  o7: ["3, 0", 0, 96, 32, 32, 294, 0, 42, 42, "SOUL_SAND"]
};

tileset.onload = function(){
  set.drawImage(tileset, tiles.o1[1], tiles.o1[2], tiles.o1[3], tiles.o1[4], tiles.o1[5], tiles.o1[6], tiles.o1[7], tiles.o1[8]);
  set.drawImage(tileset, tiles.o2[1], tiles.o2[2], tiles.o2[3], tiles.o2[4], tiles.o2[5], tiles.o2[6], tiles.o2[7], tiles.o2[8]);  
  set.drawImage(tileset, tiles.o3[1], tiles.o3[2], tiles.o3[3], tiles.o3[4], tiles.o3[5], tiles.o3[6], tiles.o3[7], tiles.o3[8]);  
  set.drawImage(tileset, tiles.o4[1], tiles.o4[2], tiles.o4[3], tiles.o4[4], tiles.o4[5], tiles.o4[6], tiles.o4[7], tiles.o4[8]);  
  set.drawImage(tileset, tiles.o5[1], tiles.o5[2], tiles.o4[3], tiles.o5[4], tiles.o5[5], tiles.o5[6], tiles.o5[7], tiles.o5[8]); 
  set.drawImage(tileset, tiles.o6[1], tiles.o6[2], tiles.o4[3], tiles.o6[4], tiles.o6[5], tiles.o6[6], tiles.o6[7], tiles.o6[8]); 
  set.drawImage(tileset, tiles.o7[1], tiles.o7[2], tiles.o4[3], tiles.o7[4], tiles.o7[5], tiles.o7[6], tiles.o7[7], tiles.o7[8]); 
};
