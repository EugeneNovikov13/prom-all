/**
 * Промо-акция
 */
export interface IPromo {
	/**
	 * id акции
	 */
	id: string,
	/**
	 * Заголовок акции
	 */
	title: string,
	/**
	 * Содержимое акции (HTML-разметка или текст)
	 */
	content: string,
	/**
	 * Фон акции
	 */
	background: string,
}
