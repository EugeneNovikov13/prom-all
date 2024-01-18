import styled from 'styled-components';

const ImgContainer = ({ className, iconClassName, SvgIconComponent, image }) => {
	return (
		<div className={className}>
			{SvgIconComponent ? (
				<SvgIconComponent className={iconClassName} />
			) : (
				<img
					src={image}
					width="100%"
					height="100%"
					alt="Ошибка загрузки картинки"
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
	max-width: ${({ maxWidth }) => maxWidth}px;
	max-height: ${({ maxHeight }) => maxHeight}px;

	& svg * {
		stroke: ${({ strokeColor }) => strokeColor};
		transition: ${({ transition }) => (transition ? transition : '0.3s')};
	}

	& svg:hover * {
		stroke: ${({ hoverStrokeColor }) => hoverStrokeColor};
	}
`;
