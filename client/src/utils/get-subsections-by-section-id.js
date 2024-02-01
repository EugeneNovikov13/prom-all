import { catalogList } from '../constants';

export const getSubsectionsBySectionId = id => {
	for (let category of catalogList) {
		if (category.id === id) {
			return category.subcategories;
		}
		for (let subcategory of category.subcategories) {
			if (subcategory.id === id) {
				if (subcategory.types) {
					return subcategory.types;
				}
			}
		}
	}
	return null;
};
