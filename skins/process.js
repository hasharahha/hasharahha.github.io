var canvas = document.getElementById("skin");
var ctx = canvas.getContext("2d");
var static;
var skins = new Image();
skins.src ="https://dl.dropboxusercontent.com/s/wm2cn84lml3bf3q/all_skins.png";

var selectedSkin ={
  height: 42,
  width: 42,
  x: 0,
  y: 0,
  spriteX: 0,
  spriteY: 0
};

function process(){
  
}
function render(){
  ctx.drawImage(skins, selectedSkin.spriteX, selectedSkin.spriteY, selectedSkin.width, selectedSkin.height, 42, 42);
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
