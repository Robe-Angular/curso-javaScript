'use strict'
/*
que nos diga si un número es par o impar, si no es válido que nos pida de nuevo el número
*/
var numero = parseInt(prompt('introduce el número',0))
while(isNaN(numero)){
	numero = parseInt(prompt('introduce el número',0))
}
if(numero==0){
	alert('el número es par')
}else if(numero > 0){
	if (numero % 2 == 1){
		alert('el número es impar')
	}else{
		alert('el número es par')
	}
}else{
	if (numero % 2 == -1){
		alert('el número es impar')
	}else{
		alert('el número es par')
	}
}