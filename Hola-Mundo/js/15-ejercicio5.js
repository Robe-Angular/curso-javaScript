'use strict'
/*
Muestre todos los números divisores de un número introducido en un prompt
*/
'use strict'
/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/
var numero1 = parseInt(prompt("introducir el número 1"),0);
console.log('Los números divisores son: ')

for(var i = 0; i <= numero1; i++){
	if (numero1 % i == 0){
		console.log(i);
	}
}