$(document).ready(function(){
	var caja = $('#caja');
	var boton_mostrar = $('#mostrar');
	var boton_ocultar = $('#ocultar');
	var velocidad_efecto = 1000;

	boton_mostrar.hide();
	$('#mostrar').click(function(){
		$(this).hide();
		boton_ocultar.show();
		caja.fadeTo(velocidad_efecto, 1, function(){
			console.log('Cartel mostrado');
			caja.stop(false, true);
		});
	});

	$('#ocultar').click(function(){
		$(this).hide();
		boton_mostrar.show();
		caja.fadeTo(velocidad_efecto, 0, function(){
			console.log('Cartel ocultado');
			caja.stop(false, true);
		});
	});

	var todoenuno = $('#todo_en_uno');
	todoenuno.click(function(){
		caja.fadeToggle(velocidad_efecto);
	});

	var animar = $('#animar');

	animar.click(function(){
		caja.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'
		},velocidad_efecto)
		.animate({
			borderRadius: '900px',
			marginTop: '50px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
		caja.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'
		},velocidad_efecto);
	});
});