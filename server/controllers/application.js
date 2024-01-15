const reCaptchaTest = require('../helpers/recaptcha-test');
const mailService = require('../services/mail-service');

async function handleQuickApplication({ formData, captchaToken }) {
	const captchaTestResult = await reCaptchaTest(captchaToken, process.env.RECAPTCHA_SECRET_KEY);

	if (!captchaTestResult) {
		throw new Error('Проверка reCaptcha не пройдена');
	}

	//здесь отправляем письмо на почту
	await mailService.sendQuickApplication(formData);
}

module.exports = {
	sendApplication: handleQuickApplication,
};
