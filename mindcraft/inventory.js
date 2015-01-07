//this will be inventory update code
/*
Notes:
Uses icon, so display is over writting terrain
*/
check();
function check(){
try{
if(player.inventory[0][0] ==1){
  icon.drawImage(blocks, 0, 0, 32, 32, 73, 73, 30, 30);
  icon.fillText(player.inventory[0][1], 72, 90);
}
if(player.inventory[0][0] ==2){
  icon.drawImage(blocks, 32, 0, 32, 32, 105, 73, 30, 30);
  icon.fillText(player.inventory[0][1], 104, 73, 30, 30);
}
}catch(e){
  error =e;
}
setTimeout(function(){
  check();
}, 1000/30);
}
