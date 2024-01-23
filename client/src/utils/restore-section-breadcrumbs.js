import { findWayToId } from './find-way-to-id';
import { capitalizeString } from './capitalize-string';
import { catalogList } from '../constants';
import { catalogSlice } from '../store/reducers';

export const restoreSectionBreadcrumbs = (id, dispatch) => {
	const breadcrumbsSectionTitles = ['category', 'subcategory', 'type'];
	const way = findWayToId(catalogList, id);

	way.forEach((section, index) => {
		const payload = {
			selectedId: section.id,
			selectedTitle: section.title,
		};
		//собираем название action "вручную"
		const action = `set${capitalizeString(breadcrumbsSectionTitles[index])}`;
		dispatch(catalogSlice.actions[action](payload));
	});
};
