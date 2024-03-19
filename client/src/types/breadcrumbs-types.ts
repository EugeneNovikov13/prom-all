export enum SectionName {
	/**
	 * Категории товаров
	 */
	Category = 'category',
	/**
	 * Подкатегории категорий
	 */
	Subcategory = 'subcategory',
	/**
	 * Типы подкатегорий
	 */
	Type = 'type',
	/**
	 * Виды товаров в разделе (подкатегории или типы)
	 */
	Product = 'product',
}

export type Breadcrumbs = {
	[key in SectionName]: ISection;
};

export interface ISection {
	/**
	 * id выбранного раздела
	 */
	selectedId: string;
	/**
	 * Название выбранного раздела
	 */
	selectedTitle: string;
}
