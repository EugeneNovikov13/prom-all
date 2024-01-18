import { H4, Image, P } from '../../../components';
import styled from 'styled-components';

const OpenedCardContainer = ({ className, title, image, text }) => {
	return (
		<div className={className}>
			<div className="opened-card-image">
				<Image
					SvgIconComponent={image}
					maxWidth={150}
					maxHeight={150}
				/>
			</div>
			<div className="opened-card-content">
				<H4 fontSize={24} color="var(--white)">
					{title}
				</H4>
				<P color={'#FFFFFFB3'} fontSize={'16px'}>{text}</P>
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

		& svg {
			overflow: visible;
			transform: scale(1.4);
		}

		& svg > path {
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
