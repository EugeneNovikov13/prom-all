const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const validator = require('validator');

const Image = new Schema({
	imageURL: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'URL should be a valid',
		},
	}
});

const Kind = new Schema({
	title: {
		type: String,
		required: true,
	}
});

const ProductSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	images: {
		type: [Image],
		default: undefined,
		required: true,
	},
	kinds: {
		type: [Kind],
		default: undefined,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
	specification: {
		type: String,
		required: false,
	},
	section: {
		type: String,
		required: true,
	}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
