import { H4, Img } from '../../components';
import styled from 'styled-components';

const BrandCardContainer = ({ className, title, logo, isOfficial }) => {
	return (
		<div className={className}>
			<div className="brand-card-logo">
				<Img image={logo} maxWidth="153px" maxHeight="120px"></Img>
			</div>
			<div className="brand-card-title">
				<H4 fontSize={16}>{title}</H4>
			</div>
		</div>
	);
};

export const BrandCard = styled(BrandCardContainer)`
	width: 168px;
	height: 168px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	border-radius: 8px;
	border: 2px solid rgba(121, 121, 121, 0.1);
	background: var(--white);
	margin-bottom: 14px;

	&:hover {
		border: none;
		box-shadow: 0 8px 14px 0 #16306b;
	}

	& div.brand-card-logo {
		width: 153px;
		height: 87px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		overflow: hidden;
	}

	& div.brand-card-title {
		width: 164px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 12px 4px 16px;
	}
`;
