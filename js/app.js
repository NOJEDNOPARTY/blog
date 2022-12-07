let common = {
	init: function() {
		common.navigation();
		common.slider();
		common.form();
	},
	navigation: function() {
		const bLazy = new Blazy({});

		const menu = document.querySelector('.header-top nav');
		const menuOpenButton = document.querySelector('.menu-open');
		const menuCloseButton = document.querySelector('.menu-close');
		const body = document.querySelector('body');

		menuOpenButton.addEventListener('click', () => body.classList.add('menu-open'));

		menuCloseButton.addEventListener('click', () => body.classList.remove('menu-open'));

		window.addEventListener('click', e => !menu.contains(e.target) && !menuOpenButton.contains(e.target) && body.classList.remove('menu-open'));
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
	form: function() {
		document.querySelector('.sub-form button').addEventListener('click', () => document.querySelector('.sub').classList.add('edit'));
		
		document.querySelector('.sub').addEventListener('submit', e => {
			e.preventDefault();
			document.querySelector('.sub').classList.add('success');
		});

		document.querySelectorAll('.comments-form [type="submit"]').forEach(btn => btn.addEventListener('click', () => {
			console.log('btn');
			btn.closest('.comments-form').classList.add('edit')
		}));

		document.querySelectorAll('.comments-form .form-field textarea').forEach(textarea => textarea.addEventListener('keyup', () => {
			const textareaLabel = textarea.closest('label');
			const textareaMaxLength = textarea.getAttribute('maxlength');
			const textareaText = textareaLabel.querySelector('span');
			const value = textarea.value.length;

			textareaText.innerHTML = textareaMaxLength - value;

			value == textareaMaxLength ? textareaText.classList.add('red') : textareaText.classList.remove('red');

		}));

		document.querySelectorAll('.show-more-replies').forEach(btn => btn.addEventListener('click', e => {
			e.preventDefault();

			const textShow = btn.getAttribute('data-show');
			const textHide = btn.getAttribute('data-hide');
			const commentsItem = btn.closest('.comments-item');
			const btnName = btn.querySelector('.show-more-replies-name');

			if(commentsItem.classList.contains('show-replies')) {
				commentsItem.classList.remove('show-replies');
				btnName.innerHTML = textShow;
			}else {
				commentsItem.classList.add('show-replies');
				btnName.innerHTML = textHide;
			}
		}));

		document.querySelectorAll('.show-more-comments').forEach(btn => btn.addEventListener('click', e => {
			e.preventDefault();

			const textShow = btn.getAttribute('data-show');
			const textHide = btn.getAttribute('data-hide');
			const commentsList = btn.closest('.comments');
			const btnName = btn.querySelector('span');

			console.lo

			if(commentsList.classList.contains('show-all')) {
				commentsList.classList.remove('show-all');
				btnName.innerHTML = textShow;
			}else {
				commentsList.classList.add('show-all');
				btnName.innerHTML = textHide;
			}
		}));

		document.querySelectorAll('.comments-form-trigger').forEach(btn => btn.addEventListener('click', e => {
			e.preventDefault();

			const commentsItemWrap = btn.closest('.comments-item-wrap');

			if(!commentsItemWrap.classList.contains('show'))
				commentsItemWrap.classList.add('show');
		}));

		document.querySelectorAll('.hide-form').forEach(btn => btn.addEventListener('click', e => {
			e.preventDefault();

			const commentsItemWrap = btn.closest('.comments-item-wrap');

			if(commentsItemWrap.classList.contains('show'))
				commentsItemWrap.classList.remove('show');
		}));
	}
};

(function() {
	common.init();
}());
