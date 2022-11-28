let common = {
	init: function() {
		common.navigation();
	},
	navigation: function() {
		let bLazy = new Blazy({});

		const menuOpenButton = document.querySelector('.menu-open');
		const menuCloseButton = document.querySelector('.menu-close');
		const body = document.querySelector('body');
		let subButton = document.querySelector('.sub-form button');
		let subForm = document.querySelector('.sub');

		menuOpenButton.addEventListener('click', () => body.classList.add('menu-open'));
		menuCloseButton.addEventListener('click', () => body.classList.remove('menu-open'));
		subButton.addEventListener('click', () => subForm.classList.add('edit'));
		subForm.addEventListener('submit', e => {
			e.preventDefault();
			subForm.classList.add('success');
		});
		
		// window.onscroll = function() {fixedHeader()};
		// let header = document.querySelector(".header");
		// let sticky = header.offsetTop;
		
		// function fixedHeader() {
		// 	if (window.pageYOffset > sticky) {
		// 		header.classList.add("fixed");
		// 	} else {
		// 		header.classList.remove("fixed");
		// 	}
		// };

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('.header').toggleClass('open');
		// });

		// $('.anchor a').click(function(e) {
		// 	e.preventDefault();
		// 	var aid = $(this).attr('href');
		// 	$('.header').removeClass('open');
		// 	$('html,body').animate({scrollTop: $(aid).offset().top},'500');
		// });
	},
};

(function() {
	common.init();
}());
