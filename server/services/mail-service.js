const nodemailer = require('nodemailer');

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: true, //ssl
			auth: {
				user: process.env.SMTP_EMAIL_USER,
				pass: process.env.SMTP_APP_PASSWORD,
			},
		});
	}

	async sendQuickOrder(data) {
		return await this.transporter.sendMail({
			from: process.env.SMTP_EMAIL_USER,
			to: process.env.API_EMAIL,
			subject: `Входящая заявка с сайта от ${data.name}, представителя организации ${data.organization}`,
			text: '',
			html:
				`
					<fieldset style='padding: 0 30px; border-radius: 4px; border: 1px dashed grey; background: #fafafa;'>
						<legend>Заявка с сайта</legend>
						<p style='text-decoration: underline'>Текст запроса:</p>
						<pre style='padding-left: 10px'>${data.order}</pre>

						<ul style='padding: 0'><p style='text-decoration: underline'>Контактные данные:</p>
							<li style='list-style: none; padding-left: 10px'><span>Имя отправителя: ${data.name}</span></li>
							<li style='list-style: none; padding-left: 10px'><span>Название организации: ${data.organization}</span></li>
							<li style='list-style: none; padding-left: 10px'><span>Электронная почта: ${data.email}</span></li>
							<li style='list-style: none; padding-left: 10px'><span>Контактный телефон: ${data.phone}</span></li>
						</ul>

						<p><small>* Данное письмо отправлено с автоматического сервера. Пожалуйста, не отвечайте на него</small></p>
					</fieldset>
				`,
		});
	}

	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_EMAIL_USER,
			to,
			subject: 'Активация аккаунта на ' + process.env.API_URL,
			text: '',
			html:
				`
					<div>
						<h1>Для активации аккаунта перейдите по ссылке:</h1>
						<a href="${link}">${link}</a>
					</div>
				`,
		});
	}

	async sendAuthorizationNumberMail(to, code) {
		await this.transporter.sendMail({
			from: process.env.SMTP_EMAIL_USER,
			to,
			subject: 'Подтверждение авторизации на ' + process.env.API_URL,
			text: '',
			html:
				`
					<div>
						<h2>Для подтверждения авторизации в качестве администратора введите код:</h2>
						<h1>${code}</h1>
					</div>
				`,
		});
	}
}

module.exports = new MailService();
