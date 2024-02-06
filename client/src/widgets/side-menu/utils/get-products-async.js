import { fetchProductsBySectionIdAsync } from '../../../store/services';
import { resetProductCards, setProductCards } from '../../../store/reducers';

export const getProductsAsync = (id, dispatch, setLoadingFunc) => {
	dispatch(resetProductCards());
	dispatch(setLoadingFunc(true));
	fetchProductsBySectionIdAsync(id)
		.then(({ data }) => {
			dispatch(setProductCards(data));
		})
		.catch(e => {
			console.error(e.response.data);
		})
		.finally(dispatch(setLoadingFunc(false)));
};
