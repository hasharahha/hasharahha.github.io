var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
gameloop();
var game ={
  height: 600,
  width: 1300,
  ping: 1000/30
}
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
}, game.ping);
}
