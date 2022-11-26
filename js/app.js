let common = {
	init: function() {
		common.navigation();
	},
	navigation: function() {
		const menuOpenButton = document.querySelector('.menu-open');
		const menuCloseButton = document.querySelector('.menu-close');
		const body = document.querySelector('body');

		menuOpenButton.addEventListener('click', () => body.classList.add('menu-open'));
		menuCloseButton.addEventListener('click', () => body.classList.remove('menu-open'));
		
		let bLazy = new Blazy({});
		
		
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
