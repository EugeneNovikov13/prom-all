import styled from 'styled-components';

const ButtonContainer = ({ className, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	align-self: stretch;
	border-radius: 140px;
	font-family: Inter,sans-serif;
	font-style: normal;
	font-weight: 500;

	border: ${({ border }) => (border ? border : 'none')};

	max-width: ${({ width }) => (width ? width : '360px')};

	height: ${({ height }) => (height ? height : '56px')};

	font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};

	color: ${({ color }) => (color ? 'color' : '#111')};

	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : '#F8FCFF'};

	filter: ${({ isDisable }) => (isDisable ? 'brightness(0.9)' : '')};

	&:hover {
		cursor: ${({ isDisable }) => (isDisable ? '' : 'pointer')};
	}

	@media (max-width: 480px) {
		max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	}
`;
