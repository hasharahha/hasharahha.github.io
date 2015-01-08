var zombieSprite = new Image();
zombieSprite.src ="https://dl.dropboxusercontent.com/s/3cz7l0dllf7mibd/zombie.png";
alert("Mob models loaded");


var zombie ={
  rnd: 0,
  x: 20,
  y: 64,
  height: 64,
  width: 32,
  spriteX: 0,
  spriteY: 0,
  speed: 1,
  weight: 2,
  health: 10,
  rate: 10/10,
  stage: "idol",
  loaded: true,
  ai: false,
  update: function(){
    if(this.loaded){
      context.drawImage(zombieSprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }
};

mobmove();
function mobmove(){
  zombie.update();
window.requestAnimationFrame(function(){
  mobmove();
}, 1000/30);
}
