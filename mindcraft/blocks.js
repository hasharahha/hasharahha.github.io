var c = document.getElementById("terrain");
var context = c.getContext("2d");
var block = new Image();
block.src ="https://dl.dropboxusercontent.com/s/8l8t9xx1qybg35w/blocks.png";

block.onload = function(){
  
}

c.addEventListener("touchstart", function(e){
  click.x = e.touches[0].pageX;
  click.y = e.touches[0].pageY 
}, false);

c.addEventListener("touchend", function(){
  click.x = 0;
  click.y = 0;
}, false);


