const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
	login: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	organization: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: validator.isEmail,
			message: 'Адрес электронной почты должен быть правильным',
		},
	},
	phone: {
		type: String,
		required: true,
	},
	isActivated: {
		type: Boolean,
		default: false,
	},
	activationLink: {
		type: String,
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
