'use strict'
//Eventos del ratón

window.addEventListener('load',() =>{
	function cambiarColor(){
		console.log('Me has dado click');
		var bg = boton.style.background;
		if( boton.style.background == 'red'){
			boton.style.background = 'green';

		}else{
			boton.style.background = 'red';
		}
		boton.style.padding = '10px';
		boton.style.border ='1px solid #ccc';
		return true;
	}

	var boton = document.querySelector('#boton');

	//Click
	boton.addEventListener('click', function(){
		cambiarColor();
		console.log('this');
		this.style.border = '10px solid black'
	});

	//MouseOver

	boton.addEventListener('mouseover', function(){
		boton.style.background = "#ccc";
	});

	//MouseOut
	boton.addEventListener('mouseout', function(){
		boton.style.background = "black";
	});

	//Focus
	var input = document.querySelector('#campo_nombre')
	input.addEventListener('focus',function(){
		console.log('Estás haciendo foco en el input');
	});
	//Blur
	var input = document.querySelector('#campo_nombre')
	input.addEventListener('blur',function(){
		console.log('Estás haciendo blur en el input');
	});
	//Keydown
	var input = document.querySelector('#campo_nombre')
	input.addEventListener('keydown',function(){
		console.log('Estás haciendo keydown en el input',String.fromCharCode(event.keyCode));
	});
	//KeyPress
	var input = document.querySelector('#campo_nombre')
	input.addEventListener('keypress',function(){
		console.log('Estás haciendo keypress en el input',String.fromCharCode(event.keyCode));
	});
	//Keyup
	var input = document.querySelector('#campo_nombre')
	input.addEventListener('keyup',function(){
		console.log('Estás haciendo keyup en el input',String.fromCharCode(event.keyCode));
});

});

