import { Variants } from 'framer-motion';

export const listVariants: Variants = {
	visible: (i: number) => ({
		height: '40px',
		opacity: 1,
		transition: {
			ease: 'linear',
			delay: i * 0.025,
		},
	}),
	hidden: {
		height: '0',
		opacity: 0,
	},
};
