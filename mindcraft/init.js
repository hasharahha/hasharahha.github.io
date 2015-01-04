var screen = document.getElementById("indicators");
var icon = screen.getContext("2d");
//this is where all button's will go
screen.width =1024;
screen.height =512;
var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
};
alert("initializing...");
screen.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY;
  alert("("+click.x+", "+click.y+")");
}, false);

screen.addEventListener("touchend", function(e){
  click.x =0;
  click.y =0;
}, false);

var rightbtn ={
 x: 980,
 y: 480,
 width: 32,
 height: 32
};


function update(){
  
}
function render(){
  player.update();
  ctx.fillRect(rightbtn.x, rightbtn.y, rightbtn.width, rightbtn.height);
}
function process(){
  
}

function gameloop(){
  
  update();
  render();
  process();
  
  window.requestAnimationFrame(function(){
    gameloop();
  }, 1000/30);
}

function collision(first, second){
  return !(first.x > second.x + second.width||
  first.x + first.height < second.x||
  first.y > second.y + second.height||
  first.y + first.width < second.y)
  
  
}
