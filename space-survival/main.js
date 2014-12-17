//All game logic and rendering
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle ="blue";
ctx.fillText("Space Survival V1.0", 0, 15)
ctx.fillText("Loading...", 0, 45);
ctx.fillText("(c) Jacob Bondley", 0, 30);
ctx.fillText("2 players - Game will start in 5 seconds", 0, 60);
setTimeout("Start()", 6000);
var static;
var players = new Image();
players.src ="https://dl.dropboxusercontent.com/s/z146qmtw6vwkuix/players.png";
var fuel =new Image();
fuel.src ="https://dl.dropboxusercontent.com/s/a6geeh6pqnh4a5v/fuel%20gauge.png";
var enemyimg = new Image();
enemyimg.src ="https://dl.dropboxusercontent.com/s/nkqmpyodvgyyd0h/enemy.png";
var missileimg = new Image();
missileimg.src ="https://dl.dropboxusercontent.com/s/6gwmuemtsg8097m/result.png";
var missile1 ={
  x: 2000,
  y: 2000,
  height: 32,
  width: 32,
  nheight: 32,
  nwidth: 32,
  speed: 3,
  posX: 32,
  posY: 0
};
var missile2 ={
  x: 2000,
  y: 2000,
  height: 32,
  width: 32,
  nheight: 32,
  nwidth: 32,
  speed: 3,
  posX: 0,
  posY: 32
};

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
  nheight: 64,
  nwidth: 64,
  pos: 0,
  fuel: 3000,
  score: 0,
  weight: 1,
  speed: 3,
  health: 1000,
  skill: 0
};
var player2 ={
  x: 400,
  y: 10,
  height: 64,
  width: 64,
  nheight: 64,
  nwidth: 64,
  pos: 0,
  fuel: 3000,
  score: 0,
  weight: 1,
  speed: 3,
  health: 1000,
  skill: 0
};
var enemy ={
  x: 70,
  y: 70,
  height: 64,
  width: 64,
  static: null
};
//game loop
function Start(){
gameloop();
canvas.height = game.height;
canvas.width = game.width;
}
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
    player1.fuel -= player1.speed;
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
    player2.fuel -= player2.speed;
    player2.y -= player2.speed;
  }
  if(keys[83]){
    shoot1(player1);
  }
  if(keys[40]){
    shoot2(player2);
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
  if(player2.y < 1){
    player2.y =1;
  }
  if(player2.x < 1){
    player2.x =1;
  }
  if(player1.y > 660){
    player2.x =660;
  }
  FuelCheck();
  
  if(player1.fuel < 1){
    player1.y += player1.weight;
  }
  if(collision(player1, enemy)){
    player1.fuel +=250;
    player1.skill +=1;
    getFuel();
  }
  if(collision(player2, enemy)){
    player2.fuel +=250;
    player2.skill +=1;
    getFuel();
  }
  if(collision(player1, player2)){
    player1.fuel -=100;
    player2.fuel -=100;
    player1.x = 10;
    player1.y = 10;
    player2.x = 500;
    player2.y = 10;
  }
  skillupdate();
  MissileAnim();
}
function render(){
  ctx.clearRect(0, 0, game.width, game.height);
  //scores
  ctx.drawImage(fuel, score.fuel1pos, 0, 64, 64, score.fuel1x, score.fuel1y, 64, 64);
  ctx.drawImage(fuel, score.fuel2pos, 0, 64, 64, score.fuel2x, score.fuel2y, 64, 64);
  //enemy ha ha ha
  ctx.drawImage(enemyimg, enemy.x, enemy.y);
  //Misiles Render
  ctx.drawImage(missileimg, missile1.pos, 0, missile1.width, missile1.height, missile1.x, missile1.y, missile1.width, missile1.height);
  ctx.drawImage(missileimg, missile2.pos, 32, missile2.width, missile2.height, missile2.x, missile2.y, missile2.width, missile1.height);
  //player1
  ctx.drawImage(players, player1.pos, 0, player1.width, player1.height, player1.x, player1.y, player1.nwidth, player1.nheight);
  ctx.drawImage(players, player2.pos, 64, player2.width, player2.height, player2.x, player2.y, player2.nwidth, player2.nheight);
}

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
  if(player1.fuel < 600&&player1.fuel > 400){
    score.fuel1pos =321;
  }
  if(player1.fuel < 100&&player1.fuel > 50){
    score.fuel1pos = 640;
  }
  if(player1.fuel < 1){
    score.fuel1pos = 704;
  }

 if(player2.fuel < 4000&&player2.fuel > 3000){
    score.fuel2pos =0;
  }
  if(player2.fuel < 3000&&player2.fuel > 2000){
    score.fuel2pos =64;
  }
  if(player2.fuel < 2000&&player2.fuel > 1000){
    score.fuel2pos =128;
  }
  if(player2.fuel < 1000&&player2.fuel > 800){
    score.fuel2pos =192;
  }
  if(player2.fuel < 800&&player2.fuel > 600){
    score.fuel2pos =256;
  }
  if(player2.fuel < 600&&player2.fuel > 400){
    score.fuel2pos =321;
  }
  if(player2.fuel < 100&&player2.fuel > 50){
    score.fuel2pos = 640;
  }
  if(player2.fuel < 1){
    score.fuel2pos = 704;
  }

  window.requestAnimationFrame(function(){
    FuelCheck();
  });
}

function skillupdate(){
if(player1.skill ==5){
  player1.skill +=1;
  player1.nheight +=20;
  player1.nwidth +=20;
  player1.speed +=3;
  player1.weight +=1;
}
if(player2.skill ==5){
  player2.skill+=1;
  player2.nheight +=20;
  player2.nwidth +=20;
  player2.speed +=3;
  player2.weight +=1;
}
}

function getFuel(){
  enemy.x =Math.floor(Math.random()*700);
  enemy.y =Math.floor(Math.random()*500);
}
function MissileAnim(){
  missile1.y -=1;
  missile2.y -=1;
}
function shoot1(entity){
  missile1.x = entity.x;
  missile1.y = entity.y - entity.height;
  missile1.pos =32;
}
function shoot2(entity){
  missile2.x = entity.x;
  missile2.y = entity.y - entity.height;
  missile2.pos =32;
}

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
