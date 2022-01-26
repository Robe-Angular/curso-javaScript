'use strict'

//BOM broiwser object Model
function getBom(){
	console.log(screen.width);
	console.log(screen.height);
	console.log(window.location.href);
}
getBom();
function redirect(url){
	window.location.href = url
}

function abrirVentana(url){
	window.open(url,'','width = 400, height = 300');
}