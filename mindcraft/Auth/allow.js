function Auth(){
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if(user =="HASHARAHHA14"&&pass =="JAB"){
  localStorage.setItem("user", "true");
  window.location ='http://hasharahha.github.io/mindcraft/dev.html';
}

}
