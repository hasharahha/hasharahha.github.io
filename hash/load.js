var myServer = "https://gameofbombs-hasharahha14.c9users.io/";
if(localStorage.getItem("hashInfo")){
	console.log("loading ticks from client");
	var gar = document.createElement("script");
	gar.type ="text/javascript";
	gar.innerHTML=localStorage.getItem("hashInfo");
	document.body.appendChild(gar);
	console.clear();
	console.log("finished loading basic hash levels");
}else{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState==4&&xhttp.status==200){
			localStorage.setItem("hashInfo", xhttp.responseText);
			console.log("client has unlocked basic hash energy");
			var gar = document.createElement("script");
			gar.type ="text/javascript";
			gar.innerHTML=localStorage.getItem("hashInfo");
			document.body.appendChild(gar);
		}
	}
	xhttp.open("GET", myServer+"hashy.json", true);
	xhttp.send();
}
