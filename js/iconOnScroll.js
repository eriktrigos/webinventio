function iconOnScroll(){
	if ( $(window).scrollTop() > $("#acerca3").offset().top - 100 && $(window).scrollTop() < $("#acerca3").outerHeight(true) + $("#acerca3").offset().top -100 ){
	var elem = document.querySelector('#acerca2Icon');
	var elem2= document.querySelector('#acerca2Span');
	elem.style.color = '#ff5800'
	elem2.style.color = '#ff5800';
	}
	else {
		var elem = document.querySelector('#acerca2Icon');
		var elem2= document.querySelector('#acerca2Span');
		elem.style.color = '#b7b7b7'
		elem2.style.color = '#b7b7b7';
	}
	if ( $(window).scrollTop() > $("#trabajos").offset().top - 100 && $(window).scrollTop() < $("#trabajos").outerHeight(true) + $("#trabajos").offset().top -100 ){
	var elem = document.querySelector('#trabajosIcon');
	var elem2= document.querySelector('#trabajosSpan');
	elem.style.color = '#ff5800';
	elem2.style.color = '#ff5800';
	}
	else {
		var elem = document.querySelector('#trabajosIcon');
		var elem2= document.querySelector('#trabajosSpan');
		elem.style.color = '#b7b7b7';
		elem2.style.color = '#b7b7b7';
	}
	//Cuando sirva para algo el boton de contacto
	
	/*if ( $(window).scrollTop() > $("#contacto").offset().top - 100 && $(window).scrollTop() < $("#contacto").outerHeight(true) + $("#contacto").offset().top -100 ){
	var elem = document.querySelector('#contactoIcon');
	elem.style.color = '#ff5800'
	}
	else {
		var elem = document.querySelector('#contactoIcon');
		elem.style.color = '#b7b7b7'
	}*/
}

window.onscroll = function() {iconOnScroll()};


