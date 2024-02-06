module.exports = function (user) {
	return {
		id: user.id,
		login: user.login,
		name: user.name,
		organization: user.organization,
		email: user.email,
		phone: user.phone,
		isActivated: user.isActivated,
		roleId: user.roleId,
	}
}
