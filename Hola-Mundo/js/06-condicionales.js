'use strict'
//Condicional IF
// Si F es verdadero entonces haz algo
var edad = 24;
var nombre = 'David Suárez'
//si pasa esto

/*
Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual <=
	Igual: ==
	Distinto !=
*/
if(edad >= 18){
	//ejecuta esto
	console.log(nombre + " tiene " + edad + " años, es mayor de edad.");
	if(edad <= 33){
		console.log('Todavia eres millenial');
	}else if(edad >= 70){
		console.log('Eres anciano');
	}
	else{
		console.log('Ya no eres millenial');
	}
}else{
	console.log(nombre + " tiene " + edad + " años, es menor de edad.");
}
/*
Operadores lógicos 
and: &&
or: ||
not: !
*/
var year = 2018;
//negación

if (year != 2016) {
	console.log("El año no es 2016, realmente es: " + year);
}

//and
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post-moderna");
}
if (year == 2008 || (year >= 2018 && year==2028)){
	console.log("El año acaba en 8");
}else{
	console.log("Año no registrado");
}

//Switch