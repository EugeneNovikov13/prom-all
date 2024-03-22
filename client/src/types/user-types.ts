/**
 * Пользователь
 */
export interface IUser {
	/**
	 * id пользователя
	 */
	id: string,
	/**
	 * Логин пользователя
	 */
	login: string,
	/**
	 * ФИО пользователя
	 */
	name: string,
	/**
	 * Название организации пользователя
	 */
	organization: string,
	/**
	 * Электронная почта пользователя
	 */
	email: string,
	/**
	 * Номер телефона пользователя
	 */
	phone: string,
	/**
	 * Подтверждена почта или нет
	 */
	isActivated: boolean,
}
