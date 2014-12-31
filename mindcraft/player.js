var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var game ={
  height: 600,
  width: 1200,
  ping: 1000/30
};

var click ={
  x: 0,
  y: 0,
  static: undefined
};
var leftbtn ={
  x: 950,
  y: 500,
  height: 32,
  width: 32
};

canvas.addEventListener("click", function(event){
  click.x = event.x - canvas.offsetLeft;
  click.y = event.y - canvas.offsetTop;

}, false)

var player ={
  height: 64,
  width: 32,
  x: 45,
  y: 30,
  health: 10,
  speed: 2,
  spriteX: 0,
  spriteY: 0,
  state: "idol",
  update: 1
};
gameloop();
function update(){
  if(collision(click, leftbtn)){
    player.x -= player.speed;
  }
}

function process(){
  
}

function render(){
  ctx.clearRect(0, 0, game.width, game.height);
  canvas.height = game.height;
  canvas.width = game.width;
   ctx.drawImage(playerimg, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, 32, 64);
   ctx.fillSyle ="black";
   ctx.fillRect(leftbtn.x, leftbtn.y, leftbtn.width, leftbtn.height);
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
}


function gameloop(){
  update();
  process();
  render();
  
  
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.ping)
}
