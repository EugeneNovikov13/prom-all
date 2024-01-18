export const brandSliderConfig = {
	type: 'loop',
	rewind: false,
	speed: 1000,
	width: '100%',
	height: '192px',
	perPage: 6,
	perMove: 1,
	gap: '24px',
	padding: { left: 23, right: 23 },
	pagination: false,
	dragMinThreshold: 50,
	autoplay: true,
	interval: 2000,
	pauseOnHover: true,
	pauseOnFocus: true,
	breakpoints: {
		1230: {
			width: '982px',
			perPage: 5,
		},
		1040: {
			width: '790px',
			perPage: 4,
		},
		850: {
			width: '598px',
			perPage: 3,
		},
		660: {
			width: '406px',
			perPage: 2,
		},
		460: {
			width: '358px',
			perPage: 2,
			gap: '8px',
			padding: { left: 7, right: 7 },
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
