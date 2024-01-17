export const promoSliderConfig = {
	type: 'loop',
	rewind: false,
	speed: 1000,
	width: '100%',
	height: '80vh',
	dragMinThreshold: 50,
	autoplay: true,
	interval: 5000,
	pauseOnHover: true,
	pauseOnFocus: true,
	classes: {
		arrows: 'splide__arrows',
		arrow : 'splide__arrow',
		prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
		pagination: 'splide__pagination', // container
		page      : 'splide__pagination__page', // each button
	},
};
