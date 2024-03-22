import { catalogList } from '../constants';
import { ISubcategory, IType } from '../types';

/**
 * Получить перечень подразделов по id раздела
 * @param id раздела
 * @returns {IType[]|ISubcategory[]|null} - список типов | список подкатегорий | null
 */
export const getSubsectionsBySectionId = (id: string): IType[] | ISubcategory[] | null => {
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
