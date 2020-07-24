function iconOnScroll(){
	if ( $(window).scrollTop() > $("#acerca3").offset().top - 100 && $(window).scrollTop() < $("#acerca3").outerHeight(true) + $("#acerca3").offset().top -100 ){
	var elem = document.querySelector('#acerca2Icon');
	var elem2= document.querySelector('#acerca2Span');
	elem.style.color = '#ff5800';
	elem2.style.color = '#ff5800';
	}
	else {
		var elem = document.querySelector('#acerca2Icon');
		var elem2= document.querySelector('#acerca2Span');
		elem.style.color = '#b7b7b7';
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
	
	
	if ( $(window).scrollTop() > $("#contacto").offset().top - 100 && $(window).scrollTop() < $("#contacto").outerHeight(true) + $("#contacto").offset().top -100 ){
	var elem = document.querySelector('#contactoIcon');
	var elem2= document.querySelector('#contactoSpan');
	elem.style.color = '#ff5800';
	elem2.style.color = '#ff5800';
	}
	else {
		var elem = document.querySelector('#contactoIcon');
		var elem2 = document.querySelector('#contactoSpan');
		elem.style.color = '#b7b7b7';
		elem2.style.color = '#b7b7b7';
	}
}

function onlyResponsive(x){
		if(x.matches){
			window.onscroll = function() {iconOnScroll()};
		}
}

var x = window.matchMedia("(max-width: 991px)");
onlyResponsive(x);
x.addListener(onlyResponsive);



