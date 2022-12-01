let common = {
	init: function() {
		common.navigation();
		common.slider();
	},
	navigation: function() {
		const bLazy = new Blazy({});

		const menu = document.querySelector('.header-top nav');
		const menuOpenButton = document.querySelector('.menu-open');
		const menuCloseButton = document.querySelector('.menu-close');
		const body = document.querySelector('body');
		let subButton = document.querySelector('.sub-form button');
		let subForm = document.querySelector('.sub');

		menuOpenButton.addEventListener('click', () => body.classList.add('menu-open'));

		menuCloseButton.addEventListener('click', () => body.classList.remove('menu-open'));

		window.addEventListener('click', e => !menu.contains(e.target) && !menuOpenButton.contains(e.target) && body.classList.remove('menu-open'));

		subButton.addEventListener('click', () => subForm.classList.add('edit'));

		subForm.addEventListener('submit', e => {
			e.preventDefault();
			subForm.classList.add('success');
		});
	},
	slider: function() {
		let galleryItems = document.querySelectorAll('.gallery-item');
		let galleryCount = document.querySelector('.gallery-count-list');
		let galleryCountIndex = document.querySelector('.gallery-count-index');

		const galleryCountHandler = count => {
			galleryCount.innerHTML = galleryItems.length;
			if (count)
				galleryCountIndex.innerHTML = count;
		};

		galleryCountHandler();

		let splide = new Splide( '.gallery', {
			type   : 'slide',
			perPage: 1,
			perMove: 1,
			start: 0,
			arrows: true,
			pagination: false,
			mediaQuery: 'max',
			autoHeight: true,
			breakpoints: {
				960: {
					pagination: false,
					focus  : 'center',
					padding: '10px',
				},
			}
		});

		
		splide.mount();
    splide.on('moved', newIndex => galleryCountHandler(newIndex + 1));
	},
};

(function() {
	common.init();
}());
