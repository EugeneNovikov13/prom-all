import styled from 'styled-components';
import { useFetchProductQuery } from '../../store/services';
import { useParams } from 'react-router-dom';

const ProductContainer = ({ className }) => {
	const params = useParams();

	const { data: product } = useFetchProductQuery(params.id);

	if (!product) return null;

	return (
		<div className={className}>
			<h1>{product.title}</h1>
			<div
				dangerouslySetInnerHTML={{ __html: product.description }}
				style={{
					backgroundImage: `url(${product.images[0].imageURL})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}
			></div>
		</div>
	);
};

export const Product = styled(ProductContainer)``;
