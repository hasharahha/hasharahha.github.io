var canvas = document.getElementById("terrain");
var ctx = canvas.getContext("2d");
canvas.height =512;
canvas.width =1024;
var tiles =new Image();
tiles.src ="https://dl.dropboxusercontent.com/s/gy986kh0n660ucs/tileset.png";
var players =new Image();
players.src ="http://bombermine.com/api/ctor/getskin?name=default&thumb=1";
tiles.onload = function(){
 LoadlayerA();
 LoadlayerB();
};

var layerA =[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
 [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var layerB =[
 [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
 [3, 8, 0, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 3, 3],
 [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,10,10,10,10,10, 5, 3, 3],
 [3, 8, 0, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,10,10,10,10,10, 5, 3, 3],
 [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,10,10,10,10,10, 5, 3, 3],
 [3, 8, 0, 8, 8, 8, 3, 0, 0, 0, 0, 0,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,11,11,11,11,11, 5, 3, 3],
 [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 3, 3],
 [3, 8, 0, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
 [3, 3, 6, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 3, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3],
 [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 0, 0, 0, 4, 3, 3],
 [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];

function LoadlayerA(){
  for(var y=0; y < layerA.length; y++){
    for(var x=0; x < layerA[y].length; x++){
     try{
     if(layerA[y][x] ==0){
      ctx.drawImage(tiles, 0, 0, 32, 32,x*32, y*32, 32, 32);
     }
     if(layerA[y][x] ==1){
      ctx.drawImage(tiles, 32, 0, 32, 32,x*32, y*32, 32, 32);
     }
     if(layerA[y][x] ==2){
      ctx.drawImage(tiles, 0, 32, 64, 64, x*32, y*32, 64, 64);
     }
     if(layerA[y][x] ==3){
      ctx.drawImage(tiles, 0, 160, 32, 32, x*32, y*32, 32, 32);
     }
     }catch(e){
      alert(e);
     }
    }
  }
  window.requestAnimationFrame(function(){
   LoadlayerA();
  }, 1000/30);
}

function LoadlayerB(){
 for(var y=0; y < layerB.length; y++){
  for(var x=0; x < layerB[y].length; x++){
   try{
    if(layerB[y][x] ==1){
     ctx.drawImage(tiles, 0, 416, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==2){
     ctx.drawImage(tiles, 32, 416, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==3){
     ctx.drawImage(tiles, 0, 320, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==4){
     ctx.drawImage(tiles, 32, 320, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==5){
     ctx.drawImage(tiles, 192, 384, 32, 32,x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==6){
     ctx.drawImage(tiles, 0, 512, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==7){
     ctx.drawImage(tiles, 0, 448, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==8){
     ctx.drawImage(tiles, 32, 448, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==9){
     ctx.drawImage(tiles, 64, 448, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==10){
     ctx.drawImage(tiles, 64, 320, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==11){
     ctx.drawImage(tiles, 98, 320, 32, 32, x*32, y*32, 32, 32);
    }
    if(layerB[y][x] ==12){
     ctx.drawImage(players, x*32, y*32);
    }
   }catch(e){
    alert(e);
   }
  }
 }
 window.requestAnimationFrame(function(){
  LoadlayerB();
 }, 1000/30);
}
alert("all good");
