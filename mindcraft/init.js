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
  click.x = changedTouches[0].pageX;
  click.y = changedTouches[0].pageY;
  alert("("+click.x+", "+click.y+")");
}, false);

screen.addEventListener("touchend", function(e){
  click.x =0;
  click.y =0;
}, false);

/*
var rightbtn ={
  x: 992,
  y: 480,
  update: function(){
    icon.fillStyle ="yellow",
    icon.fillRect(this.x, this.y, 32, 32);
  }
}

function process(){
  
}
function render(){
  player.update();
  rightbtn.update();
}

function gameloop(){
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
*/
