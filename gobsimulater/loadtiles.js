var tilecanvas = document.getElementById("tiles");
var set = tilecanvas.getContext("2d");
var statictiles;
var tileset = new Image();
tileset.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";

var tiles ={
  o1: ["0, 0", 0, 0, 32, 32, 0, 0, 42, 42, "GRASS"],
  o2: ["1, 0", 0, 0, 32, 32, 42, 0, 42, 42, "GRASS"],
  o3: ["2, 0", 32, 0, 32, 32, 84, 0, 42, 42, "SOUL_GRASS"],
  o4: ["3, 0", 0, 96, 32, 32, 126, 0, 42, 42, "SOUL_SAND"],
  o5: ["4, 0", 0, 96, 32, 32, 168, 0, 42, 42, "SOUL_SAND"],
  o6: ["5, 0", 0, 96, 32, 32, 210, 0, 42, 42, "SOUL_SAND"],
  o7: ["6, 0", 0, 96, 32, 32, 252, 0, 42, 42, "SOUL_SAND"],
  o8: ["7, 0", 32, 0, 32, 32, 294, 0, 42, 42, "SOUL_GRASS"],
  o9: ["8, 0", 0, 0, 32, 32, 336, 0, 42, 42, "GRASS"],
  o10: ["9, 0", 0, 0, 32, 32, 378, 0, 42, 42, "GRASS"],
  o11: ["10, 0", 0, 0, 32, 32, 420, 0, 42, 42, "GRASS"],
  o12: ["11, 0", 0, 0, 32, 32, 462, 0, 42, 42, "GRASS"],
  o13: ["12, 0", 0, 0, 32, 32, 504, 0, 42, 42, "GRASS"],
  o14: ["13, 0", 0, 0, 32, 32, 546, 0, 42, 42, "GRASS"],
  o15: ["14, 0", 0, 0, 32, 32, 588, 0, 42, 42, "GRASS"],
  o16: ["15, 0", 224, 0, 32, 32, 630, 0, 42, 42, "SAND_SOUL"],
  o17: ["16, 0", 192, 0, 32, 32, 672, 0, 42, 42, "SAND"],
  o18: ["17, 0", 192, 0, 32, 32, 709, 0, 42, 42, "SAND"],
  o19: ["18, 0", 192, 0, 32, 32, 751, 0, 42, 42, "SAND"],
  o20: ["19, 0", 192, 0, 32, 32, 793, 0, 42, 42, "SAND"],
  o21: ["20, 0", 192, 0, 32, 32, 835, 0, 42, 42, "SAND"],
  o22: ["21, 0", 192, 0, 32, 32, 877, 0, 42, 42, "SAND"],
  o23: ["22, 0", 192, 0, 32, 32, 919, 0, 42, 42, "SAND"],
  o24: ["23, 0", 192, 0, 32, 32, 961, 0, 42, 42, "SAND"],
  o25: ["24, 0", 192, 0, 32, 32, 1003, 0, 42, 42, "SAND"],
  o26: ["25, 0", 192, 0, 32, 32, 1045, 0, 42, 42, "SAND"],
  o27: ["25, 0", 192, 0, 32, 32, 1045, 0, 42, 42, "SAND"],
  testtile: ["? ?", 0, 0, 32, 32, 1045, 0, 32, 32, "GRASS"]
};

