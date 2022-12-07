
$(document).ready(function () {  
	'use strict';
	
	var lockscroll=false;
	 var c, currentScrollTop = 0,
		 navbar = $('#header');


	let mouseCursor = document.querySelector(".cursor");
	let navLinks = document.querySelectorAll(".nav-links li");
	let projLinks = document.querySelectorAll(".project-link");
	let footer = document.querySelectorAll(".footer2");
	let contact = document.querySelectorAll(".contact-link");

	console.log(contact);
	
	document.addEventListener('mouseover',function(){
		mouseCursor.classList.add("link-normal");
	  });

	navLinks.forEach(link=>{
		link.addEventListener('mouseover',()=>{
			mouseCursor.classList.add("link-grow");
			
		});
		link.addEventListener('mouseleave',()=>{
			mouseCursor.classList.remove("link-grow");
		});
	});
	
	navLinks.forEach(link=>{
		link.addEventListener('mouseover',()=>{
			mouseCursor.classList.add("link-grow");
			
		});
		link.addEventListener('mouseleave',()=>{
			mouseCursor.classList.remove("link-grow");
		});
	});

	contact.forEach(link=>{
		link.addEventListener('mouseover',()=>{
			mouseCursor.classList.add("link-grow");
			
		});
		link.addEventListener('mouseleave',()=>{
			mouseCursor.classList.remove("link-grow");
		});
	});
		
	projLinks.forEach(link=>{
		link.addEventListener('mouseover',()=>{
			mouseCursor.classList.add("link-grow-large");
			
		});
		link.addEventListener('mouseleave',()=>{
			mouseCursor.classList.remove("link-grow-large");
		});
	});

	
	



	 $(window).scroll(function () {
		var a = $(window).scrollTop();
		var b = 56;
	   
		currentScrollTop = a;
	   
		if ((c < currentScrollTop )&&( a > b + b )&&(!lockscroll)) {
		  navbar.addClass("scrollUp");
		} 
		else if (c > currentScrollTop && !(a <= b)) {
		  navbar.removeClass("scrollUp");
		}
		c = currentScrollTop;

		
		var topOfWindow = $(window).scrollTop();
		var partOfWindow= $(window).height();
		var bottom3rdOfWindow = topOfWindow + (partOfWindow*2/3);
		var bottomOfWindow = topOfWindow + $(window).height();

		var card1 =$('#card1').offset().top;
		var card2 =$('#card2').offset().top;
		//var card3 =$('#card3').offset().top;
		//var card4 =$('#card4').offset().top;
		var card5 =$('#card5').offset().top;
		//var card6 =$('#card6').offset().top;
		//if(bottom3rdOfWindow>card6){$("#bg").css("background-color", "#fef8f7");$("#header").css("background-color", "#fef8f7"); }
		//else{
			if(bottom3rdOfWindow>card5){$("#bg").css("background-color", "#ffffff");$("#header").css("background-color", "#ffffff"); }
			else{
			//	if(bottom3rdOfWindow>card4){$("#bg").css("background-color", "#d5e8f2");$("#header").css("background-color", "#d5e8f2"); }
			//	else{
			//		if(bottom3rdOfWindow>card3){$("#bg").css("background-color", "#FEF4E7");$("#header").css("background-color", "#FEF4E7"); }
			//		else{
						if(bottom3rdOfWindow>card2){$("#bg").css("background-color", "#ebf9f4"); $("#header").css("background-color", "#ebf9f4");}
						else{
							if(bottom3rdOfWindow>card1){$("#bg").css("background-color", "#fcfae1"); $("#header").css("background-color", "#fcfae1");}
							else{
								$("#bg").css("background-color", "#ffffff");$("#header").css("background-color", "#ffffff");
							}
						}
					}
			//	}
			//}			
		//}
		
		

		
		

	});
	var body = document.body;
	
	var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
	body.classList.toggle("lockscroll");
  	});
  });




$(document).on('mousemove', function(e){
    $('#circle').css({
       left:  e.clientX,
       top:   e.clientY,
    });
});

$(window).on('scroll', function(e){ 
	$('#circle').css({
		left:  e.clientX,
		top:   e.clientY,
	 });
});