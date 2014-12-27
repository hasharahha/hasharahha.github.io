var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var skin = new Image();
skin.src ="https://dl.dropboxusercontent.com/s/o0e18h3fc5d2jsd/character_silver.png"
var player ={
  x: 10,
  y: 10,
  height: 42,
  width: 42,
  stage: down,
  update: function(){
    ctx.drawImage(skin, 0, 0, this.height, this.width, this.x, this.y, this.height, this.width);
  }
}

alert("Hello");
setInterval(function(){
  player.update();
}, 1000);
