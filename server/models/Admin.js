const mongoose = require('mongoose');
const validator = require('validator');

const AdminSchema = mongoose.Schema({
	login: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: validator.isJWT,
			message: 'Token should be a valid',
		}
	},
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
