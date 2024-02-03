import { fetchProductsBySectionIdAsync } from '../../../store/services';
import { resetProductCards, setProductCards } from '../../../store/reducers';

export const getProductsAsync = (id, dispatch, setLoadingFunc) => {
	dispatch(resetProductCards());
	dispatch(setLoadingFunc(true));
	fetchProductsBySectionIdAsync(id)
		.then(({ data }) => {
			dispatch(setProductCards(data));
			dispatch(setLoadingFunc(false));
		})
		.catch(e => {
			//TODO обработать ошибку (с помощью setLoadingFunc можно передать и ошибку)
			console.log(e.response.data);
			dispatch(setLoadingFunc(false));
		});
};
