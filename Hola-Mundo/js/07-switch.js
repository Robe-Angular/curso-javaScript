"use strict"
var edad = 40;
var imprime = "";
switch(edad){
	case 18:
		imprime = "acabas de cumplir la mayoría de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Crisis de los cuarenta";
	break;
	case 75:
		imprime = "Eres ya un anciano";
	break;
	default:
		imprime = "tu edad es neutra";
	break;
}
console.log(imprime);