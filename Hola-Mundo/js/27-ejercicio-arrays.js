'use strict'

/*
1.- Pida 6 números en pantalla y  los meta en un array
2.- Mostrar el array entero (Todos sus elementos) en el cuerpo de la  página y en la consola
3.- Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5.- Mostrar cuántos elementos tiene el array
6.- Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
*/
function mostrarArray(elementos, textoCustom = ""){
	document.write('<h1>Contenido del array'+textoCustom+'</h1>');
	document.write('<ul>');
	elementos.forEach((elemento,index)=>{
	document.write("<li>"+elemento+"</li>")
});
	document.write('</ul>');
}

/*var numeros = new Array(6);*/
var numeros=[];

for(var i = 0; i <= 5; i++){
	/*numeros[i] = parseInt(prompt('Introduce un número', 0));*/
	numeros.push(parseInt(prompt('Introduce un número', 0)));
}
//Mostrar en el cuerpo de la página
mostrarArray(numeros, 'ordenado');

document.write('<h1>Contenido del array</h1>')
console.log(numeros);
numeros.forEach((numero,index)=>{
	document.write("<strong>"+numero+"</strong><br/>")
})

//ordenar y mostrar
numeros.sort(function(a, b){return a-b});
console.log(numeros);
//invertir y mostrar
numeros.reverse();
mostrarArray(numeros,'revertido');

//Contar Índice
document.write ('El array tiene: '+ numeros.length + 'elementos');

//Busqueda
var busqueda = parseInt(prompt('Busca un número', 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
document.write('<h1>Encontrados</h1>');
document.write('Posición de la búsqueda: '+ posicion + '</h1>');
}else{
document.write('<h1>No encontrados</h1>');
}


