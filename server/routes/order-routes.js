const express = require('express');

const handleError = require('../services/handle-error');
const { sendOrder } = require('../controllers/order');

const router = express.Router();

router.post('/quick-order', async (req, res) => {
	try {
		await sendOrder(req.body);

		res.send('Заявка успешно отправлена. Ожидайте ответа.');
	} catch (e) {
		e.message = 'Не удалось отправить заявку. Попробуйте снова или свяжитесь с нами по телефону.'
		handleError(res, e);
	}
});

module.exports = router;
