if(localStorage.getItem("user")){
  var user = localStorage.getItem("user");
}
else{
  document.getElementById("welcome").innerHTML ='Sorry failed to login';
  setTimeut(function(){
  window.location ='http://hasharahha.github.io/cityscape/';
  }, 2000);
}
