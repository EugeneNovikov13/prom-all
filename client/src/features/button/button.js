import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = ({ className, children, link, type, isDisable, onClick }) => {
	return (
		<>
			{link ? (
				//кнопка обёрнута ссылкой, принимающей адрес через пропсы
				<Link to={link}>
					<button
						className={className}
						type={type}
						disabled={isDisable}
						onClick={onClick}
					>
						{children}
					</button>
				</Link>
			) : (
				<button
					className={className}
					type={type}
					disabled={isDisable}
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	);
};

export const Button = styled(ButtonContainer)`
	padding: 0;
	border-radius: 140px;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 500;
	white-space: nowrap;
	outline: none;

	width: ${({ width }) => width};

	height: ${({ height }) => (height ? height : '56px')};

	border: ${({ border }) => (border ? border : 'none')};

	font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};

	color: ${({ color }) => (color ? color : '#111')};

	background: ${({ background }) => background};

	filter: ${({ isDisable }) => (isDisable ? 'brightness(0.5)' : '')};

	&:hover {
		cursor: ${({ isDisable }) => (isDisable ? '' : 'pointer')};
		box-shadow: ${({ isDisable, hoverBoxShadow }) =>
			isDisable || !hoverBoxShadow
				? ''
				: '6px 6px 20px 0 rgba(255, 214, 0, 0.25), -6px -6px 20px 0 rgba(255, 77, 0, 0.25), 0 0 10px 0 #FFAB58 inset'};
	}

	&:active {
		background: ${({ activeBackground }) =>
			activeBackground
				? activeBackground
				: 'linear-gradient(0deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), #FF7F00'};
	}

	@media (max-width: 380px) {
		width: ${({ width }) => (width === '100%' ? '100%' : '300px')};
	}
`;
