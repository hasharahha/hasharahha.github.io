alert("test 2");
var c = document.getElementById("player");
var context = c.getContext("2d");
var playersprite = new Image();
playersprite.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
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
  stage: "idol",
  update: function(){
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};
