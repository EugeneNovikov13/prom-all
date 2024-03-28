import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { fetchProductByIdAsync } from 'http/services';
import { restoreSectionBreadcrumbs } from 'utils/restore-section-breadcrumbs';
import { resetBreadcrumbs, setProduct } from 'store/reducers';

/**
 * Установить текущую цепочку breadcrumbs
 */
export const useSetBreadcrumbsById = () => {
	const dispatch = useDispatch();

	// выбраны ли какие-нибудь разделы
	const isSectionSelected = !!useMatch('catalog/section/:id');
	// выбран ли какой-то товар
	const isProductSectionSelected = !!useMatch('catalog/product/:id');
	// требуется ли сброс breadcrumbs
	const needToResetBreadcrumbs = !!useMatch('/catalog');

	const setBreadcrumbsById = useCallback(async (id: string | undefined) => {
		if (needToResetBreadcrumbs) {
			dispatch(resetBreadcrumbs());
			return;
		}

		if (isProductSectionSelected && id) {
			try {
				const { data } = await fetchProductByIdAsync(id);
				const sectionId = data.section;
				const payload = {
					selectedId: data.id,
					selectedTitle: data.title,
				};
				restoreSectionBreadcrumbs(sectionId, dispatch);
				dispatch(setProduct(payload));
			} catch (e) {
				console.error(e);
			}
			return;
		}
		if (isSectionSelected && id) {
			restoreSectionBreadcrumbs(id, dispatch);
		}
	}, [dispatch, isProductSectionSelected, isSectionSelected, needToResetBreadcrumbs]);

	return { setBreadcrumbsById };
};
