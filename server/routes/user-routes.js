const express = require('express');
const ROLE_ID = require('../constants/role-id');

const { register, login, administratorConfirmation, adminLogin, editUser, activate } = require('../controllers/user');
const mapUser = require('../helpers/mapUser');
const handleError = require('../services/handle-error');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/users', authenticated, async (req, res) => {
	try {
		if (!req.user) {
			res.send(null);
			return;
		}

		if (req.user.roleId === ROLE_ID.ADMIN && !req.user.isActivated) {
			await administratorConfirmation(req.user);
			res.json('admin');
			return;
		}

		res.send(mapUser(req.user));
	} catch (e) {
		handleError(res, e);
	}
})

router.post('/register', async (req, res) => {
	try {
		const { token, user } = await register(req.body.userData, req.body.captchaToken);

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: true })
			.send(mapUser(user));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/login', async (req, res) => {
	try {
		const { token, user } = await login(req.body.userData, req.body.captchaToken);

		if (user === 'admin') {
			//время жизни токена для подтверждения прав администратора устанавливаем 15 минут
			res.cookie('token', token, { httpOnly: true, maxAge: 15 * 60 * 1000, secure: true })
				.json(user);
			return;
		}

		res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: true })
			.send(mapUser(user));
	} catch (e) {
		handleError(res, e,  401);
	}
});

router.get('/activate/:link', async (req, res) => {
	try {
		const activationLink = req.params.link;

		await activate(activationLink);
		return res.redirect(process.env.CLIENT_URL);
	}
	catch (e) {
		handleError(res, e);
	}
});

router.post('/two-factor-auth', authenticated, async (req, res) => {
	try {
		const userData = req.user;
		const { token, user } = await adminLogin(req.body.code, userData);

		res.cookie('token', token, { httpOnly: true, maxAge: 8 * 60 * 60 * 1000, secure: true })
			.send(mapUser(user));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/logout', (req, res) => {
	try {
		res.cookie('token', '', { httpOnly: true, secure: true })
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
		handleError(res, e);
	}
});

module.exports = router;
