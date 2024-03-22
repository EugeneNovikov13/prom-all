import { IAccountForm } from 'types';

/**
 * Редактирование пользователя
 */
export interface IUpgradeUserRequest {
	/**
	 * id пользователя
	 */
	id: string;
	/**
	 * Новые данные пользователя
	 */
	formData: IAccountForm;
}
