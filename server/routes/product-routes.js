const express = require('express');

const { getProduct, getProducts, getProductsByTitle, addProduct } = require('../controllers/product');
const mapProduct = require('../helpers/mapProduct');
const mapProducts = require('../helpers/mapProducts');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/products/:id', async (req, res) => {
	try {
		const product = await getProduct(req.params.id);

		res.send({ data: mapProduct(product), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This product isn\'t exist' });
		console.log(e);
	}
});

router.get('/products/section/:id', async (req, res) => {
	try {
		const products = await getProducts(req.params.id);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This section is empty' });
		console.log(e);
	}
});

router.get('/products/search/:title', async (req, res) => {
	try {
		const products = await getProductsByTitle(req.params.title);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... Product with such title isn\'t exist' });
		console.log(e);
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
		res.send({ data: null, e });
		console.log(e);
	}
});

module.exports = router;
