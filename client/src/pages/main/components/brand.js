import { useFetchAllBrandsQuery, useRemoveBrandMutation } from '../../../store/services';

const Brand = () => {
	const { data: brands, isLoading, error } = useFetchAllBrandsQuery('');
	const [removeBrand] = useRemoveBrandMutation();

	console.log(brands);
	const handleDelete = promoId => {
		removeBrand(promoId);
	};

	return (
		<div>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>Произошла ошибка при загрузке {error}</h2>}
			{brands &&
				brands.map(({ id, title }) => (
					<div key={id}>
						<h3>{title}</h3>
						<button onClick={() => handleDelete(id)}>DELETE</button>
					</div>
				))}
		</div>
	);
};

export default Brand;
