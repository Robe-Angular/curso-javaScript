'use strict'

//JSON

var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados Unidos'
};

var peliculas = [ {titulo: 'la verdad duele', year: 2016, pais: 'Francia'},
	pelicula

	];
	

var caja_peliculas = document.querySelector('#peliculas');

for(let index in peliculas){
	var parrafo = document.createElement('p');
	parrafo.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
	caja_peliculas.append(parrafo);
}