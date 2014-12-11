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
  
  var  tiles ={
  BlackBlock: true,
  WhiteBlock: true,
  GreenBlock: true,
  YellowBlock: false
  }
  
  var keys =[];
  
  window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
  })
  window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
  })
  
  function gameloop(){
    alert("hello");
    
    
    //The loop
    window.requestAnimationFrame(function(){
      gameloop();
    }, 1000/30);
  }

window.requestAnimationFrame(function(){
  gameloop();
}, 1000/30);
