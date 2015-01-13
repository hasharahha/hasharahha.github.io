
if(localStorage.getItem("user")){
  var user = localStorage.getItem("user");
}
else{
  document.getElementById("welcome").innerHTML ='Sorry failed to login';
  document.getElementById("msg").innerHTML ='You are not authenticated';
  setTimeout(function(){
  window.location ='http://hasharahha.github.io/cityscape/';
}, 2000);
}
