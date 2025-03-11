
$(document).ready(function () {  

	const textElement = document.getElementById('changingText');
	const textElement2 = document.getElementById('changingText2');
        const texts = ['Sanoop', ' सनूप', ' സനൂപ്']; // English, Devanagari, and Malayalam
        let index = 0;
        function changeText() {
            index = (index + 1) % texts.length;
            textElement.textContent = texts[index];
            textElement.classList.remove('slide-up');
            void textElement.offsetWidth; // Trigger a reflow to restart the animation
            textElement.classList.add('slide-up');
			textElement2.textContent = texts[index];
            textElement2.classList.remove('slide-up');
            void textElement2.offsetWidth; // Trigger a reflow to restart the animation
            textElement2.classList.add('slide-up');
						
        }
setInterval(changeText, 2500); // Change text every 3.5 seconds


	'use strict';
	
	var lockscroll=false;
	 var c, currentScrollTop = 0,
		 navbar = $('#header');

	var togglescroll = true;
	let mouseCursor = document.querySelector(".cursor");
	let navLinks = document.querySelectorAll(".nav-links li");
	let projLinks = document.querySelectorAll(".project-link");
	let footer = document.querySelectorAll(".footer2");
	let contact = document.querySelectorAll(".contact-link");
	let linkmid = document.querySelectorAll(".link-mid");
	
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
		
	linkmid.forEach(link=>{
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

		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (rect.top < window.innerHeight && rect.bottom > 0);
		  }
		  
		  const fadeIns = document.querySelectorAll('.fade-in');      
		  fadeIns.forEach(function(el) {
			if (isElementInViewport(el)) {
			  el.classList.add('visible');} 
			  else {el.classList.remove('visible');}
		  });




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
		
		
		
		var card0 =$('#card0').offset().top;
		var card1 =$('#card1').offset().top;
		var card2 =$('#card2').offset().top;
		var card3 =$('#card3').offset().top;
		var card4 =$('#card4').offset().top;
		var card5 =$('#card5').offset().top;
		var card6 =$('#card6').offset().top;

		function toggleLottie() {
			
			var element = document.getElementById('lottiefile');
			element.classList.toggle('hidden');
		}

	
		
		if(bottom3rdOfWindow>card6){$("#bg").css("background-color", "#ffffff");$("#header").css("background-color", "#ffffff"); document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#AFE3FC';rectangle.style.color = '#1A557D';});}
		else{
			if(bottom3rdOfWindow>card5){$("#bg").css("background-color", "#ffffff");$("#header").css("background-color", "#ffffff"); document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#AFE3FC';rectangle.style.color = '#1A557D';});}
			else{
				if(bottom3rdOfWindow>card4){$("#bg").css("background-color", "#ebf9f4");$("#header").css("background-color", "#ebf9f4"); document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#95E3D1';rectangle.style.color = '#147860';});}
				else{
					if(bottom3rdOfWindow>card3){$("#bg").css("background-color", "#FCFBEA");$("#header").css("background-color", "#FCFBEA"); document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#FFE596';rectangle.style.color = '#947A2E';});}
					else{
						if(bottom3rdOfWindow>card2){$("#bg").css("background-color", "#f9efeb"); $("#header").css("background-color", "#f9efeb");document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#FFC2B1';rectangle.style.color = '#954F3C';});}
						else{
							if(bottom3rdOfWindow>card1){;$("#bg").css("background-color", "#ebf3f9"); $("#header").css("background-color", "#ebf3f9");document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = '#AFE3FC';rectangle.style.color = '#1A557D';if(togglescroll==true){toggleLottie();togglescroll=false}});}
							else{
								
								$("#bg").css("background-color", "#ffffff");$("#header").css("background-color", "#ffffff");document.querySelectorAll('.chip').forEach(rectangle => {rectangle.style.backgroundColor = 'white';rectangle.style.color = 'white';});
								if(bottom3rdOfWindow>card0){if(togglescroll==true){toggleLottie();togglescroll=false}}
								
							}
								
							
						}
					}
				}
			}			
		}
	
		
		

		
		

	});
	var body = document.body;
	
	var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
	body.classList.toggle("lockscroll");
  	});

// Register GSAP
gsap.registerPlugin();

// Function to create infinite horizontal scrolling
function infiniteScroll(selector, direction = "left", speed = 30) {
    let container = document.querySelector(selector);
    let content = container.innerHTML;
    
    // Duplicate content for smooth looping
    container.innerHTML += content;

    let distance = container.scrollWidth / 2;

    gsap.to(container, {
        x: direction === "left" ? -distance : distance,
        duration: speed,
        ease: "linear",
        repeat: -1
    });
}

// Start scrolling for two rows in opposite directions
infiniteScroll(".row1", "left", 20);
infiniteScroll(".row2", "right", 25);



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


