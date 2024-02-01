export const mapsSliderConfig = {
	type: 'fade',
	rewind: true,
	speed: 1000,
	width: '40vw',
	height: '550px',
	pagination: false,
	drag: false,
	dragMinThreshold: 50,
	breakpoints: {
		800: {
			width: '90vw',
			height: '436px',
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
