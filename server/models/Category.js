const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const validator = require('validator');

const Type = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
})

const Subcategory = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'URL should be a valid',
		},
	},
	types: {
		type: [Type],
		default: undefined,
		required: false,
	},
});

const CategorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: validator.isURL,
			message: 'URL should be a valid',
		},
	},
	subcategories: {
		type: [Subcategory],
		default: undefined,
		required: true,
	},
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
