(function () {
	'use strict';

	const $ = (sel, root = document) => root.querySelector(sel);
	const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

	/* ---------- Rotating name in the hero (home page only) ---------- */
	const nameEls = ['changingText', 'changingText2']
		.map((id) => document.getElementById(id))
		.filter(Boolean);

	if (nameEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		const names = ['Sanoop', ' सनूप', ' സനൂപ്']; // English, Devanagari, Malayalam
		let nameIndex = 0;
		setInterval(() => {
			nameIndex = (nameIndex + 1) % names.length;
			nameEls.forEach((el) => {
				el.textContent = names[nameIndex];
				el.classList.remove('slide-up');
				void el.offsetWidth; // reflow so the animation restarts
				el.classList.add('slide-up');
			});
		}, 2500);
	}

	/* ---------- Custom cursor ---------- */
	const cursor = document.getElementById('circle');
	if (cursor) {
		cursor.classList.add('link-normal');

		const growOn = (selector, cls) => {
			$$(selector).forEach((el) => {
				el.addEventListener('mouseover', () => cursor.classList.add(cls));
				el.addEventListener('mouseleave', () => cursor.classList.remove(cls));
			});
		};
		growOn('.nav-links li, .contact-link, .link-mid', 'link-grow');
		growOn('.project-link', 'link-grow-large');

		document.addEventListener('mousemove', (e) => {
			cursor.style.left = e.clientX + 'px';
			cursor.style.top = e.clientY + 'px';
		}, { passive: true });
	}

	/* ---------- Fade-in on scroll ---------- */
	const fadeIns = $$('.fade-in');
	if ('IntersectionObserver' in window) {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting));
		});
		fadeIns.forEach((el) => io.observe(el));
	} else {
		fadeIns.forEach((el) => el.classList.add('visible'));
	}

	/* ---------- Hamburger menu ---------- */
	const hamburger = $('.hamburger');
	if (hamburger) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('is-active');
			document.body.classList.toggle('lockscroll');
		});
	}

	/* ---------- Scroll behaviour: hide/show navbar + section colours ---------- */
	const navbar = document.getElementById('header');
	const bg = document.getElementById('bg');
	const lottie = document.getElementById('lottiefile');
	const cards = [0, 1, 2, 3, 4, 5, 6].map((i) => document.getElementById('card' + i));
	const hasCards = cards.every(Boolean);

	// [first card index it applies to, page background, chip background, chip text]
	const themes = [
		[6, '#ffffff', '#FFE596', '#947A2E'],
		[5, '#ffffff', '#FFE596', '#947A2E'],
		[4, '#ebf9f4', '#95E3D1', '#147860'],
		[3, '#EFEBF8', '#D8C9FF', '#65548F'],
		[2, '#f9efeb', '#FFC2B1', '#954F3C'],
		[1, '#ebf3f9', '#AFE3FC', '#1A557D'],
	];
	const defaultTheme = ['#ffffff', 'white', 'white'];

	const chips = $$('.chip');
	let lastScrollTop;
	let lottieHidden = false;
	let currentTheme = '';
	let ticking = false;

	const applyTheme = (page, chipBg, chipFg) => {
		if (currentTheme === page + chipBg) return;
		currentTheme = page + chipBg;
		if (bg) bg.style.backgroundColor = page;
		if (navbar) navbar.style.backgroundColor = page;
		chips.forEach((chip) => {
			chip.style.backgroundColor = chipBg;
			chip.style.color = chipFg;
		});
	};

	const update = () => {
		ticking = false;
		const scrollTop = window.pageYOffset;

		if (navbar) {
			if (lastScrollTop < scrollTop && scrollTop > 112 && !document.body.classList.contains('lockscroll')) {
				navbar.classList.add('scrollUp');
			} else if (lastScrollTop > scrollTop && scrollTop > 56) {
				navbar.classList.remove('scrollUp');
			}
			lastScrollTop = scrollTop;
		}

		if (!hasCards) return;

		const probe = scrollTop + window.innerHeight * 2 / 3;
		const top = (el) => el.getBoundingClientRect().top + scrollTop;

		const match = themes.find(([i]) => probe > top(cards[i]));
		if (match) applyTheme(match[1], match[2], match[3]);
		else applyTheme(...defaultTheme);

		if (!lottieHidden && lottie && probe > top(cards[0])) {
			lottie.classList.add('hidden');
			lottieHidden = true;
		}
	};

	window.addEventListener('scroll', () => {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(update);
		}
	}, { passive: true });
	update();
})();
