import { ICategory } from '../types';

interface ICrumb {
	/**
	 * id "крошки"
	 */
	id: string;
	/**
	 * Название "крошки"
	 */
	title: string;
}

/**
 * Построить breadcrumbs по id товара или раздела
 * @param catalog - Каталог
 * @param id - id товара или раздела
 * @returns - Список "крошек" в порядке от категории к товару
 */
export const findWayToId = (catalog: ICategory[], id: string): ICrumb[] => {
	const way = [];
	for (let category of catalog) {
		if (category.id === id) {
			way.push({ id: category.id, title: category.title });
			break;
		}
		for (let subcategory of category.subcategories) {
			if (subcategory.id === id) {
				way.push({ id: category.id, title: category.title });
				way.push({ id: subcategory.id, title: subcategory.title });
				break;
			}
			if (subcategory.types) {
				for (let type of subcategory.types) {
					if (type.id === id) {
						way.push({ id: category.id, title: category.title });
						way.push({ id: subcategory.id, title: subcategory.title });
						way.push({ id: type.id, title: type.title });
						break;
					}
				}
			}
		}
	}
	return way;
};
