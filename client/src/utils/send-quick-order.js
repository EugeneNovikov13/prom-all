import axios from 'axios';

export const sendQuickOrder = async (value, formData) => {
	try {
		const response = await axios({
			method: 'post',
			url: '/quick-order',
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
