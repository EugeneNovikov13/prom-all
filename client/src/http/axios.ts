import axios from 'axios';
import { SETTINGS } from 'settings';

/**
 * Инстанс axios
 */
const api = axios.create({
	withCredentials: true,
	baseURL: SETTINGS.API_URL
})

export default api;
