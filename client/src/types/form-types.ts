import { Schema } from 'yup';

/**
 * Схема формы (дженерик)
 * @T - Интерфейс полей формы
 */
export type FormSchema<T> = {
	[K in keyof Required<T>]: Schema<T[K]>;
};

/**
 * Поля формы регистрации
 */
export interface IRegistrationForm {
	/**
	 * Логин пользователя
	 */
	login: string;
	/**
	 * Пароль пользователя
	 */
	password: string;
	/**
	 * Подтверждение пароля
	 */
	passwordConfirm: string;
	/**
	 * ФИО пользователя
	 */
	name: string;
	/**
	 * Название организации пользователя
	 */
	organization: string;
	/**
	 * Электронная почта пользователя
	 */
	email: string;
	/**
	 * Номер телефона пользователя
	 */
	phone: string;
}

/**
 * Поля формы авторизации
 */
export interface IAuthorizationForm {
	/**
	 * Логин пользователя
	 */
	login: string;
	/**
	 * Пароль пользователя
	 */
	password: string;
}

/**
 * Поля формы на странице Аккаунт
 */
export interface IAccountForm {
	/**
	 * ФИО пользователя
	 */
	name: string;
	/**
	 * Название организации пользователя
	 */
	organization: string;
	/**
	 * Электронная почта пользователя
	 */
	email: string;
	/**
	 * Номер телефона пользователя
	 */
	phone: string;
}

/**
 * Поля формы быстрого заказа
 */
export interface IQuickOrderForm {
	/**
	 * ФИО пользователя
	 */
	name: string;
	/**
	 * Название организации пользователя
	 */
	organization: string;
	/**
	 * Электронная почта пользователя
	 */
	email: string;
	/**
	 * Номер телефона пользователя
	 */
	phone: string;
	/**
	 * Текст заказа
	 */
	order: string;
}
