var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");
var static;
var color;
canvas.height =600;
canvas.width =1200;

canvas.addEventListener("touchmove", function(e){
  click.x = e.page[0].x;
  click.y = e.page[0].y;
}, false);
var click ={
x: 5000,
y: 5000,
height: 15,
width: 15
};

function update(){
  color = document.getElementById("color").value;
}

function render(){
 ctx.beginPath();
 ctx.arc(click.x, click.y, click.width, 0, 3.14159264);
 ctx.fillStyle =color;
 ctx.fill();
}

function loop(){
  update();
  render();
  window.requestAnimationFrame(function(){
    loop();
  }, 1000/30);
}
