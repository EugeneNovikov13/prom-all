import { catalogList } from '../widgets/categories/constants/catalog-list';

export const getSectionsByTitle = (section, breadcrumbs) => {
	const currentCategoryId = breadcrumbs.category.selectedId;
	const currentSubcategoryId = breadcrumbs.subcategory.selectedId;
	const currentTypeId = breadcrumbs.type.selectedId;

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
			return currentCategory.subcategories.map(item => ({
				id: item.id,
				title: item.title,
			}));
		}
		case 'type': {
			const currentCategory = catalogList.find(
				item => item.id === currentCategoryId,
			);
			const currentSubcategory = currentCategory.subcategories.find(
				item => item.id === currentSubcategoryId,
			);
			return currentSubcategory.types.map(item => ({
				id: item.id,
				title: item.title,
			}));
		}
		case 'product': {
			const currentCategory = catalogList.find(
				item => item.id === currentCategoryId,
			);
			const currentSubcategory = currentCategory.subcategories.find(
				item => item.id === currentSubcategoryId,
			);
			if (currentSubcategory.types) {
				// const currentType = currentSubcategory.find(item => item.id === currentTypeId);
				//TODO запрос
				// return currentType.types.map(item => ({
				// 	id: item.id,
				// 	title: item.title,
				// }))
			}
			//TODO запрос
			return currentSubcategory.types.map(item => ({
				id: item.id,
				title: item.title,
			}));
		}
		default: {
			break;
		}
	}
};
