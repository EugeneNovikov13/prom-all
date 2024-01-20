import { useState } from 'react';
import { Product } from './product';
import { useFetchProductBySectionQuery } from '../../../../store/services';
import { SearchedProducts } from './searched-products';
import { Loader } from '../../../../components';

export const Products = () => {
	const [inputValue, setInputValue] = useState('');

	const { data: products, isLoading } = useFetchProductBySectionQuery(
		'6589b0067d4f83f1dfcaa234',
	);

	const onChange = value => {
		setInputValue(value);
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<input
						id="product_search"
						type="text"
						placeholder="Поиск товара..."
						value={inputValue}
						onChange={({ target }) => onChange(target.value)}
					/>
					<label htmlFor="product_search">ПОИСК</label>

					{inputValue ? (
						<SearchedProducts text={inputValue} />
					) : (
						products &&
						products.map(product => (
							<Product key={product.id} product={product} />
						))
					)}
				</div>
			)}
		</>
	);
};
