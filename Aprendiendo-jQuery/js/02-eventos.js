'use strict'
$(document).ready(function(){
	//Mouse over y Mouseout
	var caja = $('#caja');
/*
	caja.mouseover(function(){
		$(this).css('background', 'red');
	});
	caja.mouseout(function(){
		$(this).css('background', 'green');
	});
	*/
	// Hover
	function cambiaRojo(){
		$(this).css('background', 'red');
	}
	
	function cambiaVerde(){
		$(this).css('background', 'green');
	}
	caja.hover(cambiaRojo,cambiaVerde);

	//Click
	caja.click(function(){
		$(this).css('background', 'blue')
				.css('color', 'white')
	})

	caja.dblclick(function(){
		$(this).css('background', 'pink')
				.css('color', 'yellow')
	})
	//Focus y blur
	var nombre = $('#nombre');
	var datos = $('#datos');
	nombre.focus(function(){
		$(this).css('outline','unset')
				.css('border','2px solid green');
	})

	nombre.blur(function(){
		$(this).css('outline','unset')
				.css('border','1px solid #ccc');
		
		datos.text($(this).val()).show();
	});
	
	//Mousedown y Mouseup
	datos.mousedown(function(){
		$(this).css('border-color', 'gray')
	});

	datos.mouseup(function(){
		$(this).css('border-color', 'black')
	});
	//Mousemove
	$(document).mousemove(function(){
		$('body').css('cursor','none');
		var sigueme = $('#sigueme');
		console.log('En x: ' + event.clientX);
		console.log('En x: ' + event.clientY);
		sigueme.css('left', event.clientX)
					.css('top', event.clientY);
	});

});