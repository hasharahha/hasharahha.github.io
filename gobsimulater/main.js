var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
var skin = new Image();
skin.src ="https://dl.dropboxusercontent.com/s/o0e18h3fc5d2jsd/character_silver.png";
var player ={
  x: 10,
  y: 10,
  height: 42,
  width: 42,
  stage: "idol",
  speed: 2,
  spriteX: 0,
  spriteY: 84
};

gameloop();

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
}, false);
function update(){
  if(keys[38]){
    //Up key
    player.stage ="up";
    player.y -= player.speed;
  }
  if(keys[39]){
    //Right key
    player.stage ="right";
    player.x += player.speed;
  }
  if(keys[40]){
    //Down key
    player.stage ="down";
    player.y += player.speed;
  }
  if(keys[37]){
    //Left key
    player.stage ="left";
    player.x -= player.speed;
  }
  else{
    player.stage ="idol";
  }
}

function process(){
  
}

function Animate(){
if(player.stage =="idol"){
  player.spriteY =84;
}
if(player.stage =="up"){
  player.spriteY =0;
}
if(player.stage =="right"){
  player.spriteY =42;
}
if(player.stage =="left"){
  player.spriteY =126;
}
if(player.stage =="down"){
  player.spriteY =84;
}
}

function render(){
  ctx.clearRect(0, 0, 500, 500);
  ctx.drawImage(skin, player.spriteX, player.spriteY, player.height, player.width, player.x, player.y, player.height, player.width);
}

function gameloop(){
  update();
  Animate();
  process();
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, 1000/30);
}
