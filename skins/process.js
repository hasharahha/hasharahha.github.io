var canvas = document.getElementById("skin");
var ctx = canvas.getContext("2d");
var static;
var skins = new Image();
skins.src ="https://dl.dropboxusercontent.com/s/wm2cn84lml3bf3q/all_skins.png";
skins.onload = function(){
  loop();
};
var selectedSkin ={
  height: 68,
  width: 64,
  x: 0,
  y: 0,
  spriteX: 0,
  spriteY: 0
};

function process(){
  if(selectedSkin.spriteX > 1984&&selectedSkin.spriteY =0){
    selectedSkin.spriteY =64;
  }
}
function render(){
  ctx.drawImage(skins, selectedSkin.spriteX, selectedSkin.spriteY, selectedSkin.width, selectedSkin.height, selectedSkin.x, selectedSkin.y, 128, 128);
}
function loop(){
  process();
  render();
  window.requestAnimationFrame(function(){
    loop();
  }, 500);
}

function cycle(){
  selectedSkin.spriteX +=42;
}