tileset.onload = function(){
  set.drawImage(tileset, tiles.o1[1], tiles.o1[2], tiles.o1[3], tiles.o1[4], tiles.o1[5], tiles.o1[6], tiles.o1[7], tiles.o1[8]);
  set.drawImage(tileset, tiles.o2[1], tiles.o2[2], tiles.o2[3], tiles.o2[4], tiles.o2[5], tiles.o2[6], tiles.o2[7], tiles.o2[8]);  
  set.drawImage(tileset, tiles.o3[1], tiles.o3[2], tiles.o3[3], tiles.o3[4], tiles.o3[5], tiles.o3[6], tiles.o3[7], tiles.o3[8]);  
  set.drawImage(tileset, tiles.o4[1], tiles.o4[2], tiles.o4[3], tiles.o4[4], tiles.o4[5], tiles.o4[6], tiles.o4[7], tiles.o4[8]);  
  set.drawImage(tileset, tiles.o5[1], tiles.o5[2], tiles.o5[3], tiles.o5[4], tiles.o5[5], tiles.o5[6], tiles.o5[7], tiles.o5[8]); 
  set.drawImage(tileset, tiles.o6[1], tiles.o6[2], tiles.o6[3], tiles.o6[4], tiles.o6[5], tiles.o6[6], tiles.o6[7], tiles.o6[8]); 
  set.drawImage(tileset, tiles.o7[1], tiles.o7[2], tiles.o7[3], tiles.o7[4], tiles.o7[5], tiles.o7[6], tiles.o7[7], tiles.o7[8]); 
  set.drawImage(tileset, tiles.o8[1], tiles.o8[2], tiles.o8[3], tiles.o8[4], tiles.o8[5], tiles.o8[6], tiles.o8[7], tiles.o8[8]); 
  set.drawImage(tileset, tiles.o9[1], tiles.o9[2], tiles.o9[3], tiles.o9[4], tiles.o9[5], tiles.o9[6], tiles.o9[7], tiles.o9[8]); 
  set.drawImage(tileset, tiles.o10[1], tiles.o10[2], tiles.o10[3], tiles.o10[4], tiles.o10[5], tiles.o10[6], tiles.o10[7], tiles.o10[8]); 
  set.drawImage(tileset, tiles.o11[1], tiles.o11[2], tiles.o11[3], tiles.o11[4], tiles.o11[5], tiles.o11[6], tiles.o11[7], tiles.o11[8]); 
  set.drawImage(tileset, tiles.o12[1], tiles.o12[2], tiles.o12[3], tiles.o12[4], tiles.o12[5], tiles.o12[6], tiles.o12[7], tiles.o12[8]); 
  set.drawImage(tileset, tiles.o13[1], tiles.o13[2], tiles.o13[3], tiles.o13[4], tiles.o13[5], tiles.o13[6], tiles.o13[7], tiles.o13[8]); 
  set.drawImage(tileset, tiles.o14[1], tiles.o14[2], tiles.o14[3], tiles.o14[4], tiles.o14[5], tiles.o14[6], tiles.o14[7], tiles.o14[8]); 
  set.drawImage(tileset, tiles.o15[1], tiles.o15[2], tiles.o15[3], tiles.o15[4], tiles.o15[5], tiles.o15[6], tiles.o15[7], tiles.o15[8]); 
  set.drawImage(tileset, tiles.o16[1], tiles.o16[2], tiles.o16[3], tiles.o16[4], tiles.o16[5], tiles.o16[6], tiles.o16[7], tiles.o16[8]); 
  set.drawImage(tileset, tiles.o17[1], tiles.o17[2], tiles.o17[3], tiles.o17[4], tiles.o17[5], tiles.o17[6], tiles.o17[7], tiles.o17[8]); 
  set.drawImage(tileset, tiles.o18[1], tiles.o18[2], tiles.o18[3], tiles.o18[4], tiles.o18[5], tiles.o18[6], tiles.o18[7], tiles.o18[8]); 
  set.drawImage(tileset, tiles.o19[1], tiles.o19[2], tiles.o19[3], tiles.o19[4], tiles.o19[5], tiles.o19[6], tiles.o19[7], tiles.o19[8]); 
  set.drawImage(tileset, tiles.o20[1], tiles.o20[2], tiles.o20[3], tiles.o20[4], tiles.o20[5], tiles.o20[6], tiles.o20[7], tiles.o20[8]); 
  set.drawImage(tileset, tiles.o21[1], tiles.o21[2], tiles.o21[3], tiles.o21[4], tiles.o21[5], tiles.o21[6], tiles.o21[7], tiles.o21[8]); 
  set.drawImage(tileset, tiles.o22[1], tiles.o22[2], tiles.o22[3], tiles.o22[4], tiles.o22[5], tiles.o22[6], tiles.o22[7], tiles.o22[8]); 
  set.drawImage(tileset, tiles.o23[1], tiles.o23[2], tiles.o23[3], tiles.o23[4], tiles.o23[5], tiles.o23[6], tiles.o23[7], tiles.o23[8]); 
  set.drawImage(tileset, tiles.o24[1], tiles.o24[2], tiles.o24[3], tiles.o24[4], tiles.o24[5], tiles.o24[6], tiles.o24[7], tiles.o24[8]); 
  set.drawImage(tileset, tiles.o25[1], tiles.o25[2], tiles.o25[3], tiles.o25[4], tiles.o25[5], tiles.o25[6], tiles.o25[7], tiles.o25[8]); 
  set.drawImage(tileset, tiles.o26[1], tiles.o26[2], tiles.o26[3], tiles.o26[4], tiles.o26[5], tiles.o26[6], tiles.o26[7], tiles.o26[8]); 
  set.drawImage(tileset, tiles.o27[1], tiles.o27[2], tiles.o27[3], tiles.o27[4], tiles.o27[5], tiles.o27[6], tiles.o27[7], tiles.o27[8]); 



  set.drawImage(tileset, tiles.testTile27[1], tiles.testTile[2], tiles.testTile[3], tiles.testTile[4], tiles.testTile[5], tiles.testTile[6], tiles.testTile[7], tiles.testTile[8]); 

};
