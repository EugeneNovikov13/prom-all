import React from 'react';
import { H4, Img, P } from 'components';
import styled from 'styled-components';
import { IAdvantage } from 'types/advantage-types';

interface OpenedCardProps extends Omit<IAdvantage, 'id'> {
	className?: string;
	onTouchEnd: () => void;
}

const OpenedCardContainer: React.FC<OpenedCardProps> = ({
	className,
	title,
	image,
	text,
	onTouchEnd,
}) => {
	return (
		<div className={className} onTouchEnd={onTouchEnd}>
			<div className="opened-card-image">
				<Img
					iconClassName="opened-card-icon"
					SvgIconComponent={image}
					maxWidth="150px"
					maxHeight="150px"
					hoverStrokeColor='transparent'
				/>
			</div>
			<div className="opened-card-content">
				<H4 fontSize='24' color="var(--white)">
					{title}
				</H4>
				<P color={'#FFFFFFB3'} fontSize={'16px'}>
					{text}
				</P>
			</div>
		</div>
	);
};

export const OpenedCard = styled(OpenedCardContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	flex: 1 0 0;
	align-self: stretch;

	& div.opened-card-image {
		display: flex;
		width: 150px;
		height: 150px;
		justify-content: center;
		align-items: center;

		& svg.opened-card-icon {
			overflow: visible;
			transform: scale(1.4);
		}

		& svg.opened-card-icon > path {
			fill: var(--white);
		}
	}

	& div.opened-card-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
	}
`;
