var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];

//Event listener's :)
window.addEventListener("keydown", function(e){
  keys[e.keyCode] =true;
}, false);
window.addEventListener("keyup", function(e){
  keys[e.keyCode] =false;
}, false);
// classes
var game ={
height: 600,
width: 700,
fps: 1000/30,
speed: 1,
bg:"gray"
};
var player ={
  x: 10,
  y: 550,
  height: 10,
  width: 20,
  score: 0,
  bullets: 10,
  speed: 2
}
//Game logic and rendering , Very basic
function update(){
  if(keys[37]){
    player.x -= player.speed;
  }
  if(keys[39]){
    player.x += player.speed;
  }
}
function process(){
  
}
function render(){
  ctx.clearRect(1, 1, game.height, game.width);
document.getElementById("game").width = game.width;
document.getElementById("game").height = game.height;
document.getElementById("game").style.backgroundColor = game.bg;
//render player
ctx.fillRect(player.x, player.y, player.height, player.width);
}

function gameloop(){
  update();
  process();
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.fps);
}

window.requestAnimationFrame(function(){
  gameloop();
}, game.fps);
