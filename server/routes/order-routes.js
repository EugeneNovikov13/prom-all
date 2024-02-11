const express = require('express');

const handleError = require('../services/handle-error');
const { sendOrder } = require('../controllers/order');

const router = express.Router();

router.post('/quick-order', async (req, res) => {
	try {
		await sendOrder(req.body);

		res.send('Запрос успешно отправлен. Ожидайте ответа.');
	} catch (e) {
		handleError(res, e);
	}
});

module.exports = router;
