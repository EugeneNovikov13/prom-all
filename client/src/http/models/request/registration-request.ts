import { IRegistrationForm } from '../../../types';

/**
 * Регистрация пользователя
 */
export interface IRegistrationRequest {
	/**
	 * Данные пользователя
	 */
	userData: IRegistrationForm;
	/**
	 * Токен Captcha
	 */
	captchaToken: string;
}
