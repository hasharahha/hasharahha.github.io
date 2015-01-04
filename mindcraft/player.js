var display = document.getElementById("player");
var players = display.getContext("2d");
display.height =512;
display.width =1024;
var static;
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";

var player ={
  width: 32,
  height: 64,
  x: 64,
  y: 64,
  health: 20,
  inventory: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  stage: "idol",
  spriteX: 0,
  spriteY: 0
};
