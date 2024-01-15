const express = require('express');

const handleError = require('../helpers/handle-error');
const { sendApplication } = require('../controllers/application');

const router = express.Router();

router.post('/quick-application', async (req, res) => {
	try {
		await sendApplication(req.body);

		res.send('Заявка успешно отправлена. Ожидайте ответа.');
	} catch (e) {
		e.message = 'Не удалось отправить заявку. Попробуйте снова или свяжитесь с нами по телефону.'
		handleError(res, e);
	}
});

module.exports = router;
