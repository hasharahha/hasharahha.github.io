var static;
var notes;
var save;

if(localStorage.getItem(usernotes)){
static = document.createElement('textarea');
static.id ="notes";
static.width = 1000;
static.height =500;
document.body.appendChild(static);
}
else{
  alert("No notes");
static = document.createElement('textarea');
static.id ="notes";
static.width = 1000;
static.height =500;
document.body.appendChild(static);
}

setInterval(function(){
  notes = document.getElementById("notes").value;
  localStorage.setItem(usernotes, notes);
}, 1500);
