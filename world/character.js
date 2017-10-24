var placeholder; // logic for character creation 
var players ={};
var playID = [];
function createPlayer(name, age, species){
   this.x = Math.floor(Math.random()*800);
   this.y = Math.floor(Math.random()*400);
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

players["Test"] = new createPlayer("Test", 17, "demihuman");
console.log(JSON.stringify(players));
