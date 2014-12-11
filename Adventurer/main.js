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
  alert("loading");
  var keys =[];
  
  window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
  })
  window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
  })
  function loadLevel(){
    ctx.fillRect(10, 20, 30, 5);
    ctx.fillRect(25, 30, 30, 5);
  }
  function update(){
    loadLevel();
  }
  function render(){
    
  }
  function process(){
    
  }
  
  function gameloop(){
    render();
    update();
    process();
    
    //The loop
    window.requestAnimationFrame(function(){
      gameloop();
    }, 1000/30);
  }



window.requestAnimationFrame(function(){
  gameloop();
}, 1000/30);
