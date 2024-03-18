import { fetchProductByIdAsync } from 'http/services';
import { restoreSectionBreadcrumbs } from './restore-section-breadcrumbs';
import { resetBreadcrumbs, setProduct } from '../store/reducers';

export const setBreadcrumbsByIdAsync = (
	dispatch,
	id,
	isOtherSectionSelected,
	isProductSectionSelected,
	needToResetBreadcrumbs,
) => {
	if (isProductSectionSelected) {
		fetchProductByIdAsync(id)
			.then(({ data }) => {
				const sectionId = data.section;
				const payload = {
					selectedId: data.id,
					selectedTitle: data.title,
				};
				restoreSectionBreadcrumbs(sectionId, dispatch);
				dispatch(setProduct(payload));
			})
			.catch(e => {
				console.error(e);
			});
		return;
	}
	if (isOtherSectionSelected) {
		restoreSectionBreadcrumbs(id, dispatch);
		return;
	}

	if (needToResetBreadcrumbs) {
		dispatch(resetBreadcrumbs());
	}
};
