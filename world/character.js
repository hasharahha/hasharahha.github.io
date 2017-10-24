var placeholder; // logic for character creation
function createPlayer(name, health, age, species){
   this.name = name;
   this.health = health;
   this.luck = Math.floor(Math.random()*10);
   this.age = age;
      if(this.species){
     this.species = species;
   }else{
     this.species = "human";
   }
  if(species=="human"){
    this.mana=0;
  }else if(species=="elve"){
    this.mana=500;
  }else{
   this.mana=luck; 
  }
  this.mana+=Math.round(luck);
}
