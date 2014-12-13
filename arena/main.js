var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
alert("loaded")
//game class
var game ={
height: 600,
width: 700,
fps: 1000/30,
speed: 1,
bg:"gray"
}

function render(){
document.getElementById("game").width = game.width;
document.getElementById("game").height = game.height;
document.getElementById("game").style.backgroundColor = game.bg;
}

function gameloop(){
  
  
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.fps);
}

window.requestAnimationFrame(function(){
  gameloop();
}, game.fps);
