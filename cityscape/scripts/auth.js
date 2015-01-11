//auth
if(localStorage.getItem("user")){
  alert("You have been successfully logged in")
  window.location ='http://hasharahha.github.io/cityscape/main.html';
}

function Auth(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  
  if(user =="samuel2013"&&pass=="happynewyear"){
    localStorage.setItem("user", user);
    window.location ='http://hasharahha.github.io/cityscape/main.html';
  }
  else{
    localStorage.clear();
    alert("Incorrect user/pass");
  }
}
