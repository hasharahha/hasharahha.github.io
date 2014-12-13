var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
//game class
var game ={
height: window.innerHeight,
width: window.innerWidth
fps: 1000/30,
speed: 1,
bg:gray
}

document.getElementById("game").setAttribute("style", "background-color: gray;");
document.getElementById("game").setAttribute("height", game.height);
document.getElementById("game").setAttribute("width", game.width);
