function Auth(){
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if(user =="HASHARAHHA14"&&pass =="JAB"){
  localStorage.setItem("user", "HASHARAHHA14");
  window.location ='http://hasharahha.github.io/mindcraft/dev.html';
}
else{
  alert("Incorrect user/pass");
}
}
