var screen = document.getElementById("indicators");
var icon = screen.getContext("2d");
//this is where all button's will go
screen.width =1024;
screen.height =512;
var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
};
alert("initializing...");
screen.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY;
}, false);

screen.addEventListener("touchend", function(e){
  click.x =0;
  click.y =0;
  player.spriteX =0;
}, false);

var rightbtn ={
 x: 980,
 y: 480,
 width: 32,
 height: 32
};
var leftbtn ={
  x: 916,
  y: 480,
  height: 32,
  width: 32
};

var jumpbtn ={
  x: 916,
  y: 416,
  height: 32,
  width: 32,
}

gameloop();
/*
functon mine(){
  try{
  if(terrain[Math.round(click.y/32)][Math.round(click.x/32)] ==1){
    terrain[Math.round(click.y/32)][Math.round(click.x/32)] =0;
  }
  }catch(e){
    alert(e);
  }
}
*/
function update(){
  
}
function render(){
  player.update();
  icon.fillRect(rightbtn.x, rightbtn.y, rightbtn.width, rightbtn.height);
  icon.fillRect(leftbtn.x, leftbtn.y, leftbtn.width, leftbtn.height);
  icon.fillRect(jumpbtn.x, jumpbtb.y, jumpbtn.width, jumpbtn.height);
}
function process(){
  if(collision(click, rightbtn)){
    player.spriteX =64;
    player.x += player.speed;
    player.stage ="moving";
  }
  if(collision(click, leftbtn)){
    player.spriteX =96;
    player.x -= player.speed;
    player.stage ="moving";
  }
  if(collision(click, jumpbtn)){
    player.y -= 42;
  }
}

function gameloop(){
  
  update();
  render();
  process();
  
  window.requestAnimationFrame(function(){
    gameloop();
  }, 1000/30);
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
  
}
