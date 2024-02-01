import { fetchProductById } from './fetch-product-by-id';
import { restoreSectionBreadcrumbs } from './restore-section-breadcrumbs';
import { resetBreadcrumbs, setProduct } from '../store/reducers';

export const asyncSetBreadcrumbsById = (
	dispatch,
	id,
	isOtherSectionSelected,
	isProductSectionSelected,
	needToResetBreadcrumbs,
) => {
	if (isProductSectionSelected) {
		fetchProductById(id).then(({ data }) => {
			const sectionId = data.section;
			const payload = {
				selectedId: data.id,
				selectedTitle: data.title,
			};
			restoreSectionBreadcrumbs(sectionId, dispatch);
			dispatch(setProduct(payload));
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
