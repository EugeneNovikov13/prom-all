import React from 'react';
import { ReactComponent as Arrow } from '../assets/east.svg';
import { H4, Img } from 'components';
import styled from 'styled-components';

interface ClosedCardProps {
	className?: string;
	title: string;
	image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	isHovered: boolean;
}

const ClosedCardContainer: React.FC<ClosedCardProps> = ({
	className,
	title,
	image,
	isHovered
}) => {
	return (
		<div
			className={className}
		>
			<div className="closed-card-image">
				<Img
					iconClassName="closed-card-icon"
					SvgIconComponent={image}
					maxWidth="100px"
					maxHeight="100px"
					transition={'0.1s'}
					hoverStrokeColor='transparent'
				/>
			</div>
			<div className="closed-card-title">
				<H4 fontSize={'18'} color={isHovered ? 'var(--white)' : ''}>
					{title}
				</H4>
				<Arrow className="advantage-title-arrow" />
			</div>
		</div>
	);
};

export const ClosedCard = styled(ClosedCardContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	align-self: stretch;

	& div.closed-card-image {
		display: flex;
		width: 100px;
		height: 100px;
		justify-content: center;
		align-items: center;

		& svg.closed-card-icon {
			overflow: visible;
		}

		& svg.closed-card-icon > path {
			fill: ${({ isHovered }) => (isHovered ? 'var(--white)' : '')};
		}

		& svg.closed-card-icon > g {
			filter: ${({ isHovered }) => (isHovered ? 'blur(20px)' : '')};
		}
	}

	& div.closed-card-title {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		align-self: stretch;
		transition: 0.1s;

		& svg.advantage-title-arrow * {
			width: 24px;
			height: 24px;
			fill: ${({ isHovered }) => (isHovered ? 'var(--white)' : '')};
			transition: 0.1s;
		}
	}
`;
