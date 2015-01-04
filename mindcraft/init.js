var screen = document.getElementById("indicators");
var icon = screen.getContext("2d");
//this is where all button's will go
var click ={
  height: 32,
  width: 32,
  x: 0,
  y: 0
}
screen.addEventListener("touchstart", function(e){
  click.x = touches[0].pageX;
  click.y = touches[0].pageY;
}, false);

screen.addEventListener("touchend", function(e){
  click.x =0;
  click.y =0;
}, false);

function process(){
  
}

