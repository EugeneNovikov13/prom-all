import { useFetchAllPromoQuery, useRemovePromoMutation } from '../../../services/promo-service';

const Promo = () => {
	const { data: promo, isLoading, error } = useFetchAllPromoQuery('');
	const [removePromo] = useRemovePromoMutation();

	const handleDelete = (promoId) => {
		removePromo(promoId);
	}

	return (
		<div>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>Произошла ошибка при загрузке {error.error}</h2>}
			{promo && promo.map(({ id, title }) => (
				<div key={id}>
					<h3>{title}</h3>
					<button onClick={() => handleDelete(id)}>DELETE</button>
				</div>
			))}
		</div>
	);
};

export default Promo;
