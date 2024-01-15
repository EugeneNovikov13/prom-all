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

	async sendQuickApplication(data) {
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
						<pre style='padding-left: 10px'>${data.application}</pre>

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
}

module.exports = new MailService();
