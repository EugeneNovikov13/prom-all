const reCaptchaTest = require('../helpers/recaptcha-test');
const mailService = require('../services/mail-service');

async function handleQuickOrder({ formData, captchaToken }) {
	const captchaTestResult = await reCaptchaTest(captchaToken, process.env.RECAPTCHA_SECRET_KEY);

	if (!captchaTestResult) {
		throw new Error('Проверка reCaptcha не пройдена');
	}

	//здесь отправляем письмо на почту
	await mailService.sendQuickOrder(formData);
}

module.exports = {
	sendOrder: handleQuickOrder,
};
