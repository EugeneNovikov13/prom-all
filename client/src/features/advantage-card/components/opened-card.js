import { H4, Image } from '../../../components';
import styled from 'styled-components';

const OpenedCardContainer = ({ className, title, image, text }) => {
	return (
		<div className={className}>
			<div className="closed-card-image">
				<Image
					SvgIconComponent={image}
					maxWidth={100}
					maxHeight={100}
					transition={'0.1s'}
				/>
			</div>
			<div className="closed-card-title">
				<H4 fontSize={18} color="var(--white)">
					{title}
				</H4>
			</div>
		</div>
	);
};

export const OpenedCard = styled(OpenedCardContainer)``;
