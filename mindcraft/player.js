var c = document.getElementById("game");
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
  health: 16,
  hunger: 6,
  speed: 2,
  weight: 3,
  x: 32,
  y: 10,
  stage: "idol",
  update: function(){
    context.clearRect(0, 0, c.width, c.height);
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};

function playerPosX(){
  static = player.x/32;
  return static;
}
function playerPosY(){
  static = player.y/32;
  return static;
}
