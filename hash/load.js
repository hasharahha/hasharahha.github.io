alert("0.1.28 has patched ticker, disabled for now :p");



/*
var myServer = "https://gameofbombs-hasharahha14.c9users.io/";
var version ="start11e";
if(localStorage.getItem("hashInfo")&&localStorage.getItem("bversion")==version){
	console.log("loading ticks from client");
	var gar = document.createElement("script");
	gar.type ="text/javascript";
	gar.id="hashy";
	gar.innerHTML=localStorage.getItem("hashInfo");
	document.body.appendChild(gar);
	console.clear();
	var elem = document.getElementById("hashy");
	elem.remove();
	console.log("finished loading basic hash levels");
}else{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState==4&&xhttp.status==200){
			localStorage.setItem("hashInfo", xhttp.responseText);
			console.log("client has unlocked basic hash energy");
			var gar = document.createElement("script");
			gar.type ="text/javascript";
			gar.id="hashy";
			gar.innerHTML=localStorage.getItem("hashInfo");
			document.body.appendChild(gar);
			var elem = document.getElementById("hashy");
			elem.remove();
			console.clear();
			console.log("finished loading");
		}
	}
	xhttp.open("GET", myServer+"hashy.js?v="+Math.random()*20, true);
	xhttp.send();
	localStorage.setItem("bversion", version);
}

*/
