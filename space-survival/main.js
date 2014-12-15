//All game logic and rendering
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
var game ={
  height: 600,
  width: 800,
  fps: 1000/30,
  color:"gray"
}
var player1 ={
  x: 10,
  y: 10,
  pos: 0,
  fuel: 1000,
  score: 0
};
canvas.height = game.height;
canvas.width = game.width;

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
}, false);





function update(){
  
}
function process(){
  
}
function render(){
  
}


function gameloop(){
  update();
  process();
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.fps);
}
