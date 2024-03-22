import { IQuickOrderForm } from 'types';
import api from '../axios';
import { AxiosResponse } from 'axios';

/**
 * Отправка быстрой заявки
 * @param value - токен Captcha
 * @param formData - данные заказа
 * @returns Сообщение об успешной отправке заказа
 */
export const sendQuickOrderAsync = async (value: string, formData: IQuickOrderForm): Promise<AxiosResponse<string>> => {
	return api.post<string>('/quick-order', { formData, captchaToken: value });
};
