if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { join } = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { register, login } = require('./controllers/admin');
const { addPromo, editPromo, deletePromo, getPromos } = require('./controllers/promo');
const { addBrand, deleteBrand, getBrands } = require('./controllers/brand');
const { addProduct, getProduct, getProducts, getProductsByTitle } = require('./controllers/product');
const authenticated = require('./middlewares/authenticated');
const mapAdmin = require('./helpers/mapAdmin');
const mapPromo = require('./helpers/mapPromo');
const mapBrand = require('./helpers/mapBrand');
const mapProduct = require('./helpers/mapProduct');
const mapProducts = require('./helpers/mapProducts');

const port = 3001;
const app = express();

app.use(express.static('../client/build'));

app.use(cookieParser());
app.use(express.json());

app.post('/register', async (req, res) => {
	try {
		const { token, admin } = await register(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		res.send({ error: e });
	}
});

app.post('/login', async (req, res) => {
	try {
		const { token, admin } = await login(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, admin: mapAdmin(admin) });
	} catch (e) {
		res.send({ error: e.message });
	}
});

app.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true })
		.send({})
});

app.get('/promos', async (req, res) => {
	try {
		const promos = await getPromos();

		res.send({ data: promos.map(mapPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... There isn\'t promos' });
		console.log(e);
	}
});

app.get('/brands', async (req, res) => {
	try {
		const brands = await getBrands();

		res.send({ data: brands.map(mapBrand), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Can\'t get brands' });
		console.log(e);
	}
});

app.get('/products/:id', async (req, res) => {
	try {
		const product = await getProduct(req.params.id);

		res.send({ data: mapProduct(product), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This product isn\'t exist' });
		console.log(e);
	}
});

app.get('/products/section/:id', async (req, res) => {
	try {
		const products = await getProducts(req.params.id);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This section is empty' });
		console.log(e);
	}
});

app.get('/products/search/:title', async (req, res) => {
	try {
		const products = await getProductsByTitle(req.params.title);

		res.send({ data: products.map(mapProducts), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... Product with such title isn\'t exist' });
		console.log(e);
	}
});

app.use(authenticated);

app.post('/brands', async (req, res) => {
	try {
		const newBrand = await addBrand({
			title: req.body.title,
			logo: req.body.logo,
			isOfficial: req.body.isOfficial,
		});

		res.send({ data: mapBrand(newBrand), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Creation of brand is impossible' });
		console.log(e);
	}
});

app.delete('/brands/:id', async (req, res) => {
	try {
		await deleteBrand(req.params.id);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: 'Error. Failed to delete brand' });
		console.log(e);
	}
});

app.post('/promos', async (req, res) => {
	try {
		const newPromo = await addPromo({
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send({ data: mapPromo(newPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This promo is already exists' });
		console.log(e);
	}
});

app.patch('/promos/:id', async (req, res) => {
	try {
		const editedPromo = await editPromo(req.params.id, {
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send({ data: mapPromo(editedPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: e });
		console.log(e);
	}
});
app.delete('/promos/:id', async (req, res) => {
	try {
		await deletePromo(req.params.id);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: 'Error. Failed to delete test' });
		console.log(e);
	}
});

app.post('/products', async (req, res) => {
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

app.get('/*', (req, res) => {
	res.sendFile(join(__dirname, '../client/build/index.html'));
});

mongoose.connect(
	//получаем строку подключения к БД из поля environment (файл docker-compose)
	process.env.DB_CONNECTION_STRING,
).then(() => {
	app.listen(port, () => {
		console.log(`Server has been started on port ${port}`);
	});
});
