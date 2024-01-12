import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Products } from './components/products';
import { useCreateProductMutation } from '../../store/services';

const CatalogContainer = ({ className }) => {
	const [createProduct] = useCreateProductMutation();
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
			<h2>Товары:</h2>
			<button onClick={handleCreateProduct}>Добавить товар</button>
			<div style={{ display: 'flex' }}>
				<Products />
			</div>
			<Outlet />
		</div>
	);
};

export const Catalog = styled(CatalogContainer)``;
