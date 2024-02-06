import axios from 'axios';
import { SETTINGS } from '../../settings';

export const fetchUserAsync = async () => {
	try {
		return await axios.get(`${SETTINGS.API_URL}/users`);
	} catch (e) {
		console.error(e);
	}
};
