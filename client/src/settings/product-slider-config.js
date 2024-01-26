export const productSliderConfig = {
	type: 'loop',
	rewind: false,
	speed: 1000,
	width: '552px',
	height: '533px',
	dragMinThreshold: 50,
	// autoplay: true,
	// interval: 5000,
	pauseOnHover: true,
	pauseOnFocus: true,
	breakpoints: {
		610: {
			width: '452px',
			height: '436px',
		},
		500: {
			width: '352px',
			height: '339px',
		},
	},
	classes: {
		arrows: 'splide__arrows',
		arrow: 'splide__arrow',
		prev: 'splide__arrow--prev',
		next: 'splide__arrow--next',
		pagination: 'splide__pagination', // container
		page: 'splide__pagination__page', // each button
	},
};
