const axios = require('axios');

module.exports = async function recaptchaTest(token, secret) {
	try {
		const result = await axios({
			method: 'post',
			url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
		})

		return result.data.success;
	} catch (e) {
		throw new Error('Проверка reCaptcha не пройдена');
	}
}
