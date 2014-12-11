//Thanks for using my games, Feel free to use my code
//By jacob Bondley
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var static;
var player_1 ={
  x: 20,
  y: 20,
  height: 10,
  width: 10,
  speed: 3,
  score: 0,
  fuel: 6000,
  color:"yellow"
}
/*
Controls:
Player_1: 
A LEFT [65]
D RIGHT [68]
W UP [87]
Player_2:
Larrow LEFT [37]
Rarrow RIGHT [39]

*/
