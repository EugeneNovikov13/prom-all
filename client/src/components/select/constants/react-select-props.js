export const reactSelectProps = {
	defaultValue: '',
	blurInputOnSelect: true,
	closeMenuOnScroll: true,
	menuPlacement: 'auto',
	isClearable: true,
	maxMenuHeight: 500,
	styles: {
		control: baseStyles => ({
			...baseStyles,
			border: 'none',
			background: 'none',
			borderColor: '',
			boxShadow: 'none',
		}),
		singleValue: baseStyles => ({
			...baseStyles,
			color: '#111111',
			textAlign: 'center',
			fontFamily: 'Inter, sans-serif',
			fontSize: '24px',
			fontStyle: 'normal',
			fontWeight: '500',
			lineHeight: '20px',
			letterSpacing: '0.1px',
			userSelect: 'none',
			textOverflow: 'unset',
		}),
		clearIndicator: baseStyles => ({
			...baseStyles,
			position: 'absolute',
			left: '-32px',
			'&:hover': {
				color: '#FF7F00',
			},
		}),
		indicatorSeparator: baseStyles => ({
			...baseStyles,
			display: 'none',
		}),
		dropdownIndicator: baseStyles => ({
			...baseStyles,
			'&:hover': {
				color: '#FF7F00',
			},
		}),
		menu: baseStyles => ({
			...baseStyles,
			minWidth: '144px',
			border: 'none',
			borderRadius: '8px',
			background: '#f4f6fa',
			left: '-20px',
		}),
		option: (baseStyles, state) => ({
			...baseStyles,
			backgroundColor: state.isSelected ? '#FF7F00' : '',
			'&:hover': {
				backgroundColor: state.isSelected ? '#FF7F00' : '#FF7F0080',
			},
		}),
		placeholder: baseStyles => ({
			...baseStyles,
			textAlign: 'center',
			fontFamily: 'Inter, sans-serif',
			fontSize: '24px',
			fontStyle: 'normal',
			fontWeight: '500',
			lineHeight: '20px',
			letterSpacing: '0.1px',
		}),
	},
};
