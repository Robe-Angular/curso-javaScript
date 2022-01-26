'use strict'
/*
Tabla de multiplicar de un número introducido por pantalla
*/

var numero = parseInt(prompt('Introduzca un número para ver su tabla de multiplicar', 0));
while(numero > 10 || numero < 0 || isNaN(numero) || numero % 1 != 0){
	numero = parseInt(prompt('Introduzca un número para ver su tabla de multiplicar', 0));
}
document.write('<h1>Tabla del '+ numero +'</h1>' +'<br/>');
for (var i = 0; i <= 10; i++){
	document.write(numero +"X"+i + "=" + (numero * i) + '<br/>');
}
//Todas las tablas
for (var c = 0; c<=10; c++){
	document.write('<h1>Tabla del '+ c +'</h1>' +'<br/>');
	for (var i = 0; i <= 10; i++){
		document.write(c +"X"+i + "=" + (c * i) + '<br/>');
	}	
}