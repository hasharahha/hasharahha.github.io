if(localStorage.getItem("user")){
  var user = localStorage.getItem("user");
}
else{
  alert("Sorry you are not authenticated");
  window.location ='http://hasharahha.github.io/cityscape/';
}
