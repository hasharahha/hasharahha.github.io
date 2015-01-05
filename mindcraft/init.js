var screen = document.getElementById("indicators");
var icon = screen.getContext("2d");
//this is where all button's will go
var pos =0;
var heartIndicator = new Image();
heartIndicator.src ="https://dl.dropboxusercontent.com/s/2g4zehp70amhhf8/Heart_Stages.jpeg";
var hungerIndicator = new Image();
hungerIndicator.src ="https://dl.dropboxusercontent.com/s/szjsmdzl7mele2i/Hunger.jpeg";
screen.width =1024;
screen.height =512;
var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
};
var error ="No errors";
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
  width: 96,
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
  icon.clearRect(0, 0, screen.width, screen.height);
  icon.fillStyle ="black";
  icon.fillRect(rightbtn.x, rightbtn.y, rightbtn.width, rightbtn.height);
  icon.fillRect(leftbtn.x, leftbtn.y, leftbtn.width, leftbtn.height);
  icon.fillRect(jumpbtn.x, jumpbtn.y, jumpbtn.width, jumpbtn.height);
  icon.fillStyle ="white";
  icon.fillText("Left", leftbtn.x, leftbtn.y);
  icon.fillText("Right", rightbtn.x, rightbtn.y);
  icon.fillText("Jump", jumpbtn.x, jumpbtn.y);
  icon.font ="14px Helvetica";
  icon.clearRect(10, 10, 400, 40);
  icon.fillText("Errors: "+error, 10, 20);
  icon.drawImage(heartIndicator, 0, 0, 8*player.health, 16, 20, 20, 8*player.health, 16);
  icon.drawImage(hungerIndicator, 0, 0, 16*player.hunger, 16, 20, 40, 16*player.hunger, 16);
}
function process(){
  if(collision(click, rightbtn)){
    player.spriteX =64;
    pos -= 0.05;
    ctx.translate(pos, 0);
    context.translate(pos, 0);
    player.x += player.speed;;
    player.stage ="moving";
  }
  if(collision(click, leftbtn)){
    player.spriteX =96;
    pos += 0.05;
    ctx.translate(pos, 0);
    context.translate(pos, 0);
    player.x -= player.speed;
    player.stage ="moving";
    
  }
  if(collision(click, jumpbtn)){
    jump();
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
