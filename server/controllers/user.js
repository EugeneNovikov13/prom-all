const bcrypt = require('bcrypt');
const { generate } = require('../helpers/token');
const reCaptchaTest = require('../helpers/recaptcha-test');
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
	const passwordHash = await bcrypt.hash(userData.password, 10);

	const existingUser = await User.findOne({ login: userData.login });
	if (existingUser) {
		throw new Error('Данный пользователь уже существует');
	}

	const dataForDataBase = {
		login: userData.login,
		password: passwordHash,
		name: userData.name,
		organization: userData.organization,
		email: userData.email,
		phone: userData.phone,
	};
	const user = await User.create(dataForDataBase);
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

module.exports = {
	register,
	login,
	editUser,
};
