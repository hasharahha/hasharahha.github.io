//Made by Jacob Bondley
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var player ={
  x: 55,
  y: 40,
  height: 10,
  width: 10,
  speed: 2,
  health: 3,
  fuel: 6000
  };
  var cpu ={};
  /*
  
  block:[10, 10, 30, 5],
  block2:[35, 20, 30, 5]
  block3:[]
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
    ctx.fillStyle ="yellow";
    ctx.clearRect(1, 1, 500, 400);
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle ="black"
    ctx.font ="bold 15px helvetica";
    ctx.fillText("Your Fuel: "+player.fuel, 130, 19);
    ctx.fillRect(10, 20, 30, 5);
    ctx.fillRect(45, 50, 40, 5);
    ctx.fillRect(80, 20, 15, 5);
  }
  function update(){
    loadLevel();
    if(keys[37]){
      player.x -= player.speed;
    }
    if(keys[39]){
      player.x += player.speed;
    }
    if(keys[32]&& player.fuel > 1){
      player.y -= player.speed;
      player.fuel -=5;
    }
player.y +=1;
  }
  function render(){
  //This isn't needed because, load level will render everything exept enemies
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

setInterval(function(){
  update();
}, 1000/30)

window.requestAnimationFrame(function(){
  gameloop();
}, 1000/30);
