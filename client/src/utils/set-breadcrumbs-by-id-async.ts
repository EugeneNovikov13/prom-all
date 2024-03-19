import { fetchProductByIdAsync } from 'http/services';
import { restoreSectionBreadcrumbs } from './restore-section-breadcrumbs';
import { resetBreadcrumbs, setProduct } from '../store/reducers';
import { AppDispatch } from '../store/store';

/**
 * Установить текущую цепочку breadcrumbs
 * @param dispatch - функция redux
 * @param id - params.id
 * @param isSectionSelected - выбраны ли какие-нибудь разделы
 * @param isProductSectionSelected - выбран ли какой-то товар
 * @param needToResetBreadcrumbs - требуется ли сброс breadcrumbs
 */
export const setBreadcrumbsByIdAsync = (
	dispatch: AppDispatch,
	id: string,
	isSectionSelected: boolean,
	isProductSectionSelected: boolean,
	needToResetBreadcrumbs: boolean,
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
	if (isSectionSelected) {
		restoreSectionBreadcrumbs(id, dispatch);
		return;
	}

	if (needToResetBreadcrumbs) {
		dispatch(resetBreadcrumbs());
	}
};
