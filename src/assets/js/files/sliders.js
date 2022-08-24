//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }	

let sliderMainBody = new Swiper('.slider-main__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 32,
	watchOverflov: true,
	speed: 800,
	loop: true,
	loopAdditionalSlides: 5,
	preloadImages: false,
	parallax: true,

	// touchRatio: 0,
	// simulateTouch: false,
	lazy: true,
	autoHeight: true,
	
	// Dotts
	pagination: {
		el: '.controls-main__dotts',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.slider-main-arrow.slider-arrow_next',
		prevEl: '.slider-main-arrow.slider-arrow_prev',
	},
	
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
	},
	
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});
if (document.querySelector('.slider-rooms__body')) {
	let sliderRoomsBody = new Swiper('.slider-rooms__body', {	
		observer: true,
		observeParents: true,
		// auto width css
		slidesPerView: 'auto',
		spaceBetween: 24,
		watchOverflov: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		
		// Dotts
		pagination: {
			el: '.controls-rooms__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-rooms-arrow.slider-arrow_prev',
			prevEl: '.slider-rooms-arrow.slider-arrow_next',
		},		
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	1268: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 32,
		// 	},
		// },
	});
}
if (document.querySelector('.slider-tips__body')) {
	let sliderTipsBody = new Swiper('.slider-tips__body', {	
		observer: true,
		observeParents: true,
		// auto width css
		slidesPerView: 3,
		spaceBetween: 32,
		watchOverflov: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,		
		
		// Dotts
		pagination: {
			el: '.controls-tips__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-tips-arrow.slider-arrow_prev',
			prevEl: '.slider-tips-arrow.slider-arrow_next',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});
}
