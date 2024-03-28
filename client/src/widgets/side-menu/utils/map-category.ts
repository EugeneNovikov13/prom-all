import { ICategory } from '../../../types';

export const mapCategoryList = (cat: ICategory) => ({
	id: cat.id,
	title: cat.title,
	image: cat.image,
	subcategories: cat.subcategories,
});
