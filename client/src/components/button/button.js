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
	align-self: stretch;
	border-radius: 140px;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 500;
	min-width: 300px;

	border: ${({ border }) => (border ? border : 'none')};

	max-width: ${({ width }) => (width ? width : '360px')};

	height: ${({ height }) => (height ? height : '56px')};

	font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};

	color: ${({ color }) => (color ? 'color' : '#111')};

	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : '#F8FCFF'};

	filter: ${({ isDisable }) => (isDisable ? 'brightness(0.5)' : '')};

	&:hover {
		cursor: ${({ isDisable }) => (isDisable ? '' : 'pointer')};
	}
`;
