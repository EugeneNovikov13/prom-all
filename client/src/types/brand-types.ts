/**
 * Партнёр
 */
export interface IBrand {
	/**
	 * id партнёра
	 */
	id: string,
	/**
	 * Название партнёра
	 */
	title: string,
	/**
	 * Логотип партнёра
	 */
	logo: string,
	/**
	 * Официальные дилеры или нет
	 */
	isOfficial: boolean,
}
