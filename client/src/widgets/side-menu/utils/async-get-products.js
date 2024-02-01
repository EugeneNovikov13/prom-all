import { resetProductCards, setProductCards } from '../../../store/reducers';
import { fetchProductsBySectionId } from '../../../utils';

export const asyncGetProducts = (id, dispatch, setLoadingFunc) => {
	dispatch(resetProductCards());
	dispatch(setLoadingFunc(true));
	fetchProductsBySectionId(id)
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
