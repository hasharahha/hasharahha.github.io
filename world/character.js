var placeholder; // logic for character creation 
var players ={};
var playID = [];
function createPlayer(name, age, species){
   this.x = Math.floor(Math.random()*800);
   this.y = Math.floor(Math.random()*400);
   this.height=16;
   this.width=16;
   this.name = name;
   this.luck = Math.floor(Math.random()*10);
   this.age = age;
      if(this.species){
     this.species = species;
   }else{
     this.species = "human";
   }
  if(species=="human"){
    this.mana=0;
     this.health=150;
  }else if(species=="elve"){
    this.mana=500;
    this.health=100;
  }else if(this.species=="demihuman"){
      this.mana=100;
      this.health=300;
    }else{
   this.mana=this.luck; 
  }
  this.mana+=Math.round(this.luck);
   this.id = playID.length;
   playID[playID.length] = this;
}

players["NPC"] = new createPlayer("NPC", 17, "demihuman");
console.log(JSON.stringify(players));


// render stuff
var canvas = document.getElementById("world");
var ctx = canvas.getContext("2d");
ctx.fillRect(100, 100, 16, 30);

function tick(){
   players["NPC"].x++; // testing things out
   players["NPC"].y++;
   
   for(var i=0; i<playID.length; i++){
    playID[i] = players[playID[i].name];
      console.log(JSON.stringify(players[playID[i].name]));
   }
   ctx.clearRect(0, 0, 1000, 1000);
 for(var i=0; i<playID.length; i++){
  ctx.fillRect(playID[i].x, playID[i].y, playID[i].width, playID[i].height);  
 }
}

setInterval(function(){
   tick();
}, 1000/30);


