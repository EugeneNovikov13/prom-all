const express = require('express');

const handleError = require('../helpers/handle-error');
const { sendApplication } = require('../controllers/application');

const router = express.Router();

router.post('/quick-application', async (req, res) => {
	try {
		const result = await sendApplication(req.body);

		res.send('Заявка успешно отправлена. Ожидайте ответа.');
	} catch (e) {
		handleError(res, e);
	}
});

module.exports = router;
