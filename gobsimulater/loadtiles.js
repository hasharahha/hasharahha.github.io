var tilecanvas = document.getElementById("tiles");
var set = tilecanvas.getContext("2d");
var statictiles;
var tileset = new Image();
tileset.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";

var tiles ={
  o1: ["0, 0", 0, 0, 32, 32, 0, 0, 32, 32, "GRASS"],
  o2: ["1, 0", 0, 0, 32, 32, 32, 0, 32, 32, "GRASS"],
  o3: ["2, 0", 32, 0, 32, 32, 64, 0, 32, 32, "SOUL_GRASS"],
  o4: ["3, 0", 0, 96, 32, 32, 96, 0, 32, 32, "SOUL_SAND"],
  o5: ["4, 0", 0, 96, 32, 32, 128, 0, 32, 32, "SOUL_SAND"],
  o6: ["5, 0", 0, 96, 32, 32, 160, 0, 32, 32, "SOUL_SAND"],
  o7: ["6, 0", 0, 96, 32, 32, 192, 0, 32, 32, "SOUL_SAND"],
  o8: ["7, 0", 32, 0, 32, 32, 224, 0, 32, 32, "SOUL_GRASS"],
  o9: ["8, 0", 0, 0, 32, 32, 256, 0, 32, 32, "GRASS"],
  o10: ["9, 0", 0, 0, 32, 32, 288, 0, 32, 32, "GRASS"],
  o11: ["10, 0", 0, 0, 32, 32, 320, 0, 32, 32, "GRASS"],
  o12: ["11, 0", 0, 0, 32, 32, 352, 0, 32, 32, "GRASS"],
  o13: ["12, 0", 0, 0, 32, 32, 384, 0, 32, 32, "GRASS"],
  o14: ["13, 0", 0, 0, 32, 32, 416, 0, 32, 32, "GRASS"],
  o15: ["14, 0", 0, 0, 32, 32, 448, 0, 32, 32, "GRASS"],
  o16: ["15, 0", 224, 0, 32, 32, 480, 0, 32, 32, "SAND_SOUL"],
  o17: ["16, 0", 192, 0, 32, 32, 512, 0, 32, 32, "SAND"],
  o18: ["17, 0", 192, 0, 32, 32, 544, 0, 32, 32, "SAND"],
  o19: ["18, 0", 192, 0, 32, 32, 576, 0, 32, 32, "SAND"],
  o20: ["19, 0", 192, 0, 32, 32, 608, 0, 32, 32, "SAND"],
  o21: ["20, 0", 192, 0, 32, 32, 640, 0, 32, 32, "SAND"],
  o22: ["21, 0", 192, 0, 32, 32, 672, 0, 32, 32, "SAND"],
  o23: ["22, 0", 192, 0, 32, 32, 704, 0, 32, 32, "SAND"],
  o24: ["23, 0", 192, 0, 32, 32, 736, 0, 32, 32, "SAND"],
  o25: ["24, 0", 192, 0, 32, 32, 768, 0, 32, 32, "SAND"],
  o26: ["25, 0", 192, 0, 32, 32, 800, 0, 32, 32, "SAND"],
  o27: ["26, 0", 192, 0, 32, 32, 832, 0, 32, 32, "SAND"],
  o28: ["27, 0", 224, 0, 32, 32, 864, 0, 32, 32, "SAND_SOUL"],
  o29: ["28, 0", 32, 0, 32, 32, 896, 0, 32, 32, "SOUL_GRASS"],
  o30: ["29, 0", 0, 0, 32, 32, 928, 0, 32, 32, "GRASS"],
  o31: ["30, 0", 0, 0, 32, 32, 960, 0, 32, 32, "GRASS"],
  o32: ["29, 0", 0, 0, 32, 32, 992, 0, 32, 32, "GRASS"], //Row 2 after this
  o33: ["1, 0", 0, 0, 32, 32, 0, 32, 32, 32, "GRASS"],
  o34: ["1, 1", 32, 0, 32, 32, 32, 32, 32, 32, "SOUL_GRASS"],
  o35: ["1, 2", 0, 96, 32, 32, 64, 32, 32, 32, "SOUL_SAND"],
  o36: ["1, 3", 0, 96, 32, 32, 96, 32, 32, 32, "SOUL_SAND"],
  o37: ["1, 4", 0, 96, 32, 32, 128, 32, 32, 32, "SOUL_SAND"],
  o38: ["1, 5", 0, 96, 32, 32, 160, 32, 32, 32, "SOUL_SAND"],
  o39: ["1, 6", 0, 96, 32, 32, 192, 32, 32, 32, "SOUL_SAND"],
  o40: ["1, 7", 0, 96, 32, 32, 224, 32, 32, 32, "SOUL_SAND"],
  o41: ["1, 8", 32, 0, 32, 32, 256, 32, 32, 32, "SOUL_GRASS"],
  o42: ["1, 9", 0, 0, 32, 32, 288, 32, 32, 32, "GRASS"],
  o43: ["1, 10", 0, 0, 32, 32, 320, 32, 32, 32, "GRASS"],
  o44: ["1, 11", 0, 0, 32, 32, 352, 32, 32, 32, "GRASS"],
  o45: ["1, 12", 0, 0, 32, 32, 384, 32, 32, 32, "GRASS"],
  o46: ["1, 13", 0, 0, 32, 32, 416, 32, 32, 32, "GRASS"],
  o47: ["1, 14", 0, 0, 32, 32, 448, 32, 32, 32, "GRASS"],
  o48: ["1, 15", 0, 0, 32, 32, 480, 32, 32, 32, "GRASS"],
  o49: ["1, 16", 224, 0, 32, 32, 512, 32, 32, 32, "SAND_SOUL"],
  o50: ["1, 17", 192, 0, 32, 32, 544, 32, 32, 32, "SAND"],
  o51: ["1, 18", 192, 0, 32, 32, 576, 32, 32, 32, "SAND"],
  o52: ["1, 19", 192, 0, 32, 32, 608, 32, 32, 32, "SAND"],
  o53: ["1, 20", 192, 0, 32, 32, 640, 32, 32, 32, "SAND"],
  o54: ["1, 21", 192, 0, 32, 32, 672, 32, 32, 32, "SAND"],
  o55: ["1, 22", 192, 0, 32, 32, 704, 32, 32, 32, "SAND"],
  o56: ["1, 23", 192, 0, 32, 32, 736, 32, 32, 32, "SAND"],
  o57: ["1, 24", 192, 0, 32, 32, 768, 32, 32, 32, "SAND"],
  o58: ["1, 25", 192, 0, 32, 32, 800, 32, 32, 32, "SAND"],
  o59: ["1, 26", 224, 0, 32, 32, 832, 32, 32, 32, "SAND_SOUL"],
  o60: ["1, 27", 0, 0, 32, 32, 864, 32, 32, 32, "GRASS"],
  o61: ["1, 28", 0, 0, 32, 32, 896, 32, 32, 32, "GRASS"],
  o62: ["1, 29", 0, 0, 32, 32, 928, 32, 32, 32, "GRASS"],
  o63: ["1, 30", 0, 0, 32, 32, 960, 32, 32, 32, "GRASS"],
  o64: ["1, 31", 0, 0, 32, 32, 992, 32, 32, 32, "GRASS"], //3rd row begins after this
  o65: ["2, 0", 0, 0, 32, 32, 0, 64, 32, 32, "GRASS"],
  o66: ["2, 1", 32, 0, 32, 32, 32, 64, 32, 32, "SOUL_GRASS"],
  o67: ["2, 2", 0, 96, 32, 32, 64, 64, 32, 32, "SOUL_SAND"],
  o68: ["2, 3", 0, 96, 32, 32, 96, 64, 32, 32, "SOUL_SAND"]
};

