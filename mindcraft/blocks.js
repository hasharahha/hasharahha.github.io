var c = document.getElementById("terrain");
var context = c.getContext("2d");
var block = new Image();
block.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";

block.onload = function(){
  
}

c.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
  if(click.y < 400){
    click.y = click.y -=20;
    click.x = click.x -=10;
    context.drawImage(blocks, 448, 0, 32, 32, click.x, click.y, 32, 32);
  }


