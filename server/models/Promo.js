const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const validator = require('validator');

const PromoSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	background: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'Некорректная ссылка на фоновое изображение',
		},
	},
});

const Promo = mongoose.model('Promo', PromoSchema);

module.exports = Promo;
