//Thanks for using my games, Feel free to use my code
//By jacob Bondley
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
var player1 ={
  x: 20,
  y: 20,
  height: 10,
  width: 10,
  speed: 3,
  score: 0,
  fuel: 6000,
  color:"yellow"
};
var player2 ={
  x: 420,
  y: 20,
  height: 10,
  width: 10,
  speed: 3,
  score: 0,
  fuel: 6000,
  color:"blue"
};

var enemy ={
  x: 50,
  y: 50,
  height: 10,
  width: 10,
  fuel: 1000,
  color:"black"
};

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

/*
Controls:
Player_1: 
A LEFT [65]
D RIGHT [68]
W UP [87]
/ CHARGE [191]
Player_2:
Larrow LEFT [37]
Rarrow RIGHT [39]
Uarrow UP [38]
C CHARGE [67]
*/


function update(){
  if(keys[65]){
    player1.x -= player1.speed;
  }
  if(keys[68]){
    player1.x += player1.speed;
  }
  if(keys[87]&&player1.fuel > 1){
    player1.y -= player1.speed;
    player1.fuel -=5;
  }
  if(keys[67]){
    Shop("player1");
  }
  if(keys[37]){
    player2.x -= player2.speed;
  }
  if(keys[39]){
    player2.x += player2.speed;
  }
  if(keys[38]&&player2.fuel > 1){
    player2.y -= player2.speed;
    player2.fuel -=5;
  }
  if(keys[191]){
    Shop("player2");
  }
}
function process(){
  player1.y +=1;
  player2.y +=1;
  if(collision(player1, enemy)){
    player1.fuel +=500;
    player1.score +=1;
    enemy.x = Math.floor(Math.random()*700);
    enemy.y = Math.floor(Math.random()*500);
  }
  if(collision(player2, enemy)){
    player2.fuel +=500;
    player2.score +=1;
    enemy.x = Math.floor(Math.random()*700);
    enemy.y = Math.floor(Math.ranodm()*500);
  }
  if(player1.y < 1){
    player1.y =2;
    player1.x =2;
  }
  if(player1.x < 1){
    player1.y =2;
    player1.x +2;
  }
  if(player2.y < 1){
    player2.y =2;
    player2.x =2;
  }
  if(player2.x < 1){
    player2.x =2;
    player2.y =2;
  }
  if(player1.y > 519){
    player1.x =5000;
    player1.y =10;
    ctx.fillText("Game Over! Your score: "+player1.score, 30, 50);
  }
  if(player2.y > 519){
    player2.x =5000;
    player2.y =9;
    ctx.fillStyle ="gray";
    ctx.fillText("Game Over! Your score: "+player2.score, 350, 50);
  }
  if(enemy.x < 1){
    enemy.x =40;
    enemy.y =40;
  }
  if(collision(player1, player2)){
    player1.fuel -=500;
    player2.fuel -=500;
    player1.x =30;
    player2.x =400;
    player1.y =30;
    player2.y =30;
  }
}
function render(){
  ctx.clearRect(1, 1, 1000, 700);
  ctx.fillStyle = player1.color;
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
  ctx.fillStyle = player2.color;
  ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
  ctx.fillStyle = enemy.color;
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  //Scores
  ctx.font ="bold 14px helvetica";
  ctx.fillStyle ="red";
  ctx.fillText("P1 Score: "+player1.score, 20, 20);
  ctx.fillText("P2 Score: "+player2.score, 600, 20);
  ctx.fillStyle ="black";
  ctx.fillText("P1 Fuel: "+player1.fuel, 20, 50);
  ctx.fillText("P2 Fuel: "+player2.fuel, 600, 50);
  ctx.fillStyle ="yellow";
  ctx.fillText("CPU Fuel: "+enemy.fuel, 320, 50);
  //divides
  ctx.beginPath();
  ctx.moveTo(350, 1);
  ctx.lineTo(350, 520);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1, 518);
  ctx.lineTo(800, 518);
  ctx.stroke();
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
  
}
var rnd;
function ai(){
  rnd = Math.floor(Math.random()*1001);
  if(rnd =="250"){
    enemy.y -=1;
  }
  if(rnd =="500"){
    enemy.x +=1;
  }
  if(rnd =="750"){
    enemy.y +=1;
  }
  if(rnd =="1000"){
    enemy.x -=1;
  }
  if(rnd > 750){
    enemy.x +=1;
  }
  if(rnd > 900){
    enemy.y -=1;
  }
  if(rnd < 200){
    enemy.y -=2;
  }
  if(rnd < 300&&rnd > 200&&enemy.fuel > 1){
    enemy.y -=3;
    enemy.fuel -=5;
  }
  if(rnd < 100&&enemy.fuel < 1){
    enemy.fuel +=10;
    enemy.y -=1;
    enemy.x +=2;
  }
  if(enemy.y > 519){
    enemy.x = Math.floor(Math.random()*600);
    enemy.y = Math.floor(Math.random()*500);
  }
  else{
    enemy.y +=1;
  }
}

function Shop(player){
  var item = prompt("Shop:  enter Item to upgrade \n /speed - 3 \n /fuel - 5 \n /size - 10", "/Item");
  var Player = player;
  if(Player=="player1"){
    if(item=="/speed"&&player1.score >= 3){
      player1.speed +=1;
      player1.score -=3;
    }
    if(item=="/fuel"&&player1.score >= 5){
      player1.fuel +=500;
      player1.score -=3;
    }
    if(item=="/size"&&player1.score >= 10){
      player1.height +=1;
      player1.width +=1;
      player1.score -=10;
    }
    if(Player=="player2"){
    if(item=="/speed"&&player2.score >= 3){
      player2.speed +=1;
      player2.score -=3;
    }
    if(item=="/fuel"&&player2.score >= 5){
      player2.fuel +=500;
      player2.score -=3;
    }
    if(item=="/size"&&player2.score >= 20){
      player2.height +=1;
      player2.width +=1;
      player2.score -=20;
    }
  }

function gameloop(){
  update();
  process();
  ai();
  render();
}


setInterval(function(){
  gameloop();
}, 1000/30)

