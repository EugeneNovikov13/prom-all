import axios from 'axios';
import { SETTINGS } from '../../settings';

export const fetchProductsBySectionIdAsync = async id => {
	try {
		return await axios.get(`${SETTINGS.API_URL}/products/section/${id}`);
	} catch (e) {
		console.error(e);
	}
};
