import { Product } from './product';
import { useFetchProductByTitleQuery } from '../../../store/services';

export const SearchedProducts = ({ text }) => {
	const { data: products } = useFetchProductByTitleQuery(text);

	return (
		<div>
			{products &&
				products.map(product => <Product key={product.id} product={product} />)}
		</div>
	);
};
