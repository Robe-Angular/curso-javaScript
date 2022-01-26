'use strict'



function cambiaColor(color){
	caja.style.background = color;
}
//Conseguir objetos con un Id
//var caja = document.getElementById('micaja');
var caja = document.querySelector('#micaja');

caja.innerHTML = '¡Texto en la caja desde JS!';
caja.style.background = "red";
caja.style.color = "white";
caja.className = "hola hola2";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2];

contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";
console.log(todosLosDivs);
/*
todosLosDivs.forEach((valor,indice) =>{
	var parrafo = document.createElement('p');
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);
	document.querySelector(#miseccion).appendChild(parrafo);

});
*/

var hr = document.createElement('hr');


for (let valor in todosLosDivs){
	
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement('p');
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.prepend(texto);
		document.querySelector("#miseccion").append(parrafo);	
	}
document.querySelector('#miseccion').append(hr)

	
}



//Conseguir elementos por su clase css 
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

for(let div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = 'red';		
	}
	console.log(divsRojos[div]);
	
}

console.log(divsRojos);

var id = document.querySelector("#encabezado");
console.log(id);
var etiqueta = document.querySelector("div");

console.log(etiqueta);


