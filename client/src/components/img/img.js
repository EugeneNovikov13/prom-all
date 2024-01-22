import styled from 'styled-components';

const ImgContainer = ({ className, iconClassName, SvgIconComponent, image, onClick }) => {
	return (
		<div className={className}>
			{SvgIconComponent ? (
				<SvgIconComponent className={iconClassName} onClick={onClick} />
			) : (
				<img
					className={iconClassName}
					src={image}
					width="100%"
					height="100%"
					alt="Ошибка загрузки картинки"
					onClick={onClick}
				/>
			)}
		</div>
	);
};

export const Img = styled(ImgContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: top 0.3s;

	position: ${({ position }) => position};
	top: ${({ top }) => top};
	max-width: ${({ maxWidth }) => maxWidth};
	max-height: ${({ maxHeight }) => maxHeight};

	& svg * {
		stroke: ${({ strokeColor }) => strokeColor};
		transition: ${({ transition }) => (transition ? transition : '0.3s')};
	}

	& svg:hover * {
		stroke: ${({ hoverStrokeColor }) => hoverStrokeColor};
	}
`;
