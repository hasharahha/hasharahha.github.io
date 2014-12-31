var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var game ={
  height: 800,
  width: 1200,
  ping: 1000/30
};

var player ={
  height: 64,
  width: 32,
  x: 10,
  y: game.height - this.height,
  health: 10,
  speed: 2,
  spriteX: 0,
  spriteY: 0,
  state: "idol",
  update: function(){
    ctx.drawImage(playerimg, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, 32, 64);
  }
};
gameloop();
function update(){
  
}

function process(){
  
}

function render(){
  canvas.height = game.height;
  canvas.width = game.width;
 player.update(); 
}




function gameloop(){
  update();
  process();
  render();
  
  
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.ping)
}
