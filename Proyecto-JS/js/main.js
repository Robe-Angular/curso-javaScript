$(document).ready(function(){
	
	//Slider
	if (window.location.href.indexOf('index')> -1){
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200,
		    pager: false
	  	});
	}
  	//Posts
  	if (window.location.href.indexOf('index')> -1){ 
	  	var posts = [
	  		{
	  			title: 'Prueba de titulo 1',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 2',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 3',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 4',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 5',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 6',
	  			date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet egestas risus. Fusce consequat est sem, ac vehicula nibh aliquet nec. Aenean massa dui, maximus a turpis vitae, luctus finibus ante. Donec aliquet libero blandit nulla pharetra ornare. Duis eget elit blandit, eleifend est sit amet, porta tortor. Praesent aliquet tristique metus, id ultrices dui condimentum ut. Proin tincidunt nisi viverra turpis auctor, consectetur posuere dui varius. Curabitur neque odio, sollicitudin sed ultricies quis, finibus eu enim. Vestibulum quis rutrum nibh, quis aliquam turpis. Praesent vel tellus ultrices sem facilisis sollicitudin in eget magna. Sed tempor et elit eget molestie. Nulla pretium enim tortor, ut eleifend velit ornare luctus. Maecenas sollicitudin malesuada eleifend. Aenean pulvinar ante posuere nisi vulputate ornare. Phasellus rutrum eget turpis sed mattis. Etiam nisi purus, finibus non nibh at, consequat gravida felis.'
	  		}
	  	];
	  	posts.forEach((item, index) => {
	  		var post = `
		  		<article class = 'post'>
		  			<h2>${item.title}</h2>
							<span class="date">
								${item.date}
							</span>
							<p>
								${item.content}
							</p>
							<a href="#" class="button-more">Leer más</a>
				</article>
	  		`;
	  		console.log(post);
	  		$('#posts').append(post);
	  	});
	}
  	//Selector de tema
  	var theme=$('#theme');
  	var estilo = localStorage.getItem('tema');
  	theme.attr('href',estilo);
  	
  	$('#to-green').click(function(){  		
  		localStorage.clear();
  		localStorage.setItem('tema','css/green.css');
  		theme.attr('href','css/green.css');
  		console.log(localStorage.getItem('tema'));
  	});
  	$('#to-red').click(function(){  		
  		localStorage.clear();
  		localStorage.setItem('tema','css/red.css');
  		theme.attr('href','css/red.css');
  		console.log(localStorage.getItem('tema'));
  	});
  	$('#to-blue').click(function(){  		
  		localStorage.clear();
  		localStorage.setItem('tema','css/blue.css');
  		theme.attr('href','css/blue.css');
  		console.log(localStorage.getItem('tema'));
  	});
  	//Scroll arriba de la web
  	$('.subir').click(function(e){
  		e.preventDefault();
  		$('html,body').animate({
  			scrollTop: 0
  		},500);

  		return false;
  	})

  	//Login falso

  	$('#login form').submit(function(){
  		var form_name = $('#form_name').val();

  		localStorage.setItem('form_name', form_name);
  	});

  	
  	var form_name = localStorage.getItem('form_name');
  		
  	if (form_name != null && form_name != 'undefined') {
  		var about_parrafo = $('#about p');
  		about_parrafo.html('<br/><strong>Bienvenido, ' + form_name + '</strong>');
  		about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');
  		$('#login').hide();

  		$('#logout').click(function(){
  			localStorage.clear();
  			location.reload();
  		});
  	}
  	
  	//acordeon
  	if (window.location.href.indexOf('about') > -1){
  		$('#acordeon').accordion();
  	}

  	// Reloj
  	if (window.location.href.indexOf('reloj') > -1){

  		setInterval(function(){
	  		var reloj = moment().format('h:mm:ss');

	  		$('#reloj').html(reloj);	
  		},1000);
   	}

   	//Validación
   	if (window.location.href.indexOf('contacto') > -1){
   		$('form input[name="date"]') .datepicker({
   			dateFormat: 'dd-mm-yy'
   		});
	   	$.validate({
	   	 	lang: 'es',
	   	 	errorMessagePosition:'top',
	   	 	scrollToTopOnError: true
	   	});
   }
});