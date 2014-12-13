var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
alert("loaded")
//game class
var game ={
height: 600,
width: 700,
fps: 1000/30,
speed: 1
}

function render(){
document.getElementById("game").width = game.width;
document.getElementById("game").height = game.height;
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
