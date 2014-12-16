//All game logic and rendering
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var players = new Image();
players.src ="https://dl.dropboxusercontent.com/s/z146qmtw6vwkuix/players.png";
var fuel =new Image();
fuel.src ="https://dl.dropboxusercontent.com/s/a6geeh6pqnh4a5v/fuel%20gauge.png";
var score ={
  fuel1pos: 0,
  fuel1x: 10,
  fuel1y: 500,
  fuel2pos: 0,
  fuel2x: 500,
  fuel2y: 500,
  scorepos: 0
};
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
  weight: 1,
  speed: 2,
  health: 1000
};
var player2 ={
  x: 400,
  y: 10,
  height: 64,
  width: 64,
  pos: 0,
  fuel: 1500,
  score: 0,
  weight: 1,
  speed: 2,
  health: 1000
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
  player1.pos =0;
  player2.pos =0;
}, false);





function update(){
  if(keys[65]&& player1.fuel > 1){
    player1.pos =64;
    player1.x -= player1.speed;
  }
  if(keys[68]&&player1.fuel > 1){
   player1.pos =64;
   player1.x += player1.speed;
  }
  if(keys[87]&&player1.fuel > 1){
    player1.pos =128;
    player1.y -= player1.speed
  }
  if(keys[37]&&player2.fuel > 1){
    player2.pos =64;
    player2.x -= player2.speed;
  }
  if(keys[39]&&player2.fuel > 1 ){
    player2.pos =64;
    player2.x += player2.speed;
  }
  if(keys[38]&&player2.fuel > 1){
    player2.pos =64;
    player2.y -= player2.speed;
  }
}
function process(){
  player1.y += player1.weight;
  player2.y += player2.weight;
  if(player1.y < 1){
    player1.y =1;
  }
  if(player1.x < 1){
    player1.x =1;
  }
  if(player1.y > 660){
    player1.x =660;
  }
}
function render(){
  ctx.clearRect(0, 0, game.width, game.height);
  //scores
  ctx.drawImage(fuel, score.fuel1pos, 0, 64, 64, score.fuel1x, score.fuel1y, 64, 64);
  /*
  ctx.drawImage(fuel, score.fuel2pos, 0, 64, 64, score.fuel2x, score.fuel2.y, 64, 64);
  */
  //player1
  ctx.drawImage(players, player1.pos, 0, player1.width, player1.height, player1.x, player1.y, player1.width, player1.height);
  ctx.drawImage(players, player2.pos, 64, player2.width, player2.height, player2.x, player2.y, player2.width, player2.height);
}
/*
function FuelCheck(){
  if(player1.fuel < 4000&&player1.fuel > 3000){
    score.fuel1pos =0;
  }
  if(player1.fuel < 3000&&player1.fuel > 2000){
    score.fuel1pos =64;
  }
  if(player1.fuel < 2000&&player1.fuel > 1000){
    score.fuel1pos =128;
  }
  if(player1.fuel < 1000&&player1.fuel > 800){
    score.fuel1pos =192;
  }
  if(player1.fuel < 800&&player1.fuel > 600){
    score.fuel1pos =256;
  }
}
*/

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
  }, game.fps);
}
