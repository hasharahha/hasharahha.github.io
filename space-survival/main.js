//All game logic and rendering
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var players = new Image();
players.src ="https://dl.dropboxusercontent.com/s/z146qmtw6vwkuix/players.png";
var keys =[];
var game ={
  height: 600,
  width: 1000,
  fps: 1000/30,
  color:"gray"
}
var player1 ={
  x: 10,
  y: 10,
  height: 64,
  width: 64,
  pos: 0,
  fuel: 1000,
  score: 0,
  weight: 1
};
var player2 ={
  x: 400,
  y: 10,
  height: 64,
  width: 64,
  pos: 0,
  fuel: 1500,
  score: 0,
  weight: 1
};

//game loop
gameloop();
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
  //scores
  
  
  //player1
  ctx.drawImage(players, player1.pos, 0, player1.width, player1.height, player1.x, player1.y, player1.width, player1.height);
}


function gameloop(){
  update();
  process();
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.fps);
}
