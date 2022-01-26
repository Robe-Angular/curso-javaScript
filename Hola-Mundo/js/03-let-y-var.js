'use strict'
//Pruebas con let y var
//Prueba con var
var numero = 40;
console.log(numero);//valor 40
if (true) {
	var numero = 50;
	console.log(numero);//valor 50
}
console.log(numero);//valor 50

//Prueba con let
var texto = "Curso JS victorroblesweb.es";
console.log(texto)//valor js
if (true) {
	let texto = "Curso laravel 5 victorroblesweb.es";
	console.log(texto)//valor laravel5
}
console.log(texto)//valor js