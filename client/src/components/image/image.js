import styled from 'styled-components';

const ImageContainer = ({ className, SvgIconComponent, image }) => {
	return (
		<div className={className}>
			{SvgIconComponent ? (
				<SvgIconComponent className="product-card-icon" />
			) : (
				<img src={image} alt="Ошибка загрузки картинки" />
			)}
		</div>
	);
};

export const Image = styled(ImageContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: top 0.3s;

	position: ${({ position }) => position};
	${({ top }) => 'top: ' + top + 'px'};
	max-width: ${({ maxWidth }) => maxWidth}px;
	max-height: ${({ maxHeight }) => maxHeight}px;

	& svg {
		z-index: 1;
	}

	& svg.product-card-icon * {
		stroke: ${({ strokeColor }) => strokeColor};
		transition: ${({ transition }) => (transition ? transition : '0.3s')};
	}

	& svg.product-card-icon:hover * {
		stroke: ${({ hoverStrokeColor }) => hoverStrokeColor};
	}
`;
