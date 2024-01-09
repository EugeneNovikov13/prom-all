const bcrypt = require('bcrypt');
const { generate } = require('../helpers/token');
const Admin = require('../models/Admin');

// register

async function register( login, password ) {
	if (!password) {
		throw new Error('Заполните пароль');
	}
	const passwordHash = await bcrypt.hash(password, 10);

	const existingAdmin = await Admin.findOne({login});

	if (existingAdmin) {
		throw new Error('Данный администратор уже существует')
	}

	const admin = await Admin.create({ login, password: passwordHash });

	const token = generate({ id: admin.id });

	return {token, admin}
}

// login

async function login(login, password) {
	const admin = await Admin.findOne({ login });

	if (!admin) {
		throw new Error('Пользователь не найден');
	}

	const isPasswordMatch = await bcrypt.compare(password, admin.password);

	if (!isPasswordMatch) {
		throw new Error('Неверный пароль');
	}

	const token = generate({ id: admin.id });

	return {token, admin}
}

module.exports = {
	register,
	login,
};
