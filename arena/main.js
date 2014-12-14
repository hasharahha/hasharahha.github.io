//And the Game begins
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
var game ={
  fps: 1000/30,
  height: 500,
  width: 600
}
//player class
var player ={
  x: 0,
  y: 0,
  height: 32,
  width: 16,
  score: 0,
  loaded: false,
  Pos: 0,
  speed: 2
};
var playerDirectionX = player.frontX;
var playerDirrectionY = player.frontY;
//load player
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/006jpxndv604hgk/player.png";
playerimg.onload = function(){
  player.loaded =true;
};

//Detecters
window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

//process
function update(){
  if(keys[38]){
   player.Pos =17;
   player.y -= player.speed;
  }
  if(keys[40]){
    player.Pos =0;
    player.y += player.speed;
  }
  if(keys[37]){
    player.Pos =33;
    player.x -= player.speed;
  }
  if(keys[39]){
    player.Pos =62;
    player.x += player.speed;
  }
}
function process(){
  if(player.x > 595){
    player.x = 595;
  }
  if(player.x < 1){
    player.x =1;
  }
  if(player.y < 1){
    player.y =1;
  }
}
function render(){
  document.getElementById("game").height = game.height;
  document.getElementById("game").width = game.width;
    ctx.drawImage(playerimg, player.Pos, 0, player.width, player.height, player.x, player.y, player.width, player.height);
}


function gameloop(){
  update();
  process();
  render();
  
  //Contnue the loop
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.fps)
}






window.requestAnimationFrame(function(){
  gameloop();
}, game.fps)
