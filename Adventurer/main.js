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
  x: 20,
  y: 300,
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
  if(keys[87]&&player.fuel > 1){
    player1.y -= player1.speed;
    player1.fuel -=5;
  }
  if(keys[67]){
    player1.fuel +=1;
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
    player2.fuel +=1;
  }
}
function process(){
  player1.y +=1;
  player2.y +=1;
  if(collision(player1, enemy)){
    enemy.x = Math.floor(Math.random()*700);
    enemy.y = Math.floor(Math.random()*500);
    player1.score +=1;
  }
  if(collision(player2, enemy)){
    enemy.x = Math.floor(Math.random()*700);
    enemy.y = Math.floor(Math.ranodm()*500);
    player2.score +=1;
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
}


setInterval(function(){
  gameloop();
}, 1000/30)

