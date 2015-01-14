//login script
if(localStorage.getItem("user")){
  window.location ='main.html';
}

function Auth(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  
  if(USERS[user]&&pass ==USERS[user][1]){
    localStorage.setItem("user", user);
    window.location ='main.html?USER='+user;
  }
  else{
    alert("Incorrect user/pass");
  }
  
}
alert("loaded :)");
