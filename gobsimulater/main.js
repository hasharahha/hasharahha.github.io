var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
var rnd = Math.floor(Math.random()*9001);
var skin = new Image();
skin.src 
="https://dl.dropboxusercontent.com/s/o0e18h3fc5d2jsd/character_silver.png";
var items = new Image();
items.src ="https://raw.githubusercontent.com/JBcompanyrules/images/master/img/items.png";
var bombs = new Image();
bombs.src ="https://dl.dropboxusercontent.com/s/eyho02g7vn10vn9/bombs.png";
var game ={
  players: 1,
  height: 500,
  width: 999,
  ping: 1000/30,
  server: "US ROOM: (private): "+rnd
};

var bomb ={
  height: 64,
  width: 64,
  x: 0,
  y: 0,
  spriteX: 0,
  spriteY: 0,
  loaded: false
};

var mysteryBox ={
x: Math.random()*800-1,
y: Math.random()*400-1,
height: 32,
width: 32,
spriteX: 0,
spriteY: 128,\
effect: "shrink"
};



var player ={
  effect: Math.floor(Math.random()*3),
  x: 10,
  y: 10,
  height: 42,
  width: 42,
  stage: "idol",
  speed: 2,
  hitheight: 37,
  hitwidth: 37,
  spriteX: 0,
  spriteY: 84,
  cheight: 42,
  cwidth: 42,
  loaded: true,
  bombs: 0
};
var speed =100;
gameloop();
AnimBomb();
setInterval(add, speed);

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
  player.stage ="idol";
}, false);
function update(){
  if(keys[38]){
    //Up key
    player.stage ="up";
    player.y -= player.speed;
  }
  if(keys[39]){
    //Right key
    player.stage ="right";
    player.x += player.speed;
  }
  if(keys[40]){
    //Down key
    player.stage ="down";
    player.y += player.speed;
  }
  if(keys[37]){
    //Left key
    player.stage ="left";
    player.x -= player.speed;
  }
  if(keys[32]){
    bomb.loaded = true;
    bomb.x = player.x;
    bomb.y = player.y;
    bomb.spriteY =0;
  }
}

function add(){
  if(player.stage !="idol"){
  player.spriteX +=42;
  }
  else{
    player.spriteX =0;
  }
}

function process(){
  if(player.x < 1){
    player.x =1;
  }
  if(player.y < 1){
    player.y =1;
  }
  if(player.x > 1000-39){
    player.x = 1000-39;
  }
  if(player.y > 500-39){
    player.y =500-39;
  }
  
  if(player.spriteX > 126){
    player.spriteX =0;
  }
  
  if(collision(player, mysteryBox)){
    mysteryBox.x =5000;
    mysteryBox.y =5000;
    effect();
  }
}

function Animate(){
if(player.stage =="idol"){
  player.spriteY =84;
}
if(player.stage =="up"){
  player.spriteY =0;
}
if(player.stage =="right"){
  player.spriteY =42;
}
if(player.stage =="left"){
  player.spriteY =126;
}
if(player.stage =="down"){
  player.spriteY =84;
}
}

function effect(){
  
  if(player.effect ==1){
    player.cheight =32;
    player.cwidth =32;
setTimeout(function(){
  player.cheight =42;
  player.nheight =42;
}, 10000);
}

if(player.effect ==2){
  player.loaded =false;
  setTimeout(function(){
    player.loaded =true;
  }, 10000);
}

if(player.effect ==0){
  player.effect =2;
  console.log("for some reason, scale isn't working");
  console.log("So for now subsitituting it with effect 2 :(");
  effect();
  /*
  set.scale(1, -1);
  ctx.scale(1, -1);
  setTimeout(function(){
    set.scale(1, 1);
    ctx.scale(1, 1);
  }, 10000);
  */
}

}
function render(){
  ctx.clearRect(0, 0, 1000, 500);
  ctx.drawImage(items, mysteryBox.spriteX, mysteryBox.spriteY, mysteryBox.width, mysteryBox.height, mysteryBox.x, mysteryBox.y, 32, 32);
  if(bomb.loaded&&player.bombs >=1){
    player.bombs -=1;
    ctx.drawImage(bombs, bomb.spriteX, bomb.spriteY, bomb.height, bomb.width, bomb.x, bomb.y, 42, 42);
  }
  if(player.loaded){
  ctx.drawImage(skin, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.cwidth, player.cheight);
  }

  ctx.font ="14px helvetica";
  ctx.fillStyle ="white";
  ctx.fillText("Player X: "+getPlayerX(), 20, 430);
  ctx.fillText("Player Y: "+getPlayerY(), 140, 430);
  ctx.fillText("FPS: "+getFPS(), 220, 430);
  ctx.fillText("online: "+getPlayers(), 300, 430);
  ctx.fillStyle ="red";
  ctx.fillText("Made by HASHARAHHA14 aka Jacob, un-finished", 600, 450);
  ctx.fillStyle ="blue";
  ctx.font ="12px Arial";
  ctx.fillText("SERVER: "+game.server, 420, 430);
  
  ctx.beginPath();
  ctx.moveTo(900, 0);
  ctx.lineTo(900, 500);
  ctx.stroke();
}

function getPlayerX(){
  static = Math.round(player.x/32);
    return static;
}
function getPlayers(){
  static = game.players;
  return static;
}

function getPlayerY(){
  static = Math.round(player.y/32);
  static = Math.abs(static);
  return static;
}

var startTime = 0;
var frameNumber = 0;
function getFPS(){
frameNumber++;
var d = new Date().getTime(),
currentTime = ( d - startTime ) / 1000,
result = Math.floor((frameNumber / currentTime));

if( currentTime > 1 ){
startTime = new Date().getTime();
frameNumber = 0;
}
return result;
}	
function gameloop(){
  update();
  Animate();
  process();
  render();
  window.requestAnimationFrame(function(){
    gameloop();
  }, game.ping);
}

function Cmsg(msg){
  alert("MESSAGE: \n "+msg);
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.hitheight < second.x||
  first.y > second.y + second.height||
  first.y + first.hitwidth < second.y)
  
}
var Eo =0;
setInterval(function(){
  if(Eo==0){
    mysteryBox.y -=1;
    Eo++;
  }
  else if(Eo > 0&&Eo < 4){
    mysteryBox.y +=1;
    Eo++;
  }
  else if(Eo > 3){
    mysteryBox.y -=1;
    Eo =0;
  }
  else{
    Eo =0;
  }
}, 100);


function AnimBomb(){
  bomb.spriteY +=64;
  if(bomb.spriteY > 512){
    bomb.loaded =false;
    bomb.spriteY =0;
    ctx.fillStyle ="orange";
    ctx.fillRect(bomb.x +42, bomb.y, 32, 32);
    ctx.fillRect(bomb.x +42, bomb.y +42, 32, 32);
    ctx.fillRect(bomb.x -42, bomb.y, 32, 32);
    ctx.fillRect(bomb.x, bomb.y -42, 32, 32)
  }
  setTimeout(function(){
    AnimBomb();
  }, 100)
}
