if (process.env.NODE_ENV === 'development') require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const orderRoutes = require('./routes/order-routes');
const promoRoutes = require('./routes/promo-routes');
const brandRoutes = require('./routes/brand-routes');
const productRoutes = require('./routes/product-routes');
const htmlRoutes = require('./routes/html-routes');

const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('../client/build'));

app.use(express.json());
app.use(cookieParser());

app.use(userRoutes);
app.use(orderRoutes);
app.use(promoRoutes);
app.use(brandRoutes);
app.use(productRoutes);
app.use(htmlRoutes);

mongoose.connect(
	//получаем строку подключения к БД из поля environment (файл docker-compose)
	process.env.DB_CONNECTION_STRING
).then(() => {
	app.listen(process.env.PORT, () => {
		console.log(`Server has been started on port ${process.env.PORT}`);
	});
});
