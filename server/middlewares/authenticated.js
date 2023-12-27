const { verify } = require('../helpers/token');
const Admin = require('../models/Admin');
const handleError = require('../helpers/handle-error');

module.exports = async function(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		handleError(res, 'Попытка несанкционированного доступа', 'Error! You must log in first');
		next('route');
		return;
	}

	const tokenData = verify(req.cookies.token);

	const user = await Admin.findOne({ _id: tokenData.id });

	if (!user) {
		handleError(res, 'Попытка несанкционированного доступа', 'Error! Authenticated user not found');
		next('route');
		return;
	}

	req.user = user;

	next();
};
