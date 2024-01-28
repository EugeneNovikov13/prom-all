import { H4 } from '../../../components';
import styled from 'styled-components';

const ProductCardContentContainer = ({ className, title }) => {
	return (
		<div className={className}>
			<div className="product-card-title">
				<H4>{title}</H4>
			</div>
		</div>
	);
};

export const ProductCardContent = styled(ProductCardContentContainer)`
	display: flex;
	max-height: 88px;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;

	&:hover {
		cursor: pointer;
	}

	& div.product-card-title {
		display: flex;
		height: 68px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 20px 16px 0 12px;
		text-align: center;

		& h4 {
			@media (max-width: 500px) {
				font-size: 4vw;
			}
		}
	}
`;
