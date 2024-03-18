import { IAuthorizationForm } from '../../../types';

/**
 * Авторизация
 */
export interface IAuthorizationRequest {
	/**
	 * Данные пользователя
	 */
	userData: IAuthorizationForm,
	/**
	 * Токен Captcha
	 */
	captchaToken: string,
}
