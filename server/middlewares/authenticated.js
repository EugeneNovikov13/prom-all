const { verify } = require('../helpers/token');
const Admin = require('../models/Admin');
const handleError = require('../helpers/handle-error');

module.exports = async function(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		handleError(res, {message: 'Вы должны сначала авторизоваться'}, 401);
		next('route');
		return;
	}

	const tokenData = verify(req.cookies.token);

	const user = await Admin.findOne({ _id: tokenData.id });

	if (!user) {
		handleError(res, {message: 'Ваш токен недействителен. Авторизуйтесь'}, 401);
		next('route');
		return;
	}

	req.user = user;

	next();
};
