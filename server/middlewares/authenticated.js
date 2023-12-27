const { verify } = require('../helpers/token');
const Admin = require('../models/Admin');

module.exports = async function(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		// TODO добавить сюда route
		next('This page is unavailable');
		return;
	}

	const tokenData = verify(req.cookies.token);

	const user = await Admin.findOne({ _id: tokenData.id });

	if (!user) {
		return;
	}

	req.user = user;

	next();
};
