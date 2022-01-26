'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

peliculas.reverse();
console.log(peliculas);
var cine= [categorias, peliculas];

/*console.log(cine[0][1]);
console.log(cine[1][2]);*/
/*
var elemento = '';
do{
		elemento = prompt('introduce tu pelicula');
		peliculas.push(elemento);
}
while (elemento != 'ACABAR');
*/

var indice = peliculas.indexOf('Gran Torino');


if(indice > -1){
	peliculas.splice(indice, 1);
}
var  peliculas_string = peliculas.join();

var cadena = 'Ok mein freunde i levu u';
var cadena_array = cadena.split(" ")
console.log(indice);

console.log(cadena_array);
