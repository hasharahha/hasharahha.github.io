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
  height: 20,
}

var destroyer ={
  x: 200,
  y: 60,
  width: 5,
  height: 5
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
  bombs: 1,
  time: 150
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
  if(collision(destroyer, player)){
    AttackPlayer();
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
if(keys[40]){
  player.y += speed;
}
if(keys[39]){
  player.x += speed;
}
if(keys[37]){
  player.x -= speed;
}
if(keys[32]){
bomb.x = player.x 
bomb.y = player.y+15
Explode();
score.bombs ==0;
}
if(keys[65]){
  bomb.x -=1;
}
if(keys[68]){
bomb.x +=1;  
}
if(keys[83]){
  bomb.y +=1;
}
if(keys[87]){
  bomb.y -=1;
}
if(destroyer.x < 1){
  destroyer.x =280;
}
function Explode(){
  
}
function AttackPlayer(){
  score.health -=1;
}
}
//Jb
/*
function Move(){
var rnd = Math.floor(Math.random()*1000);  
if(rnd==250){
enemy.y -=2;
enemy.x -=1;
}
if(rnd==500){
  enemy.x -=1;
}
if(rnd==750){
  enemy.x +=1;
}
}
*/
//JB
function render(){
  ctx.fillStyle ="blue"
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle ="green";
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  ctx.fillStyle ="black";
  ctx.fillRect(bomb.x, bomb.y, bomb.width, bomb.height)
  ctx.fillStyle ="yellow";
  ctx.fillRect(destroyer.x, destroyer.y, destroyer.width, destroyer.height)
  ctx.font ="bold 16px helvetica";
  ctx.fillStyle ="red";
  ctx.fillText("Health: "+score.health, 20, 20);
  ctx.fillStyle ="black";
  ctx.fillText("Score: "+score.points, 20, 35);
  ctx.fillText("Bombs: "+score.bombs, 20, 50);
  ctx.fillText("Time-left:"+ score.time, 20, 65);
  ctx.font ="bold 12px helvetica";
  ctx.fillText("Made by Jacob Bondley", 20, 80);
  setTimeout(function(){
    destroyer.x -=1;
  }, 1500);
  if(player.y <0){
    player.y = 0;
  }
  else if(player.x <0){
    player.x = 0;
  }
}

function process(){
  score.points +=1;
  enemy.x = Math.floor(Math.random()*300);
  enemy.y = Math.floor(Math.random()*125);
}
function Respawn(){
  score.points -= 10;
  player.x = Math.floor(Math.random()*125);
  player.y = Math.floor(Math.random()*115);
  health -=1;
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
  
}
function countdown(){
  score.time -=1;
  if(score.time < 1){
    score.time=0;
    alert("Game over")
    window.location ='http://hasharahha.github.io/cubes/index.html';
  }
}

setInterval(function(){
  game();
}, 1000/30)

setInterval(function(){
  countdown();
}, 1500)

//Movement for enemy , sort of an ametur but i'll make it work




