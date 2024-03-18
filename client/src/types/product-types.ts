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
	images: Image[];
	/**
	 * Разновидности товара
	 */
	kinds: Kind[];
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
	images: Image[];
	/**
	 * Разновидности товара
	 */
	kinds: Omit<Kind, 'id'>[];
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
interface Image {
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
interface Kind {
	/**
	 * id разновидности
	 */
	id: string;
	/**
	 * Название разновидности
	 */
	title: string;
}
