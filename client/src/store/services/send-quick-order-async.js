import axios from 'axios';
import { SETTINGS } from '../../settings';

export const sendQuickOrderAsync = async (value, formData) => {
	try {
		const response = await axios({
			method: 'post',
			url: `${SETTINGS.API_URL}/quick-order`,
			data: {
				formData,
				captchaToken: value,
			},
		});

		return { data: response.data, error: null };
	} catch (e) {
		return { data: null, error: e.response.data };
	}
};
