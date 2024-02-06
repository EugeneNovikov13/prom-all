import axios from 'axios';
import { SETTINGS } from '../../settings';

export const fetchProductByIdAsync = async id => {
	try {
		return await axios.get(`${SETTINGS.API_URL}/products/${id}`);
	} catch (e) {
		console.error(e);
	}
};
