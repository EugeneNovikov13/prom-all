const express = require('express');

const { register, login, editUser } = require('../controllers/user');
const mapUser = require('../helpers/mapUser');
const handleError = require('../helpers/handle-error');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/users', authenticated, async (req, res) => {
	try {
		if (req.user) {
			res.send(mapUser(req.user));
			return;
		}
		res.send(null);
	} catch (e) {
		handleError(res, e);
	}
})

router.post('/register', async (req, res) => {
	try {
		const { token, user } = await register(req.body.userData, req.body.captchaToken);

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
			.send(mapUser(user));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/login', async (req, res) => {
	try {
		const { token, user } = await login(req.body.userData, req.body.captchaToken);

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
			.send(mapUser(user));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/logout', (req, res) => {
	try {
		res.cookie('token', '', { httpOnly: true })
			.send({});
	} catch (e) {
		handleError(res, e);
	}
});

router.patch('/users/:id', authenticated, async (req, res) => {
	try {
		const user = await editUser(req.params.id, req.body);

		res.send(mapUser(user));
	} catch (e) {
		e.message = 'Ошибка! Не удалось изменить данные пользователя';
		handleError(res, e);
	}
});

module.exports = router;