import { catalogList } from '../constants';
import { Breadcrumbs, ISubsection } from 'types';

/**
 * Получить список разделов текущей "крошки"
 * @param section - 'category' | 'subcategory' | 'type'
 * @param breadcrumbs - объект breadcrumbs из состояния redux
 * @returns {ICategory[] | ISubcategory[] | IType[] | undefined}
 */
export const getSubsectionsBySectionTitle = (
	section: string,
	breadcrumbs: Breadcrumbs,
): ISubsection[] | undefined => {
	const currentCategoryId = breadcrumbs.category.selectedId;
	const currentSubcategoryId = breadcrumbs.subcategory.selectedId;

	switch (section) {
		case 'category': {
			return catalogList.map(item => ({
				id: item.id,
				title: item.title,
			}));
		}
		case 'subcategory': {
			const currentCategory = catalogList.find(
				item => item.id === currentCategoryId,
			);
			return currentCategory?.subcategories.map(item => ({
				id: item.id,
				title: item.shortTitle || item.title,
			}));
		}
		case 'type': {
			const currentCategory = catalogList.find(
				item => item.id === currentCategoryId,
			);
			const currentSubcategory = currentCategory?.subcategories.find(
				item => item.id === currentSubcategoryId,
			);
			return currentSubcategory?.types?.map(item => ({
				id: item.id,
				title: item.title,
			}));
		}
		default: {
			break;
		}
	}
};
