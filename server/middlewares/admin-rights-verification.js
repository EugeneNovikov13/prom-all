const handleError = require('../services/handle-error');
const ROLE_ID = require('../constants/role-id');

module.exports = async function(req, res, next) {
	const user = req.user;

	if (user.roleId !== ROLE_ID.ADMIN) {
		handleError(res, {message: 'Недостаточно прав доступа'}, 403);
		next('route');
	}

	next();
};
