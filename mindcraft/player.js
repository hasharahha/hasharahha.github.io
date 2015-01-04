var display = document.getElementById("player");
var players = display.getContext("2d");
display.height =512;
display.width =1024;
var static;
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
alert("Player loaded");
var player ={
  width: 32,
  height: 64,
  x: 64,
  y: 64,
  health: 20,
  inventory: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  stage: "idol",
  spriteX: 0,
  spriteY: 0,
  loaded: true,
  weight: 2,
  speed: 3
};

function playerRender(){
  players.drawImage(playerimg, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, 32, 64);
}

funtion playerloop(){
  playerRender();
  window.requestAnimationFrame(function(){
    playerloop();
  }, 1000/30);
}
