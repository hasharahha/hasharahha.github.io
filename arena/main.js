//And the Game begins
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];
//player class
var player ={
  x: 20,
  y: 20,
  height: 32,
  width: 16,
  score: 0,
  src: "https://dl.dropboxusercontent.com/s/006jpxndv604hgk/player.png",
  eastX: -34,
  eastY: 0,
  westX: -51,
  westY: 0,
  frontX: 0,
  frontY: 0,
  backX: -17,
  backY: 0
};
var playerDirectionX = player.frontX;
var playerDirrectionY = player.frontY;
