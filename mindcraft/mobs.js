var zombieSprite = new Image();
zombieSprite.src ="https://dl.dropboxusercontent.com/s/3cz7l0dllf7mibd/zombie.png";

var zombie ={
  height: 64,
  width: 32,
  x: Math.random()*700,
  y: 98,
  spriteX: 0,
  spriteY: 0,
  update: function(){
    context.drawImage(zombieSprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};

initMobs();

function initMobs(){
  zombie.update();
  window.requestAnimaionFrame(function(){
    initMobs();
  }, 1000/30);
}
