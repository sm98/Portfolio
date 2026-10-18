// Image lightbox: click any .img-gallery image to enlarge it; Esc or the close button dismisses it.
(function () {
	'use strict';

	const modal = document.getElementById('myModal');
	if (!modal) return;

	const modalImg = document.getElementById('img01');
	const caption = document.getElementById('caption');
	const closeBtn = document.querySelector('.close');
	let lastTrigger = null;

	function open(img) {
		lastTrigger = img;
		modal.style.display = 'block';
		modalImg.src = img.currentSrc || img.src;
		modalImg.alt = img.alt;
		caption.textContent = img.alt;
		modalImg.focus();
		document.body.style.overflow = 'hidden';
	}

	function close() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
		if (lastTrigger) lastTrigger.focus();
	}

	// One delegated listener covers every gallery image, current and future.
	document.addEventListener('click', (e) => {
		const img = e.target.closest('.img-gallery');
		if (img) open(img);
	});

	if (closeBtn) closeBtn.addEventListener('click', close);

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.style.display === 'block') close();
	});
})();
