import React from 'react';

/**
 * Категории каталога
 */
export interface ICategory {
	/**
	 * id категории
	 */
	id: string;
	/**
	 * Название категории
	 */
	title: string;
	/**
	 * Картинка категории
	 */
	image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	/**
	 * Список подкатегорий категории
	 */
	subcategories: ISubcategory[];
}

/**
 * Подкатегории категории
 */
export interface ISubcategory {
	/**
	 * id подкатегории
	 */
	id: string;
	/**
	 * Название подкатегории
	 */
	title: string;
	/**
	 * Картинка подкатегории
	 */
	image: string;
	/**
	 * Короткое название подкатегории (необязательно)
	 */
	shortTitle?: string;
	/**
	 * Список типов подкатегории (необязательно)
	 */
	types?: IType[];
}

/**
 * Типы товаров подкатегории
 */
export interface IType {
	/**
	 * id типа товара
	 */
	id: string;
	/**
	 * Название типа товаров
	 */
	title: string;
	/**
	 * Картинка типа товаров
	 */
	image: string;
}
