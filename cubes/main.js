var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var speed = 3;
var player ={
  x: 10,
  y: 10,
  width: 20,
  height: 20
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
}
function render(){
  ctx.fillRect(player.x, player.y, player.width, player.height);
  if(player.y <0){
    player.y = 0;
  }
  else if(player.y > 380){
    player.y = 380;
  }
}

setInterval(function(){
  game();
}, 1000/30)
