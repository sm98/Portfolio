import Splide from '@splidejs/splide';


new Splide( '.splide' ).mount();
$(document).ready(function () {
  
	'use strict';

	var lockscroll=false;

	 var c, currentScrollTop = 0,
		 navbar = $('#header');
  
	 $(window).scroll(function () {
		var a = $(window).scrollTop();
		var b = 56;
	   
		currentScrollTop = a;
	   
		if ((c < currentScrollTop )&&( a > b + b )&&(!lockscroll)) {
		  navbar.addClass("scrollUp");
		} else if (c > currentScrollTop && !(a <= b)) {
		  navbar.removeClass("scrollUp");
		}
		c = currentScrollTop;
	});
	var body = document.body;
	var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
	body.classList.toggle("lockscroll");
  	});
  });