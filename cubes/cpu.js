//Ai for enemy
var movements =[];
setInterval(function(){
Move();
AI();
}, 1000)

function Move(){
if(move ==="34"){
  enemy.y -=1;
}
else if(move ==="300"){
  enemy.x +=1;
}
else if(move ==="250"){
  enemy.y -=2;
}

}

function AI(){
var move = Math.floor(Math.random()*400)
var rnd = Math.floor(Math.random()*10);
}
