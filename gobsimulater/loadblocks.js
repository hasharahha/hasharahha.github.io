//Block Configuration
var blockCanvas = document.getElementById("blocktiles");
var setb = blockCanvas.getContext("2d");
var rnd;
var blocktile = new Image();
blocktile.src ="https://dl.dropboxusercontent.com/s/3qb4u8ws3ehqops/block_tiles.jpg"
blocktile.onload = function(){
loadloop();
}
var blockpath =[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function renderblcoks(){
  
}

function loadloop(){
  renderblocks();
  window.requestAnimationFrame(function(){
    loadloop();
  }, 100);
}
