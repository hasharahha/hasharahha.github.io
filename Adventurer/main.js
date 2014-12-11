//Made by Jacob Bondley
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var player ={
  x: 20,
  y: 20,
  height: 15,
  width: 15,
  speed: 2,
  health: 3
  };
  var cpu ={};
  /*
  var  tiles ={
  block:[10, 10, 30, 5],
  block2:[15, 20, 30, 5]
  }
  */
  
  var keys =[];
  
  window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
  })
  window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
  })
  cpu.loadLevel = function(){
    ctx.fillRect(10, 10, 30, 5);
  }
  cpu.update =function(){
    cpu.loadLevel();
  }
  cpu.render = function(){
    
  }
  cpu.process = function(){
    
  }
  
  function gameloop(){
    cpu.render();
    cpu.update();
    cpu.process();
    
    //The loop
    window.requestAnimationFrame(function(){
      gameloop();
    }, 1000/30);
  }

cpu.update = function(){
  //key updates
}



window.requestAnimationFrame(function(){
  gameloop();
}, 1000/30);
