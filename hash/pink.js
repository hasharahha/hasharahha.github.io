var myServer = "https://gameofbombs-hasharahha14.c9users.io/";
var version ="lolbro";
if(localStorage.getItem("pinkInfo")&&localStorage.getItem("cversion")==version){
	console.log("loading ticks from client");
	var gar = document.createElement("script");
	gar.type ="text/javascript";
	gar.id="hashyP";
	gar.innerHTML=localStorage.getItem("pinkInfo");
	document.body.appendChild(gar);
	console.clear();
	var elem = document.getElementById("hashyP");
	elem.remove();
	console.log("finished loading atlas");
}else{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState==4&&xhttp.status==200){
			localStorage.setItem("hashInfo", xhttp.responseText);
			console.log("pink atlas loading");
			var gar = document.createElement("script");
			gar.type ="text/javascript";
			gar.id="hashy";
			gar.innerHTML=localStorage.getItem("pinkInfo");
			document.body.appendChild(gar);
			var elem = document.getElementById("hashyP");
			elem.remove();
			console.clear();
			console.log("finished loading");
		}
	}
	xhttp.open("GET", myServer+"pink.js?v="+Math.random()*20, true);
	xhttp.send();
	localStorage.setItem("cversion", version);
}
