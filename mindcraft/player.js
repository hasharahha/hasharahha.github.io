var c = document.getElementById("player");
c.width =1024;
c.height =512;
var context = c.getContext("2d");
var playersprite = new Image();
playersprite.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var player={
  height: 64,
  width: 32,
  spriteX: 0,
  spriteY: 0,
  health: 20,
  speed: 2,
  weight: 3,
  x: 32,
  y: 0,
  stage: "idol"
};

alert("Stats loaded");
