var c = document.getElementById("game");
c.width =1024;
c.height =512;
var context = c.getContext("2d");
var playersprite = new Image();
playersprite.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var player={
  name:"Steve",
  height: 64,
  width: 32,
  spriteX: 0,
  spriteY: 0,
  health: 14,
  hunger: 25,
  speed: 1.5,
  weight: 3,
  x: 500,
  y: 10,
  stage: "idol",
  update: function(){
    context.clearRect(-5000, 0, 10000, c.height);
    context.fillText(this.name, this.x-6, this.y-5);
    context.drawImage(playersprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);

  if(collision(click, rightbtn)){
    this.spriteX =64;
    pos -= 0.005;
    ctx.translate(pos, 0);
    context.translate(pos, 0);
    this.x += player.speed;;
    this.stage ="moving";
  }
  if(collision(click, leftbtn)){
    this.spriteX =96;
    pos += 0.005;
    ctx.translate(pos, 0);
    context.translate(pos, 0);
    this.x -= player.speed;
    this.stage ="moving";
    
  }
  if(collision(click, jumpbtn)){
    jump();
  }
  if(this.x <= 0){
    this.x +=32;
  }
  }
};

function playerPosX(){
  static = player.x/32;
  return static;
}


function playerPosY(){
  static = player.y/32;
  return static;
}
