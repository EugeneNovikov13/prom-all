/**
 * Состояние модального окна
 */
export interface IModal {
	/**
	 * Открыто или нет модальное окно
	 */
	isOpen: boolean,
	/**
	 * Фон модального окна
	 */
	backgroundColor: string,
	/**
	 * Название компонента, который должен быть в модальном окне
	 */
	component: string,
	/**
	 * Заголовок модального окна
	 */
	title: string,
	/**
	 * Содержимое модального окна (HTML-разметка или текст)
	 */
	content: string,
}
