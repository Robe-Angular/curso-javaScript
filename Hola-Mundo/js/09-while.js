'use strict'
//bucle while
var year = 2018;
while(year != 1991){
	console.log("Estamos en el año" + year);
	year--;
	if(year==2000){
		break;
	}
}
var years = 30;
//Do while
do{
	alert("Solo cuando sea diferente a 20 ");
	years --;
}while(years > 25)