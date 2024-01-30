import { resetCards, setCards } from '../../../store/reducers';
import { fetchProductsBySectionId } from '../../../utils';

export const getProducts = (id, dispatch, setLoadingFunc) => {
	dispatch(resetCards());
	dispatch(setLoadingFunc(true));
	fetchProductsBySectionId(id)
		.then(({ data }) => {
			const payload = {
				isProductCards: true,
				data,
			};
			dispatch(setCards(payload));
			dispatch(setLoadingFunc(false));
		})
		.catch(e => {
			//TODO обработать ошибку (с помощью setLoadingFunc можно передать и ошибку)
			console.log(e.response.data);
			dispatch(setLoadingFunc(false));
		});
};
