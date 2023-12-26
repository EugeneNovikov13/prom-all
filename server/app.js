if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { join } = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { register, login } = require('./controllers/admin');
const { addPromo, editPromo, deletePromo, getPromos } = require('./controllers/promo');
// const { addHistory, deleteHistory, getHistories } = require('./controllers/history');
const authenticated = require('./middlewares/authenticated');
const mapAdmin = require('./helpers/mapAdmin');
const mapPromo = require('./helpers/mapPromo');
// const mapHistory = require('./helpers/mapHistory');
// const mapQuestion = require('./helpers/mapQuestion');

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

// app.patch('/users', async (req, res) => {
// 	try {
// 		const updatedUser = await updateUser(req.user.id, {
// 			name: req.body.name,
// 			surname: req.body.surname,
// 			email: req.body.email,
// 			image: req.body.image,
// 		});
//
// 		res.send({ data: mapUser(updatedUser), error: null });
// 	} catch (e) {
// 		let error = 'Error. Failed to update user';
// 		if (e.code === 11000) {
// 			error = 'Пользователь с таким адресом электронной почты уже существует';
// 		}
// 		res.send({ data: null, error });
// 		console.log(e);
// 	}
// });
//
// app.get('/tests/:id', async (req, res) => {
// 	try {
// 		const test = await getTest(req.params.id);
//
// 		res.send({ data: mapTest(test), error: null });
// 	} catch (e) {
// 		res.send({ data: null, error: 'Error! Maybe... This test isn\'t exist' });
// 		console.log(e);
// 	}
// });
//
// app.get('/tests/:id/questions/:page', async (req, res) => {
// 	try {
// 		const { question, lastPage } = await getQuestion(req.params.id, req.params.page);
//
// 		res.send({ data: { question: mapQuestion(question), lastPage }, error: null });
// 	} catch (e) {
// 		res.send({ data: null, error: 'Error! Maybe... This question isn\'t exist' });
// 		console.log(e);
// 	}
// });
//
//
//
// app.get('/histories/:id', async (req, res) => {
// 	try {
// 		const histories = await getHistories(req.params.id);
//
// 		res.send({ data: histories.map(mapHistory), error: null });
// 	} catch (e) {
// 		res.send({ data: null, error: 'Error! Can\'t get histories' });
// 		console.log(e);
// 	}
// });
//
// app.post('/histories', async (req, res) => {
// 	try {
// 		const newHistory = await addHistory({
// 			user: req.user.id,
// 			test: req.body.test,
// 			results: req.body.results,
// 		});
//
// 		res.send({ data: mapHistory(newHistory), error: null });
// 	} catch (e) {
// 		res.send({ data: null, error: 'Creation of history is impossible' });
// 		console.log(e);
// 	}
// });
//
// app.delete('/histories/:id', async (req, res) => {
// 	try {
// 		await deleteHistory(req.params.id);
//
// 		res.send({ error: null });
// 	} catch (e) {
// 		res.send({ error: 'Error. Failed to delete histories' });
// 		console.log(e);
// 	}
// });

app.use(authenticated);

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
