import {
	useFetchAllPromoQuery,
	useRemovePromoMutation,
	useUpgradePromoMutation,
} from '../../../store/services';

const Promo = () => {
	const { data: promos, isLoading, error } = useFetchAllPromoQuery('');
	const [upgradePromo] = useUpgradePromoMutation();
	const [removePromo] = useRemovePromoMutation();

	const handleDelete = promoId => {
		removePromo(promoId);
	};

	const handleUpgrade = async promoId => {
		const newPromo = { id: promoId };
		const title = prompt('Введите новое название акции');
		if (!!title) {
			newPromo.title = title;
		}
		const content = prompt('Введите новое содержание акции');
		if (!!content) {
			newPromo.content = content;
		}
		const background = prompt('Введите новый URL фона');
		if (!!background) {
			newPromo.background = background;
		}
		await upgradePromo(newPromo);
	};

	return (
		<div>
			{isLoading && <h2>Идёт загрузка...</h2>}
			{error && <h2>Произошла ошибка при загрузке {error}</h2>}
			{promos &&
				promos.map(({ id, title, content, background }) => (
					<div key={id}>
						<h3>{title}</h3>
						<div
							dangerouslySetInnerHTML={{ __html: content }}
							style={{ backgroundImage: `url(${background})` }}
						></div>
						<button onClick={() => handleUpgrade(id)}>UPGRADE</button>
						<button onClick={() => handleDelete(id)}>DELETE</button>
					</div>
				))}
		</div>
	);
};

export default Promo;
