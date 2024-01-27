import { useParams } from 'react-router-dom';
import { useFetchProductQuery } from '../../store/services';
import {
	ProductBottomContainer,
	ProductOrderForm,
	ProductPhotoSlider,
} from './components';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const params = useParams();

	const { data: product } = useFetchProductQuery(params.id);

	if (!product) return null;

	return (
		<div className={className}>
			<div className="product-top-container">
				<ProductPhotoSlider images={product.images} />
				<ProductOrderForm title={product.title} kinds={product.kinds} />
			</div>
			<ProductBottomContainer />
		</div>
	);
};

export const Product = styled(ProductContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	align-self: stretch;

	& div.product-top-container {
		max-width: 1200px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 24px;
		align-self: stretch;
		padding: 0 36px;

		@media (max-width: 1200px) {
			flex-direction: column;
			align-items: center;
		}

		@media (max-width: 600px) {
			padding: 0;
		}
	}
`;
