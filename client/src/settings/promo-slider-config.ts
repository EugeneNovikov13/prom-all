import { Options } from '@splidejs/react-splide';

/**
 * Настройки слайдера промо-акций
 */
export const promoSliderConfig: Options = {
	type: 'loop',
	rewind: false,
	speed: 1000,
	width: '100%',
	height: `${window.innerHeight - 112}px`,
	dragMinThreshold: 50,
	autoplay: true,
	interval: 5000,
	pauseOnHover: false,
	pauseOnFocus: true,
	classes: {
		arrows: 'splide__arrows',
		arrow: 'splide__arrow',
		prev: 'splide__arrow--prev',
		next: 'splide__arrow--next',
		pagination: 'splide__pagination', // container
		page: 'splide__pagination__page', // each button
	},
};
