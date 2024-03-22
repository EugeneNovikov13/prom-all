import { Options } from '@splidejs/react-splide';

/**
 * Настройки слайдера карт
 */
export const mapsSliderConfig: Options = {
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
			width: '80vw',
		},
		450: {
			width: '90vw',
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
