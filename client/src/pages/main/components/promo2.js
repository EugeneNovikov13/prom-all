import { useFetchAllPromoQuery } from '../../../services/promo-service';

const Promo2 = () => {
	const {data: promo, isLoading, error} = useFetchAllPromoQuery('');

	return (
		<div>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>Произошла ошибка при загрузке {error.error}</h2>}
			{promo && promo.map(({ id, title }) => <h3 key={id}>{title}</h3>)}
		</div>
	);
};

export default Promo2;
