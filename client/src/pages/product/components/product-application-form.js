import { H1 } from '../../../components';
import { Button } from '../../../features';
import styled from 'styled-components';

const ProductApplicationFormContainer = ({ className, title, kinds }) => {
	return (
		<div className={className}>
			<div className="product-application-title">
				<H1>{title}</H1>
			</div>
			<div className="product-application-inputs"></div>
			<Button
				width="100%"
				height="64px"
				fontSize="20px"
				color={'var(--white)'}
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				Оформить заказ
			</Button>
		</div>
	);
};

export const ProductApplicationForm = styled(ProductApplicationFormContainer)`
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	& div.product-application-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		align-self: stretch;

		h1 {
			font-size: 48px;
		}
	}

	& div.product-application-inputs {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: stretch;
	}
`;
