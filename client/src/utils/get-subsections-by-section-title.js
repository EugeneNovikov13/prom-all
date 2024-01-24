import { catalogList } from '../constants';

export const getSubsectionsBySectionTitle = (section, breadcrumbs) => {
	const currentCategoryId = breadcrumbs.category.selectedId;
	const currentSubcategoryId = breadcrumbs.subcategory.selectedId;

	switch (section) {
		case 'category': {
			return catalogList.map(item => ({
				id: item.id,
				title: item.title,
				image: item.image,
			}));
		}
		case 'subcategory': {
			const currentCategory = catalogList.find(
				item => item.id === currentCategoryId,
			);
			return currentCategory.subcategories.map(item => ({
				id: item.id,
				title: item.title,
				image: item.image,
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
				image: item.image,
			}));
		}
		default: {
			break;
		}
	}
};
