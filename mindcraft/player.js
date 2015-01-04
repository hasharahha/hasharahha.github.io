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
  stage: "idol",
  update: function(){
    alert("No errors");
    context.clearRect(this.x, this.y, this.width, this.height);
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};


function playerloop(){
  player.update();
  window.requestAnimationFrame(function(){
    playerloop();
  }, 1000/30);
}