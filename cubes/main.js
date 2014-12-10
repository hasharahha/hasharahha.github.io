var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var speed = 3;
var player ={
  x: 10,
  y: 10,
  width: 20,
  height: 20
}
var enemy ={
  x: Math.random()*50,
  y: Math.random()*50,
  width: 20,
  height: 20
}

var bomb ={};
var score ={
  points: 0,
  health: 3,
  bombs: 0
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
collision();  
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
alert("You have 0 cubes");
}
}
function render(){
  ctx.fillStyle ="blue"
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle ="green";
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
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
  score ++;
  enemy.x = Math.random()*50;
  enemy.y = Math.random()*50;
}

function collision(first, second){
  if(first.x > second.x + second.width ||
  first.x + first.width < second.width ||
  first.y > second.y + second.height ||
  first.y + first.width < second.height){
    process();
  };
}

setInterval(function(){
  game();
}, 1000/30)
