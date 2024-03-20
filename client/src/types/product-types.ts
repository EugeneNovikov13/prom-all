/**
 * Товар
 */
export interface IProduct {
	/**
	 * id товара
	 */
	id: string;
	/**
	 * Название товара
	 */
	title: string;
	/**
	 * Фотографии товара
	 */
	images: IImage[];
	/**
	 * Разновидности товара
	 */
	kinds: IKind[];
	/**
	 * Описание товара (HTML-разметка или текст)
	 */
	description: string;
	/**
	 * Технические характеристики товара (HTML-разметка или текст)
	 */
	specification: string;
	/**
	 * Раздел, к которому относится товар
	 */
	section: string;
}

/**
 * Новый товар
 */
export interface INewProduct {
	/**
	 * Название товара
	 */
	title: string;
	/**
	 * Фотографии товара
	 */
	images: IImage[];
	/**
	 * Разновидности товара
	 */
	kinds: Omit<IKind, 'id'>[];
	/**
	 * Описание товара (HTML-разметка или текст)
	 */
	description: string;
	/**
	 * Технические характеристики товара (HTML-разметка или текст)
	 */
	specification: string;
	/**
	 * Раздел, к которому относится товар
	 */
	section: string;
}

/**
 * Фотография товара
 */
export interface IImage {
	/**
	 * id фотографии
	 */
	id: string;
	/**
	 * URL фотографии
	 */
	image: string;
}

/**
 * Разновидность товара
 */
export interface IKind {
	/**
	 * id разновидности
	 */
	id: string;
	/**
	 * Название разновидности
	 */
	title: string;
}
