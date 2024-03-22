import { catalogList } from '../constants';
import { Breadcrumbs, ICategory, ISubcategory, IType } from 'types';

/**
 * Преобразовать объект breadcrumbs в массив и обрезать его по числу разделов в цепочке
 * @param countSections - число разделов в цепочке
 * @param breadcrumbs - объект breadcrumbs из состояния redux
 * @returns - массив кортежей, где первый элемент - название раздела, а второй - выбранный экземпляр раздела
 */
export const sliceCurrentBreadcrumbs = (
	countSections: number,
	breadcrumbs: Breadcrumbs,
) => {
	const currentCategoryId = breadcrumbs.category.selectedId;
	const currentSubcategoryId = breadcrumbs.subcategory.selectedId;
	let types: IType[] | undefined;

	if (countSections === 3) {
		const currentCategory = catalogList.find(
			item => item.id === currentCategoryId,
		) as ICategory;
		const currentSubcategory = currentCategory.subcategories.find(
			item => item.id === currentSubcategoryId,
		) as ISubcategory;
		types = currentSubcategory.types;
	} else {
		return Object.entries(breadcrumbs).slice(0, countSections);
	}

	if (types) {
		return Object.entries(breadcrumbs).slice(0, countSections);
	}

	const { type, ...breadcrumbsWithoutTypes } = breadcrumbs;

	return Object.entries(breadcrumbsWithoutTypes).slice(0, countSections);
};
