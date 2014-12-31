var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var game ={
  height: 600,
  width: 1300,
  ping: 1000/30,
  update: function(){
    
  },
  process: function(){
    
  },
  render: function(){
    canvas.height = this.height;
    canvas.width = this.width;
  }
}


function gameloop(){
game.update();
game.process();
game.render();
player.update();
window.requestAnimationFrame(function(){
 gameloop(); 
}, game.ping);
}
