import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchProducts } from '../../store/action-creators/fetch-products';
import styled from 'styled-components';
import { useCreateBrandMutation, useCreateProductMutation } from '../../store/services';
import { Products } from './components/products';

const MainContainer = ({ className }) => {
	const [idValue, setIdValue] = useState('');
	const [createBrand] = useCreateBrandMutation();
	const [createProduct] = useCreateProductMutation();
	const dispatch = useDispatch();

	const onClick = id => {
		dispatch(fetchProducts(id));
	};

	const handleCreate = async () => {
		const title = prompt('Введите название партнёра');
		const logo = prompt('Введите URL значка');
		const isOfficial = window.confirm(
			'Являетесь ли вы официальным дилером партнёра?',
		);
		await createBrand({ title, logo, isOfficial });
	};

	const handleCreateProduct = async () => {
		const newProduct = {
			title: 'ВРПХ115-45 N 5-8',
			images: [
				{
					imageURL:
						'http://prom-all.com/wp-content/uploads/2015/08/image023.jpg',
				},
			],
			kinds: [{ title: '5.1' }, { title: '6.3' }, { title: '8.1' }],
			description: 'ОБЩИЕ СВЕДЕНИЯ:',
			specification: '<p><strong>ВЕНТИЛЯТОРЫ ПЫЛЕВЫЕ ВРП115-45</strong></p>',
			section: '6589b0067d4f83f1dfcaa234',
		};
		await createProduct(newProduct);
	};

	return (
		<div className={className}>
			<input
				type="text"
				value={idValue}
				onChange={({ target }) => setIdValue(target.value)}
			/>
			<button onClick={() => onClick(idValue)}>Get products</button>
			<br />
			<button onClick={handleCreate}>Добавить партнёра</button>
			<button onClick={handleCreateProduct}>Добавить товар</button>

			<div style={{ display: 'flex' }}>
				<Products />
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
