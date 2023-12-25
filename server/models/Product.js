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
		// проверить можно ли задать при этой настройке двум разным товарам один и тот же kind.title
		// удалить, если нельзя
		unique: true,
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
		//проверить работает ли этот required и поменять на true
		required: false,
	},
	kind: {
		type: [Kind],
		default: undefined,
		//проверить работает ли этот required независимо от required внутри типа Kind и удалить
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
