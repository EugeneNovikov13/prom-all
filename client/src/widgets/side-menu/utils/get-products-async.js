import { fetchProductsBySectionIdAsync } from 'http/services';
import { changeLoading, resetProductList, setProductList } from '../../../store/reducers';

export const getProductsAsync = (id, dispatch) => {
	dispatch(resetProductList());
	dispatch(changeLoading(true));
	fetchProductsBySectionIdAsync(id)
		.then(({ data }) => {
			if (!data.counter) {
				dispatch(setProductList(data));
			}
		})
		.catch(e => {
			console.error(e.response.data);
		})
		.finally(dispatch(changeLoading(false)));
};
