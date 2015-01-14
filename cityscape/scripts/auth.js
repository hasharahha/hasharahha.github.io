//login script
if(localStorage.getItem("user")){
  window.location ='main.html';
}

function Auth(){
  var user = document.getElememtById("username").value;
  var pass = document.getElementById("password").value;
  
  if(USERS[user]&&USERS[user][1][pass]){
    localStorage.setItem("user", user);
  }
  else{
    alert("Incorrect user/pass");
  }
  
}
alert("loaded :)");
