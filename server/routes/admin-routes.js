const express = require('express');
const { register, login } = require('../controllers/admin');
const mapAdmin = require('../helpers/mapAdmin');

const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const { token, admin } = await register(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		res.send({ error: e });
	}
});

router.post('/login', async (req, res) => {
	try {
		const { token, admin } = await login(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		res.send({ error: e.message });
	}
});

router.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true })
		.send({});
});

module.exports = router;
