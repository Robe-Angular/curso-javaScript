
'use strict'

window.addEventListener('load', function(){
	console.log('DOM cargado');
	
	var formulario = document.querySelector('#formulario');
	var box_dashed = document.querySelector('.dashed');
	box_dashed.style.display = 'none';


	formulario.addEventListener('submit', function(){
		console.log('evento submit capturado');

		var nombre = document.querySelector('#nombre').value;
		var apellido = document.querySelector('#apellidos').value;
		var edad = parseInt(document.querySelector('#edad').value);

		if (nombre.trim() == null || nombre.trim().length == 0){
			alert('El nombre no es válido');
			document.querySelector('#error_nombre').innerHTML = 'El nombre no es válido';
			return false;
		}else{
			document.querySelector('#error_nombre').style.display = 'none';
		}
		if (apellido.trim() == null || apellido.trim().length == 0){
			alert('Los apellidos no son válidos');
			return false;
		}
		if (edad == null || nombre.trim().length <= 0 || isNaN(edad)){
			alert('La edad no es válida');

			return false;
		}
		console.log(typeof edad);
		box_dashed.style.display = 'block';
		var datos_usuario = [nombre, apellido, edad];

		var p_nombre = document.querySelector('#p_nombre span');
		var p_apellidos = document.querySelector('#p_apellidos span');
		var p_edad = document.querySelector('#p_edad span');

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellido;
		p_edad.innerHTML = edad;
		/*
		for (let indice in datos_usuario){
			var parrafo = document.createElement('p');
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		*/
	});
	
});