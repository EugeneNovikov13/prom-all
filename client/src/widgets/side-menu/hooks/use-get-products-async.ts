import { useDispatch } from 'react-redux';
import { fetchProductsBySectionIdAsync } from 'http/services';
import { changeLoading, resetProductList, setProductList } from 'store/reducers';
import { AppDispatch } from 'store/store';

export const useGetProductsAsync = () => {
	const dispatch: AppDispatch = useDispatch();

	const getProducts = async (id: string) => {
		dispatch(resetProductList());
		dispatch(changeLoading(true));

		try {
			const res = await fetchProductsBySectionIdAsync(id);
			if (!('counter' in res.data)) {
				dispatch(setProductList(res.data));
			}
		} catch (e) {
			console.error(e);
		} finally {
			dispatch(changeLoading(false));
		}
	}

	return { getProducts }
};
