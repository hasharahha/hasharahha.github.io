//All game logic and rendering
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var game ={
  height: 500,
  width: 600,
  fps: 1000/30
}
canvas.height = game.height;
canvas.width = game.width;
