const express = require('express');
const { register, login } = require('../controllers/admin');
const mapAdmin = require('../helpers/mapAdmin');
const handleError = require('../helpers/handle-error');

const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const { token, admin } = await register(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		handleError(res, e, 'Registration denied');
	}
});

router.post('/login', async (req, res) => {
	try {
		const { token, admin } = await login(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		handleError(res, e, e.message);
	}
});

router.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true })
		.send({});
});

module.exports = router;
