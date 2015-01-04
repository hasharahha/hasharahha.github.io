alert("test 3");
var c = document.getElementById("player");
c.width =1024;
c.height =512;
var context = c.getContext("2d");
var playersprite = new Image();
playersprite.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
playerloop();
var player={
  height: 64,
  width: 32,
  inventory: [],
  spriteX: 0,
  spriteY: 0,
  health: 20,
  speed: 2,
  weight: 3,
  x: 32,
  y: 0,
  stage: "idol"
};

function playerupdate(){
  alert("loading :(")
  context.clearRect(player.x, player.y, player.width, player.height);
  context.drawImage(playersprite, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.width, player.height);
  
}

function playerloop(){
  playerupdate();
  window.requestAnimationFrame(function(){
    playerloop();
  }, 1000/30);
}
