var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var playerimg = new Image();
var blocks = new Image();
blocks.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
blocks.onload = function(){
  loadTerrain();
}
playerimg.src ="https://dl.dropboxusercontent.com/s/1jp0m4zu92697hw/player.png";
var keys =[];
var game ={
  height: 600,
  width: 1200,
  ping: 1000/30
};

canvas.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
}, false);

canvas.addEventListener("touchend", function(){
  click.x =0;
  click.y =0;
  player.spriteX =0;
  player.spriteY =0;
}, false);

var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
};

//buttons
var leftbtn ={
  height: 64,
  width: 64,
  x: 900,
  y: 520
};
var rightbtn ={
  height: 64,
  width: 64,
  x: 1000,
  y: 520
};


//end of buttons
var player ={
  height: 64,
  width: 32,
  x: 10,
  y: 10,
  spriteX: 0,
  spriteY: 0,
  state: "idol",
  health: 20,
  speed: 2,
  weight: 3
};
gameloop();
function update(){
  if(collision(click, leftbtn)){
    player.spriteX =96;
    player.x -= player.speed;
  }
  if(collision(click, rightbtn)){
    player.spriteX =64;
    player.x += player.speed;
  }
  
}
function process(){
  if(player.y < 400-player.height){
    player.y +=player.weight;
  }
}
function render(){
canvas.height = game.height;
canvas.width = game.width;
ctx.clearRect(0, 0, game.width, game.height);
ctx.drawImage(playerimg, player.spriteX, player.spriteY, player.width, player.height, player.x, player.y, player.width, player.height);


ctx.fillRect(leftbtn.x, leftbtn.y, leftbtn.width, leftbtn.height);
ctx.fillRect(rightbtn.x, rightbtn.y, rightbtn.width, rightbtn.height);

}

function gameloop(){
update();
process();
render();
window.requestAnimationFrame(function(){
 gameloop(); 
}, game.ping);
}

/*
function loadTerrain(){
  var a;
  var ax =0;
  var ay =0;
  for(a=0; a < 32; a++){
    ax +=32;
    ay = game.height-128;
    ctx.drawImage(blocks, 0, 0, 32, 32, ax, ay, 32, 32);
  }
}
*/

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
}
/*
var c = document.getElementById("terrain");
var context = c.getContext("2d");
var block = new Image();
block.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";
alert("Genrating terrain..")

block.onload = function(){
  updateloop();
}

c.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
}, false);

c.addEventListener("touchend", function(){
  click.x = 0;
  click.y = 0;
}, false);
*/

/*
var terrain =[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function renderblocks(){
  for(var y = 0; y < terrain.length; y++){
    for(var x = 0; x < terrain[y].length; x++){
      if(terrain[y][x] == 1){
        context.drawImage(blocks, 0, 0, 32, 32, x*32, y*32, 32, 32);
      }
    }
  }
  
}

funtion updateloop(){
  renderblocks();
  window.requestAnimationFrame(function(){
   updateloop(); 
  }, 1000/30);
}
*/


