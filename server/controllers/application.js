const reCaptchaTest = require('../helpers/recaptcha-test');

async function sendApplication({ formData, captchaToken }) {
	const captchaTestResult = await reCaptchaTest(captchaToken, process.env.RECAPTCHA_SECRET_KEY);

	if (!captchaTestResult) {
		throw new Error('Проверка reCaptcha не пройдена');
	}

	console.log('FORM-DATA: ', formData);
	//здесь запускать отправку письма на почту

	return captchaTestResult;
}

module.exports = {
	sendApplication,
};
