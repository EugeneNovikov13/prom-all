const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const validator = require('validator');

const BrandSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique:true,
	},
	logo: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'URL should be a valid',
		},
	},
	isOfficial: {
		type: Boolean,
		required: false,
		default: false,
	}
});

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;
