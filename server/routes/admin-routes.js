const express = require('express');

const { register, login } = require('../controllers/admin');
const mapAdmin = require('../helpers/mapAdmin');
const handleError = require('../helpers/handle-error');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/users', authenticated, async (req, res) => {
	try {
		const user = req.user;

		res.send(mapAdmin(user));
	} catch (e) {
		handleError(res, e);
	}
})

router.post('/register', async (req, res) => {
	try {
		const { token, admin } = await register(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
			.send(mapAdmin(admin));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/login', async (req, res) => {
	try {
		const { token, admin } = await login(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
			.send(mapAdmin(admin));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/logout', (req, res) => {
	try {
		res.cookie('token', '', { httpOnly: true })
			.send('Выход успешно выполнен');
	} catch (e) {
		handleError(res, e);
	}
});

module.exports = router;
