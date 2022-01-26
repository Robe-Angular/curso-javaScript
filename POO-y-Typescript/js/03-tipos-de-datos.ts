type letrasonumeros = string | number;

//string
let cadena: letrasonumeros ='victorroblesweb.es';

cadena = 12;
//number

let numero: number = 12;

let verdadero_falso: boolean = true;

let cualquiera: any = 'hola';

//Arrays
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];

let years: number[] = [12, 13, 14];

//Let y var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;
	console.log(numero1, numero2);
}

console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera,lenguajes, years);