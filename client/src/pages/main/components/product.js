import { useNavigate } from 'react-router-dom';

export const Product = ({ product }) => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate(`/product/${product.id}`);
	};

	return (
		<div>
			<h1>{product.title}</h1>
			<button onClick={onClick}>Перейти на страницу товара</button>
		</div>
	);
};
