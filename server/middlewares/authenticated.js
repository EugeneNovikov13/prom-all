const { verify } = require('../helpers/token');
const User = require('../models/User');
const handleError = require('../helpers/handle-error');

module.exports = async function(req, res, next) {
	const token = req.cookies.token;

	if (req.url === '/users' && !token) {
		next();
		return;
	}

	if (!token) {
		handleError(res, {message: 'Вы должны сначала авторизоваться'}, 401);
		next('route');
		return;
	}

	const tokenData = verify(req.cookies.token);

	const user = await User.findOne({ _id: tokenData.id });

	if (!user) {
		handleError(res, {message: 'Ваш токен недействителен. Авторизуйтесь'}, 401);
		next('route');
		return;
	}

	req.user = user;

	next();
};
