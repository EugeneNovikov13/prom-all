import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { fetchProducts } from '../../redux/action-creators/fetch-products';

const MainContainer = ({ className }) => {
	const [value, setValue] = useState('');
	const { products, isLoading, error } = useSelector(state => state.productsReducer);
	const dispatch = useDispatch();
	console.log(products);
	const onClick = (id, list) => {
		dispatch(fetchProducts(id));
	};

	return (
		<div className={className}>
			<input
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
			<button onClick={() => onClick(value, products)}>Get products</button>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>{error}</h2>}
			{products.map(({ id, imageURL, title }) => (
				<img key={id} src={imageURL} alt={title} />
			))}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;

	img {
		width: 200px;
	}
`;
