//And the Game begins
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var keys =[];

//player class
var player ={
  height: 32,
  width: 16,
  src: "https://dl.dropboxusercontent.com/s/006jpxndv604hgk/player.png",
  eastX: -34,
  eastY: 0,
  westX: -51,
  westY: 0
}
