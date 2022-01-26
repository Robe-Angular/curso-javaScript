'use strict'
/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/
var numero1 = parseInt(prompt("introducir el número 1"),0);
var numero2 = parseInt(prompt("introducir el número 2"),0);
document.write("De " + numero1 + " a " +  numero2 + " hay estos números: <br/>");

if (numero1 == numero2 || (numero1 + 1) == numero2 || (numero2 + 1) == numero1 || isNaN(numero1) || isNaN(numero2) ){
	console.log('No hay números en medio');
	document.write('No hay números en medio');
}else if(numero1 > numero2){
	for(var i = numero2+1; i < numero1; i++){
		console.log(i);
		document.write(i + '<br/>');
	}
}else {
	for(var i = numero1+1; i < numero2; i++){
		console.log(i);
		document.write(i + '<br/>');
	}
	/*debugger;*/
}