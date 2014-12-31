var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var playerimg = new Image();
var blocks = new Image();
blocks.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png"
blocks.onload = function(){
  loadTerrain();
}
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var keys =[];
var game ={
  height: 600,
  width: 1200,
  ping: 1000/30
};

canvas.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
  alert(click.x+" "+click.y);
}, false);

canvas.addEventListerner("touchend", function(){
  click.x =0;
  click.y =0;
  alert("Touch ended");
})

var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
};



var player ={
  height: 64,
  width: 32,
  x: 10,
  y: 10,
  spriteX: 0,
  spriteY: 0,
  state: "idol",
  health: 20,
  speed: 2
};
gameloop();
function update(){
  
}
function process(){
  
}
function render(){
canvas.height = game.height;
canvas.width = game.width;
ctx.clearRect(player.x, player.y, player.width, player.height);
ctx.drawImage(playerimg, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.width, player.height);
}

function gameloop(){
update();
process();
render();
window.requestAnimationFrame(function(){
 gameloop(); 
}, game.ping);
}

/*
function loadTerrain(){
  var a;
  var ax =0;
  var ay =0;
  for(a=0; a < 32; a++){
    ax +=32;
    ay = game.height-128;
    ctx.drawImage(blocks, 0, 0, 32, 32, ax, ay, 32, 32);
  }
}
*/

ctx.save();
static = ctx.toDataURL(jpg);
var element = document.createElement("textarea");
element.value = static;
document.body.appendChild(element);
