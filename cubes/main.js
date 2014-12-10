var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var speed = 3;
var player ={
  x: 40,
  y: 30,
  width: 20,
  height: 20
}
var enemy ={
  x: Math.random()*150,
  y: Math.random()*100,
  width: 20,
  height: 20
}

var bomb ={
  x: 100,
  y: 100,
  width: 10,
  height: 10,
};
var score ={
  points: 0,
  health: 10,
  bombs: 1
}
var keys =[];

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
})
window.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
})


function game(){
  ctx.clearRect(0, 0, 400, 500);
  update();
  render();
}
function update(){
  if(collision(player, enemy)){
    process();
  };
  if(collision(enemy, bomb)){
    process();
  }
  if(collision(enemy, player)){
    
  }
  if(score.health < 1){
    document.getElementById("Game").style.display='none';
    var msg = document.createElement('h1');
    msg.setAttribute("innerHTML", "You lose");
    document.body.appendChild(msg);
  }
if(keys[38]){
  player.y -= speed;
}
else if(keys[40]){
  player.y += speed;
}
else if(keys[39]){
  player.x += speed;
}
else if(keys[37]){
  player.x -= speed;
}
else if(keys[32]){
bomb.x = player.x 
bomb.y = player.y+15
Explode();
score.bombs ==0;
}
function Explode(){
  
}
function AttackPlayer(){
  score.health -=1;
}
}
function render(){
  ctx.fillStyle ="blue"
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle ="green";
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  ctx.fillStyle ="black";
  ctx.fillRect(bomb.x, bomb.y, bomb.width, bomb.height);
  ctx.font ="bold 16px helvetica";
  ctx.fillStyle ="red";
  ctx.fillText("Health: "+score.health, 20, 20);
  ctx.fillStyle ="black";
  ctx.fillText("Score: "+score.points, 20, 35);
  ctx.fillText("Bombs: "+score.bombs, 20, 50);
  
  if(player.y <0){
    player.y = 0;
  }
  else if(player.x <0){
    player.x = 0;
  }
}

function process(){
  score.points +=1;
  enemy.x = Math.floor(Math.random()*150);
  enemy.y = Math.floor(Math.random()*100);
}
function Respawn(){
  score.points -= 10;
  player.x = Math.floor(Math.random()*125);
  player.y = Math.floor(Math.random()*115);
  health -=1;
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.width||
  first.y > second.y + second.height||
  first.y + first.width < second.height)
  
  
}


setInterval(function(){
  game();
}, 1000/30)
