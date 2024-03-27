import { IAccountForm } from 'types';

/**
 * Редактирование пользователя
 */
export interface IUpdateUserRequest {
	/**
	 * id пользователя
	 */
	id: string;
	/**
	 * Новые данные пользователя
	 */
	formData: IAccountForm;
}
