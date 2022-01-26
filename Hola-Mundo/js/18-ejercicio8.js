'use strict'

/*
-pida dos números
-si metemos uno mal que lo vuelva a pedir
-En el cuerpo de la página, una alerta y la consola, el resultado de sumar, restar, multiplicar y dividir esas cifras
*/
var numero1 = parseInt(prompt("introducir el número 1"),0);
var numero2 = parseInt(prompt("introducir el número 2"),0);
while (isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("introducir el número 1"),0);
	numero2 = parseInt(prompt("introducir el número 2"),0);
}
document.write('Suma =' + (numero1 + numero2) + '<br/>' + 
				'Resta =' + (numero1 - numero2) + '<br/>' +
				'Multiplicación =' + (numero1 * numero2) + '<br/>' +
				'División =' + (numero1 / numero2) + '<br/>'
	);
console.log('Suma =' + (numero1 + numero2));
console.log('Resta =' + (numero1 - numero2));
console.log('División =' + (numero1 / numero2));
console.log('Multiplicación =' + (numero1 * numero2));
console.log('Suma =' + (numero1 + numero2) + '\n' + 
				'Resta =' + (numero1 - numero2) + '\n' +
				'Multiplicación =' + (numero1 * numero2) + '\n' +
				'División =' + (numero1 / numero2) + '\n'
	);

alert('Suma =' + (numero1 + numero2));
alert('Resta =' + (numero1 - numero2));
alert('División =' + (numero1 / numero2));
alert('Multiplicación =' + (numero1 * numero2));
alert('Suma =' + (numero1 + numero2) + '\n' + 
				'Resta =' + (numero1 - numero2) + '\n' +
				'Multiplicación =' + (numero1 * numero2) + '\n' +
				'División =' + (numero1 / numero2) + '\n'
	);