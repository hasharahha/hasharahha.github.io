var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var keys =[];
gameloop();
var game ={
  height: 600,
  width: 1300,
  ping: 1000/30
};

var player ={
  height: 64,
  width: 32,
  x: 10,
  y: 10,
  spriteX: 0,
  spriteY: 0,
  state: "idol",
  inventory: [],
  health: 20,
  speed: 2
};

function update(){
  
}
function process(){
  
}
function render(){
canvas.height = game.height;
canvas.width = game.width;
ctx.clearRect(0, 0, game.width, game.height);
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