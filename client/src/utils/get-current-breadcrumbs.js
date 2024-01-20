import { catalogList } from '../widgets/categories/constants/catalog-list';

export const getCurrentBreadcrumbs = (countSections, breadcrumbs, openedCrumb) => {
	const currentCategoryId = breadcrumbs.category.selectedId;
	const currentSubcategoryId = breadcrumbs.subcategory.selectedId;
	let types;

	if (countSections === 3) {
		const currentCategory = catalogList.find(item => item.id === currentCategoryId);
		const currentSubcategory = currentCategory.subcategories.find(
			item => item.id === currentSubcategoryId,
		);
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
