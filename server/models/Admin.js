const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
	login: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
