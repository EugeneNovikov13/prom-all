import { AxiosResponse } from 'axios';
import api from '../axios';
import { IProduct } from 'types';

/**
 * Запрос товара по id
 * @param id товара
 * @returns Данные товара
 */
export const fetchProductByIdAsync = async (
	id: string,
): Promise<AxiosResponse<IProduct>> => {
	return api.get<IProduct>(`/products/${id}`);
};
