var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var keys =[];

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
})
window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
})
