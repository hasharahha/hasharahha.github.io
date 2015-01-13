if(localStorage.getItem("user")){
  var user = localStorage.getItem("user");
}
if(localStorage.getItem("user") ===undefined){
  document.getElementById("welcome").innerHTML ='Sorry failed to login';
  document.getElementById("msg").innerHTML ='You are not authenticated';
  alert("Error");
  window.location ='http://hasharahha.github.io/cityscape/';
}
