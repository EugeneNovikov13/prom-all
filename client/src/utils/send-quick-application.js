import axios from 'axios';

export const sendQuickApplication = async (value, formData) => {
	try {
		const response = await axios({
			method: 'post',
			url: '/quick-application',
			data: {
				formData,
				captchaToken: value,
			},
		});

		return {data: response.data, error: null};
	} catch (e) {
		return {data: null, error: e.response.data};
	}
};
