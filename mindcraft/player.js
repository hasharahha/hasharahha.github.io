var c = document.getElementById("game");
c.width =1024;
c.height =512;
var context = c.getContext("2d");
var playersprite = new Image();
playersprite.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var player={
  name:"Steve",
  inventory: [[1, 1],[0, 0],[0, 0],[0, 0], [0, 0], [0, 0]],
  height: 64,
  width: 32,
  spriteX: 0,
  spriteY: 0,
  health: 14,
  hunger: 25,
  speed: 1.5,
  weight: 3,
  x: 500,
  y: 10,
  stage: "idol",
  loaded: true,
  update: function(){
    context.clearRect(0, 0, terrain[0].length*32, terrain.length*32);
    if(this.loaded){
    context.fillText(this.name, this.x-6, this.y-5);
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
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
