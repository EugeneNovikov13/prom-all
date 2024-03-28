export const animationVariants = {
	visible: i => ({
		height: 'auto',
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
