import axios from 'axios';
import { SETTINGS } from '../../settings';

export const fetchProductsBySectionIdAsync = async id => {
	return await axios.get(`${SETTINGS.API_URL}/products/section/${id}`);
};
