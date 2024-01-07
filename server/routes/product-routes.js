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

		res.send({ data: mapProduct(product), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Maybe... This product isn\'t exist');
	}
});

router.get('/products/section/:id', async (req, res) => {
	try {
		const products = await getProducts(req.params.id);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Maybe... This sections is empty');
	}
});

router.get('/products/search/:title', async (req, res) => {
	try {
		const products = await getProductsByTitle(req.params.title);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Maybe... Product with such title isn\'t exist');
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

		res.send({ data: mapProduct(newProduct), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Unable to create product');
	}
});

module.exports = router;
