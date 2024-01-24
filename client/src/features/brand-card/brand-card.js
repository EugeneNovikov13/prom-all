import { H4, Img } from '../../components';
import styled from 'styled-components';

const BrandCardContainer = ({ className, title, logo, isOfficial }) => {
	return (
		<div className={className}>
			<div className="brand-card-logo">
				<Img
					iconClassName="brand-card-icon"
					image={logo}
					maxWidth="153px"
					maxHeight="89px"
				></Img>
			</div>
			<div className="brand-card-title">
				<H4>{title}</H4>
				{isOfficial && <span>Официальный дилер</span>}
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
	border-radius: 8px;
	border: 2px solid rgba(121, 121, 121, 0.1);
	background: var(--white);
	overflow: hidden;
	transition: 0.5s;

	& img.brand-card-icon {
		width: 100%;
		height: 100%;
	}

	&:hover {
		border: none;
		box-shadow: 0 8px 14px 0 rgba(52, 57, 65, 0.4);

		& div.brand-card-title {
			background-color: var(--dark);
		}

		& img.brand-card-icon {
			filter: grayscale(1);
		}

		& h4 {
			color: var(--white);
		}

		& div.brand-card-logo::after {
			background-color: #ff7f00;
			opacity: 1;
		}
	}

	& div.brand-card-logo {
		width: 168px;
		height: 96px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		padding: 0 16px;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			border-radius: 8px 8px 0 0;
			width: 168px;
			height: 96px;
			mix-blend-mode: multiply;
			background-color: #ffffff;
			opacity: 0;
			transition:
				opacity 0.5s,
				background-color 0.5s;
		}
	}

	& div.brand-card-title {
		width: 168px;
		height: 72px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 11px 16px;
		transition: background-color 0.5s;

		& h4 {
			font-size: 15px;
			line-height: 16px;
			transition: color 0.5s;
		}

		& span {
			color: var(--brand-orange);
			font-family: Inter, sans-serif;
			font-size: 11px;
			font-style: normal;
			font-weight: 600;
			line-height: 16px;
			letter-spacing: -0.6px;
			text-transform: uppercase;
		}
	}
`;