tileset.onload = function(){
  set.fillRect(0, 0, 1000, 500);
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
  set.drawImage(tileset, tiles.o28[1], tiles.o28[2], tiles.o28[3], tiles.o28[4], tiles.o28[5], tiles.o28[6], tiles.o28[7], tiles.o28[8]);  
  set.drawImage(tileset, tiles.o29[1], tiles.o29[2], tiles.o29[3], tiles.o29[4], tiles.o29[5], tiles.o29[6], tiles.o29[7], tiles.o29[8]);
  set.drawImage(tileset, tiles.o30[1], tiles.o30[2], tiles.o30[3], tiles.o30[4], tiles.o30[5], tiles.o30[6], tiles.o30[7], tiles.o30[8]);
  set.drawImage(tileset, tiles.o31[1], tiles.o31[2], tiles.o31[3], tiles.o31[4], tiles.o31[5], tiles.o31[6], tiles.o31[7], tiles.o31[8]);
  set.drawImage(tileset, tiles.o32[1], tiles.o32[2], tiles.o32[3], tiles.o32[4], tiles.o32[5], tiles.o32[6], tiles.o32[7], tiles.o32[8]);
  set.drawImage(tileset, tiles.o33[1], tiles.o33[2], tiles.o33[3], tiles.o33[4], tiles.o33[5], tiles.o33[6], tiles.o33[7], tiles.o33[8]);
  set.drawImage(tileset, tiles.o34[1], tiles.o34[2], tiles.o34[3], tiles.o34[4], tiles.o34[5], tiles.o34[6], tiles.o34[7], tiles.o34[8]);
  set.drawImage(tileset, tiles.o35[1], tiles.o35[2], tiles.o35[3], tiles.o35[4], tiles.o35[5], tiles.o35[6], tiles.o35[7], tiles.o35[8]);        
  set.drawImage(tileset, tiles.o36[1], tiles.o36[2], tiles.o36[3], tiles.o36[4], tiles.o36[5], tiles.o36[6], tiles.o36[7], tiles.o36[8]);              
  set.drawImage(tileset, tiles.o37[1], tiles.o37[2], tiles.o37[3], tiles.o37[4], tiles.o37[5], tiles.o37[6], tiles.o37[7], tiles.o37[8]);              
  set.drawImage(tileset, tiles.o38[1], tiles.o38[2], tiles.o38[3], tiles.o38[4], tiles.o38[5], tiles.o38[6], tiles.o38[7], tiles.o38[8]);              
  set.drawImage(tileset, tiles.o39[1], tiles.o39[2], tiles.o39[3], tiles.o39[4], tiles.o39[5], tiles.o39[6], tiles.o39[7], tiles.o39[8]);
  set.drawImage(tileset, tiles.o40[1], tiles.o40[2], tiles.o40[3], tiles.o40[4], tiles.o40[5], tiles.o40[6], tiles.o40[7], tiles.o40[8]);              
  set.drawImage(tileset, tiles.o41[1], tiles.o41[2], tiles.o41[3], tiles.o41[4], tiles.o41[5], tiles.o41[6], tiles.o41[7], tiles.o41[8]);              
  set.drawImage(tileset, tiles.o42[1], tiles.o42[2], tiles.o42[3], tiles.o42[4], tiles.o42[5], tiles.o42[6], tiles.o42[7], tiles.o42[8]);       
  set.drawImage(tileset, tiles.o43[1], tiles.o43[2], tiles.o43[3], tiles.o43[4], tiles.o43[5], tiles.o43[6], tiles.o43[7], tiles.o43[8]);
  set.drawImage(tileset, tiles.o44[1], tiles.o44[2], tiles.o44[3], tiles.o44[4], tiles.o44[5], tiles.o44[6], tiles.o44[7], tiles.o44[8]);  
  set.drawImage(tileset, tiles.o45[1], tiles.o45[2], tiles.o45[3], tiles.o45[4], tiles.o45[5], tiles.o45[6], tiles.o45[7], tiles.o45[8]);  
  set.drawImage(tileset, tiles.o46[1], tiles.o46[2], tiles.o46[3], tiles.o46[4], tiles.o46[5], tiles.o46[6], tiles.o46[7], tiles.o46[8]);  
  set.drawImage(tileset, tiles.o47[1], tiles.o47[2], tiles.o47[3], tiles.o47[4], tiles.o47[5], tiles.o47[6], tiles.o47[7], tiles.o47[8]); 
  set.drawImage(tileset, tiles.o48[1], tiles.o48[2], tiles.o48[3], tiles.o48[4], tiles.o48[5], tiles.o48[6], tiles.o48[7], tiles.o48[8]); 
  set.drawImage(tileset, tiles.o49[1], tiles.o49[2], tiles.o49[3], tiles.o49[4], tiles.o49[5], tiles.o49[6], tiles.o49[7], tiles.o49[8]); 
  set.drawImage(tileset, tiles.o50[1], tiles.o50[2], tiles.o50[3], tiles.o50[4], tiles.o50[5], tiles.o50[6], tiles.o50[7], tiles.o50[8]); 
  set.drawImage(tileset, tiles.o51[1], tiles.o51[2], tiles.o51[3], tiles.o51[4], tiles.o51[5], tiles.o51[6], tiles.o51[7], tiles.o51[8]); 
  set.drawImage(tileset, tiles.o52[1], tiles.o52[2], tiles.o52[3], tiles.o52[4], tiles.o52[5], tiles.o52[6], tiles.o52[7], tiles.o52[8]); 
  set.drawImage(tileset, tiles.o53[1], tiles.o53[2], tiles.o53[3], tiles.o53[4], tiles.o53[5], tiles.o53[6], tiles.o53[7], tiles.o53[8]); 
  set.drawImage(tileset, tiles.o54[1], tiles.o54[2], tiles.o54[3], tiles.o54[4], tiles.o54[5], tiles.o54[6], tiles.o54[7], tiles.o54[8]); 
  set.drawImage(tileset, tiles.o55[1], tiles.o55[2], tiles.o55[3], tiles.o55[4], tiles.o55[5], tiles.o55[6], tiles.o55[7], tiles.o55[8]); 
  set.drawImage(tileset, tiles.o56[1], tiles.o56[2], tiles.o56[3], tiles.o56[4], tiles.o56[5], tiles.o56[6], tiles.o56[7], tiles.o56[8]); 
  set.drawImage(tileset, tiles.o57[1], tiles.o57[2], tiles.o57[3], tiles.o57[4], tiles.o57[5], tiles.o57[6], tiles.o57[7], tiles.o57[8]); 
  set.drawImage(tileset, tiles.o58[1], tiles.o58[2], tiles.o58[3], tiles.o58[4], tiles.o58[5], tiles.o58[6], tiles.o58[7], tiles.o58[8]); 
  set.drawImage(tileset, tiles.o59[1], tiles.o59[2], tiles.o59[3], tiles.o59[4], tiles.o59[5], tiles.o59[6], tiles.o59[7], tiles.o59[8]); 
  set.drawImage(tileset, tiles.o60[1], tiles.o60[2], tiles.o60[3], tiles.o60[4], tiles.o60[5], tiles.o60[6], tiles.o60[7], tiles.o60[8]); 
  set.drawImage(tileset, tiles.o61[1], tiles.o61[2], tiles.o61[3], tiles.o61[4], tiles.o61[5], tiles.o61[6], tiles.o61[7], tiles.o61[8]); 
  set.drawImage(tileset, tiles.o62[1], tiles.o62[2], tiles.o62[3], tiles.o62[4], tiles.o62[5], tiles.o62[6], tiles.o62[7], tiles.o62[8]); 
  set.drawImage(tileset, tiles.o63[1], tiles.o63[2], tiles.o63[3], tiles.o63[4], tiles.o63[5], tiles.o63[6], tiles.o63[7], tiles.o63[8]); 
  set.drawImage(tileset, tiles.o64[1], tiles.o64[2], tiles.o64[3], tiles.o64[4], tiles.o64[5], tiles.o64[6], tiles.o64[7], tiles.o64[8]); 
  set.drawImage(tileset, tiles.o65[1], tiles.o65[2], tiles.o65[3], tiles.o65[4], tiles.o65[5], tiles.o65[6], tiles.o65[7], tiles.o65[8]); 
  set.drawImage(tileset, tiles.o66[1], tiles.o66[2], tiles.o66[3], tiles.o66[4], tiles.o66[5], tiles.o66[6], tiles.o66[7], tiles.o66[8]); 
  set.drawImage(tileset, tiles.o67[1], tiles.o67[2], tiles.o67[3], tiles.o67[4], tiles.o67[5], tiles.o67[6], tiles.o67[7], tiles.o67[8]); 
  set.drawImage(tileset, tiles.o68[1], tiles.o68[2], tiles.o68[3], tiles.o68[4], tiles.o68[5], tiles.o68[6], tiles.o68[7], tiles.o68[8]); 
  set.drawImage(tileset, tiles.o69[1], tiles.o69[2], tiles.o69[3], tiles.o69[4], tiles.o69[5], tiles.o69[6], tiles.o69[7], tiles.o69[8]);
  set.drawImage(tileset, tiles.o70[1], tiles.o70[2], tiles.o70[3], tiles.o70[4], tiles.o70[5], tiles.o70[6], tiles.o70[7], tiles.o70[8]);  
  set.drawImage(tileset, tiles.o71[1], tiles.o71[2], tiles.o71[3], tiles.o71[4], tiles.o71[5], tiles.o71[6], tiles.o71[7], tiles.o71[8]);
  set.drawImage(tileset, tiles.o72[1], tiles.o72[2], tiles.o72[3], tiles.o72[4], tiles.o72[5], tiles.o72[6], tiles.o72[7], tiles.o72[8]);
  set.drawImage(tileset, tiles.o73[1], tiles.o73[2], tiles.o73[3], tiles.o73[4], tiles.o73[5], tiles.o73[6], tiles.o73[7], tiles.o73[8]);
  set.drawImage(tileset, tiles.o74[1], tiles.o74[2], tiles.o74[3], tiles.o74[4], tiles.o74[5], tiles.o74[6], tiles.o74[7], tiles.o74[8]);
  set.drawImage(tileset, tiles.o75[1], tiles.o75[2], tiles.o75[3], tiles.o75[4], tiles.o75[5], tiles.o75[6], tiles.o75[7], tiles.o75[8]);
  set.drawImage(tileset, tiles.o76[1], tiles.o76[2], tiles.o76[3], tiles.o76[4], tiles.o76[5], tiles.o76[6], tiles.o76[7], tiles.o76[8]);
  set.drawImage(tileset, tiles.o77[1], tiles.o77[2], tiles.o77[3], tiles.o77[4], tiles.o77[5], tiles.o77[6], tiles.o77[7], tiles.o77[8]);        
  set.drawImage(tileset, tiles.o78[1], tiles.o78[2], tiles.o78[3], tiles.o78[4], tiles.o78[5], tiles.o78[6], tiles.o78[7], tiles.o78[8]);              
  set.drawImage(tileset, tiles.o79[1], tiles.o79[2], tiles.o79[3], tiles.o79[4], tiles.o79[5], tiles.o79[6], tiles.o79[7], tiles.o79[8]);              
  set.drawImage(tileset, tiles.o80[1], tiles.o80[2], tiles.o80[3], tiles.o80[4], tiles.o80[5], tiles.o80[6], tiles.o80[7], tiles.o80[8]);              
  set.drawImage(tileset, tiles.o81[1], tiles.o81[2], tiles.o81[3], tiles.o81[4], tiles.o81[5], tiles.o81[6], tiles.o81[7], tiles.o81[8]);
  set.drawImage(tileset, tiles.o82[1], tiles.o82[2], tiles.o82[3], tiles.o82[4], tiles.o82[5], tiles.o82[6], tiles.o82[7], tiles.o82[8]);              
  set.drawImage(tileset, tiles.o83[1], tiles.o83[2], tiles.o83[3], tiles.o83[4], tiles.o83[5], tiles.o83[6], tiles.o83[7], tiles.o83[8]);              
  set.drawImage(tileset, tiles.o84[1], tiles.o84[2], tiles.o84[3], tiles.o84[4], tiles.o84[5], tiles.o84[6], tiles.o83[7], tiles.o83[8]);       
              
      


 

};
