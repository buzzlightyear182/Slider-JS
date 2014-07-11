(function() {
	'use strict';

	document.querySelector('.nav-points').addEventListener('click', function(event) {
		event.preventDefault();

		var dots = document.querySelector('.nav-points').children; //node list for container of navigator points
		dots = [].slice.call(dots); //Convert node list to array

		var list = document.querySelectorAll('.carousel-container .feature'); //List of film divs on HTML
		var i = dots.indexOf(event.target.parentNode); //To know which <li> item is clicked (event.target is an 'a')

		var current = document.querySelectorAll('.carousel-container .active'); //Current div shown
		current[0].classList.remove('active');
		list[i].classList.add('active');
	 	})

	 document.querySelector('.nav-next').addEventListener('click', function(event) {
		event.preventDefault();

		var list = document.querySelectorAll('.carousel-container .feature');
		var current = document.querySelector('.carousel-container .active');

		if (current === document.querySelector('.last')) {
			list[0].classList.add('active');
			current.classList.remove('active');
		}
		else {
			current.nextElementSibling.classList.add('active');
			current.classList.remove('active');
		}
	 })

	 document.querySelector('.nav-prev').addEventListener('click', function(event) {
		event.preventDefault();

		var list = document.querySelectorAll('.carousel-container .feature');
		var current = document.querySelector('.carousel-container .active');
		var last = document.querySelector('.ultimo')

		if (current === document.querySelector('.primero')) {
			last.classList.add('active');
			current.classList.remove('active');
		}
		current.previousElementSibling.classList.add('active');
		current.classList.remove('active');
	 })

})();