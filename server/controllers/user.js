const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { generate } = require('../services/token');
const reCaptchaTest = require('../services/recaptcha-test');
const mailService = require('../services/mail-service');
const User = require('../models/User');

// register

async function register(userData, captchaToken) {
	const captchaTestResult = await reCaptchaTest(captchaToken, process.env.RECAPTCHA_SECRET_KEY);
	if (!captchaTestResult) {
		throw new Error('Проверка reCaptcha не пройдена');
	}

	if (!userData.password) {
		throw new Error('Заполните пароль');
	}

	const existingLogin = await User.findOne({ login: userData.login });
	if (existingLogin) {
		throw new Error('Пользователь с таким логином уже существует');
	}

	const existingEmail = await User.findOne({ email: userData.email });
	if (existingEmail) {
		throw new Error('Пользователь с такой электронной почтой уже существует');
	}

	const passwordHash = await bcrypt.hash(userData.password, 10);

	const activationLink = uuid.v4();

	const dataForDataBase = {
		...userData,
		password: passwordHash,
		activationLink,
	};
	const user = await User.create(dataForDataBase);
	await mailService.sendActivationMail(userData.email, `${process.env.API_URL}/activate/${activationLink}`);

	const token = generate({ id: user.id });

	return { token, user };
}

// login

async function login(userData, captchaToken) {
	const captchaTestResult = await reCaptchaTest(captchaToken, process.env.RECAPTCHA_SECRET_KEY);
	if (!captchaTestResult) {
		throw new Error('Проверка reCaptcha не пройдена');
	}

	const user = await User.findOne({ login: userData.login });
	if (!user) {
		throw new Error('Пользователь не найден');
	}

	const isPasswordMatch = await bcrypt.compare(userData.password, user.password);

	if (!isPasswordMatch) {
		throw new Error('Неверный пароль');
	}

	const token = generate({ id: user.id });

	return { token, user };
}

async function editUser(id, data) {
	return User.findByIdAndUpdate(id, data, { returnDocument: 'after', runValidators: true });
}

async function activate(activationLink) {
	const user = await User.findOne({ activationLink });
	if (!user) {
		throw new Error('Некорректная ссылка активации');
	}

	user.isActivated = true;
	await user.save();
}

module.exports = {
	register,
	login,
	editUser,
	activate,
};
