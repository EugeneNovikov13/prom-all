import api from '../axios';
import { AxiosResponse } from 'axios';
import { UserResponse } from '../models/response/user-response';

/**
 * Запрос данных текущего пользователя
 * @returns Данные пользователя | 'admin' | null
 */
export const fetchUserAsync = async ():Promise<AxiosResponse<UserResponse>> => {
	return api.get<UserResponse>('/users');
};
