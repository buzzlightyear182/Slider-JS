(function() {
	'use strict';

	var list = document.querySelectorAll('.carousel-container img');
	var current = document.querySelectorAll('.carousel-container img.active');
	var last = document.querySelector('img.last');

	document.querySelector('.nav-points').addEventListener('click', function(event) {
		event.preventDefault();

		var dots = document.querySelector('.nav-points').children;
		dots = [].slice.call(dots); //Convert node list to array

		var i = dots.indexOf(event.target.parentNode);

		current[0].classList.remove('active');
		list[i].classList.add('active');
	 	})

	 document.querySelector('.nav-next').addEventListener('click', function(event) {
		event.preventDefault();

		if (current === last) {
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

		if (current === list[0]) {
			last.classList.add('active');
			current.classList.remove('active');
		}
		current.previousElementSibling.classList.add('active');
		current.classList.remove('active');
	 })

})();