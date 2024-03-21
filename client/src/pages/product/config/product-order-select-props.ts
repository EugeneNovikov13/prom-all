import { CSSObjectWithLabel, OptionProps, Props } from 'react-select';
import { Option} from 'components/select/select-types';

export const productOrderSelectProps: Props<Option, false> = {
	defaultValue: undefined,
	blurInputOnSelect: true,
	closeMenuOnScroll: true,
	isClearable: true,
	maxMenuHeight: 500,
	styles: {
		control: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			border: 'none',
			background: 'none',
			borderColor: '',
			boxShadow: 'none',
		}),
		singleValue: (baseStyles: CSSObjectWithLabel) => ({
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
		clearIndicator: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			position: 'absolute',
			left: '-32px',
			'&:hover': {
				color: '#FF7F00',
				cursor: 'pointer',
			},
		}),
		indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			display: 'none',
		}),
		dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			'&:hover': {
				color: '#FF7F00',
				cursor: 'pointer',
			},
		}),
		menu: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			minWidth: '144px',
			border: 'none',
			borderRadius: '8px',
			background: '#f4f6fa',
			left: '-20px',
		}),
		option: (baseStyles: CSSObjectWithLabel, state: OptionProps<Option>) => ({
			...baseStyles,
			backgroundColor: state.isSelected ? '#FF7F00' : '',
			'&:hover': {
				backgroundColor: state.isSelected ? '#FF7F00' : '#FF7F0080',
				cursor: 'pointer',
			},
		}),
		placeholder: (baseStyles: CSSObjectWithLabel) => ({
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
