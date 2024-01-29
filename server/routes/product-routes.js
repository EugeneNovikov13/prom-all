const express = require('express');

const { getProduct, getProducts, getProductsByTitle, addProduct } = require('../controllers/product');
const authenticated = require('../middlewares/authenticated');
const mapProduct = require('../helpers/mapProduct');
const mapProducts = require('../helpers/mapProducts');
const handleError = require('../helpers/handle-error');

const router = express.Router();

router.get('/products/:id', async (req, res) => {
	try {
		const product = await getProduct(req.params.id);

		res.send(mapProduct(product));
	} catch (e) {
		if (e.name === 'CastError') {
			e.message = 'Ошибка! Возможно... Данных о товаре нет в базе данных';
		}
		handleError(res, e);
	}
});

router.get('/products/section/:id', async (req, res) => {
	try {
		const result = await getProducts(req.params.id);

		if (result.counter) {
			res.send({counter: result.counter});
			return;
		}

		res.send(result.products.map(mapProducts));
	} catch (e) {
		handleError(res, e);
	}
});

router.get('/products/search/:title', async (req, res) => {
	try {
		const products = await getProductsByTitle(req.params.title);

		res.send(products.map(mapProducts));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/products', authenticated, async (req, res) => {
	try {
		const newProduct = await addProduct({
			title: req.body.title,
			images: req.body.images,
			kinds: req.body.kinds,
			description: req.body.description,
			specification: req.body.specification,
			section: req.body.section,
		});

		res.send(mapProduct(newProduct));
	} catch (e) {
		if (e.code === 11000) {
			e.message = 'Товар с таким названием уже существует';
		}
		if (e.name === "ValidationError") {
			e.message = 'Ошибка! Не удалось добавить промо-акцию. Отправлены некорректные или неполные данные';
		}
		handleError(res, e);
	}
});

module.exports = router;
