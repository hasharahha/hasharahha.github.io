var zombieSprite = new Image();
zombieSprite.src ="https://dl.dropboxusercontent.com/s/3cz7l0dllf7mibd/zombie.png";
alert("Mob models loaded");


var zombie ={
  rnd: 0,
  x: Math.random()*1500,
  y: 98,
  height: 64,
  width: 32,
  spriteX: 0,
  spriteY: 0,
  speed: 1,
  weight: 2,
  health: 10,
  rate: 10/10,
  stage: "idol",
  loaded: false,
  ai: false,
  update: function(){
    if(this.loaded){
      context.drawImage(zombieSprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    window.requestAnimationFrame(function(){
      this.update();
    }, 1000/30);
  }
};

zombie.update();
