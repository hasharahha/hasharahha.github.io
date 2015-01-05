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
  health: 14,
  hunger: 25,
  speed: 2,
  weight: 3,
  x: 32,
  y: 10,
  stage: "idol",
  update: function(){
    context.clearRect(0, 0, 5000, c.height);
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};

function playerPosX(){
  static = player.x/32;
  return static;
}

setInterval(function(){
  if(Math.round(player.x/32) ==31){
    context.translate(-1024, 0);
    ctx.translate(-1024, 0);
    player.x +=64;
  }
  if(Math.round(player.x/32) ==32){
    player.x -=64;
    ctx.translate(0, 0);
  }
}, 10000);
function playerPosY(){
  static = player.y/32;
  return static;
}
