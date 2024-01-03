const bcrypt = require('bcrypt');
const { generate } = require('../helpers/token');
const Admin = require('../models/Admin');

// register

async function register( login, password ) {
	if (!password) {
		throw new Error('Password is empty');
	}
	const passwordHash = await bcrypt.hash(password, 10);

	const admin = await Admin.create({ login, password: passwordHash });

	const token = generate({ id: admin.id });

	return {token, admin}
}

// login

async function login(login, password) {
	const admin = await Admin.findOne({ login });

	if (!admin) {
		throw new Error('Login not found');
	}

	const isPasswordMatch = await bcrypt.compare(password, admin.password);

	if (!isPasswordMatch) {
		throw new Error('Wrong password');
	}

	const token = generate({ id: admin.id });

	return {token, admin}
}

module.exports = {
	register,
	login,
};
