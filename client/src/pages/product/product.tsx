import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetchProductQuery } from 'store/services';
import { changeLoading } from 'store/reducers';
import { Loader, ServerMessage } from 'components';
import {
	ProductBottomContainer,
	ProductOrderForm,
	ProductPhotoSlider,
} from './components';
import styled from 'styled-components';

interface ProductProps {
	className?: string,
}

const ProductContainer: FC<ProductProps> = ({ className }) => {
	const params = useParams();
	const dispatch = useDispatch();

	const { data: product, isLoading } = useFetchProductQuery(params.id as string);

	useEffect(() => {
		if (isLoading) {
			dispatch(changeLoading(true));
			return;
		}
		dispatch(changeLoading(false));
	}, [isLoading, dispatch]);

	if (isLoading) return null;
	if (!product) return <ServerMessage children={'Товара не существует'} isError={true}/>;

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={className}>
					<div className="product-top-container">
						<ProductPhotoSlider images={product.images} />
						<ProductOrderForm title={product.title} kinds={product.kinds} />
					</div>
					<ProductBottomContainer
						title={product.title}
						description={product.description}
						specification={product.specification}
					/>
				</div>
			)}
		</>
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
