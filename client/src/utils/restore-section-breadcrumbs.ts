import { findWayToId } from './find-way-to-id';
import { capitalizeString } from './capitalize-string';
import { catalogList } from '../constants';
import { catalogSlice } from '../store/reducers';
import { AppDispatch } from '../store/store';

type BreadcrumbsAction = 'setCategory' | 'setSubcategory' | 'setType';

/**
 * Восстановить breadcrumbs в случае необходимости по id из адресной строки
 * @param id - params.id - id раздела или товара
 * @param dispatch - функция redux
 */
export const restoreSectionBreadcrumbs = (id: string, dispatch: AppDispatch) => {
	const breadcrumbsSectionTitles = ['category', 'subcategory', 'type'];
	const way = findWayToId(catalogList, id);

	way.forEach((section, index) => {
		const payload = {
			selectedId: section.id,
			selectedTitle: section.title,
		};
		//собираем название action "вручную"
		const action = `set${capitalizeString(breadcrumbsSectionTitles[index])}` as BreadcrumbsAction;
		dispatch(catalogSlice.actions[action](payload));
	});
};
