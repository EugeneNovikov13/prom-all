import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchProducts } from '../../redux/action-creators/fetch-products';
import { useCreatePromoMutation } from '../../services/promo-service';
import Promo from './components/promo';
import Promo2 from './components/promo2';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [idValue, setIdValue] = useState('');
	const { products, isLoading, error } = useSelector(state => state.productsReducer);
	const [createPromo] = useCreatePromoMutation();
	const dispatch = useDispatch();

	const onClick = id => {
		dispatch(fetchProducts(id));
	};

	const handleCreate = async () => {
		const title = prompt('Введите название акции');
		const content = prompt('Введите содержание акции');
		const background = prompt('Введите URL фона');
		await createPromo({ title, content, background });
	};

	return (
		<div className={className}>
			<input
				type="text"
				value={idValue}
				onChange={({ target }) => setIdValue(target.value)}
			/>
			<button onClick={() => onClick(idValue)}>Get products</button>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>{error}</h2>}
			{products.map(({ id, imageURL, title }) => (
				<img key={id} src={imageURL} alt={title} />
			))}
			<br />
			<button onClick={handleCreate}>Добавить акцию</button>

			<div style={{ display: 'flex' }}>
				<Promo />
				<Promo2 />
			</div>
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
