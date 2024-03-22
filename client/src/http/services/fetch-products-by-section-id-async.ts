import { AxiosResponse } from 'axios';
import { ProductsBySectionResponse } from '../models/response/products-by-section-response';
import api from '../axios';

/**
 * Запрос всех товаров раздела
 * @param id раздела
 * @returns Все товара раздела | Количество товаров раздела
 */
export const fetchProductsBySectionIdAsync = async (id: string): Promise<AxiosResponse<ProductsBySectionResponse>> => {
	return api.get<ProductsBySectionResponse>(`/products/section/${id}`);
};
