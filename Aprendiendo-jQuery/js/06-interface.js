$(document).ready(function(){

	//Mover elemento por la página
	$('.elemento').draggable();
	$('.elemento p').draggable();
	//Redimensionar
	$('.elemento').resizable();
	//Elementos seleccionables y ordenables

	//$('.lista-seleccionable').selectable();

	$('.lista-seleccionable').sortable({
		update: function(event,ui){
			console.log('Ha cambiado la lista')
		}
	});

	//Dropp
	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop: function(){
			console.log('has soltado algo dentro de el area');
		}
	});
	//Efectos
	$('#mostrar').click(function(){
		$('.caja-efectos').toggle('shake','slow');
	});
	//Tooltip
	$(document).tooltip();

	//Dialog
	$('#lanzar-popup').click(function(){
		$('#popup').dialog();
	});
	//Date picker
	$('#calendario').datepicker();
	//Tabs
	$('#pestanas').tabs();

});