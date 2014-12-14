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
  x: 20,
  y: 20,
  height: 32,
  width: 16,
  score: 0,
  src: "https://dl.dropboxusercontent.com/s/006jpxndv604hgk/player.png",
  loaded: false,
  eastX: -34,
  eastY: 0,
  westX: -51,
  westY: 0,
  frontX: 0,
  frontY: 0,
  backX: -17,
  backY: 0
};
var playerDirectionX = player.frontX;
var playerDirrectionY = player.frontY;
//load player
var playerimg = new Image();
playerimg.src ="https://dl.dropboxusercontent.com/s/006jpxndv604hgk/player.png";
playerimg.onload = function(){
  player.loaded =true;
ctx.drawImage(playerimg, player.x, player.y, player.width, player.height, playerDirectionX, playerDirectionY, player.width, player.height);
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
  
}
function process(){
  
}
function render(){
  document.getElementById("game").height = game.height;
  document.getElementById("game").width = game.width;
  if(player.loaded == true){
    ctx.drawImage(playerimg, player.x, player.y, player.width, player.height, playerDirectionX, playerDirectionY, player.width, player.height);
  }
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