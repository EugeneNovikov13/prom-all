import axios from 'axios';
import { SETTINGS } from '../../settings';

export const fetchUserAsync = async () => {
	return await axios.get(`${SETTINGS.API_URL}/users`);
};
