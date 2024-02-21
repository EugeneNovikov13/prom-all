const express = require('express');

const { getBrands, addBrand, deleteBrand } = require('../controllers/brand');
const authenticated = require('../middlewares/authenticated');
const mapBrand = require('../helpers/mapBrand');
const handleError = require('../services/handle-error');
const adminRightsVerification = require('../middlewares/admin-rights-verification');

const router = express.Router();

router.get('/brands', async (req, res) => {
	try {
		const brands = await getBrands();

		res.send(brands.map(mapBrand));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/brands', authenticated, adminRightsVerification, async (req, res) => {
	try {
		const newBrand = await addBrand({
			title: req.body.title,
			logo: req.body.logo,
			isOfficial: req.body.isOfficial,
		});

		res.send(mapBrand(newBrand));
	} catch (e) {
		if (e.code === 11000) {
			e.message = 'Партнёр с таким названием уже существует';
		}
		if (e.name === "ValidationError") {
			e.message = 'Ошибка! Не удалось добавить партнёра. Отправлены некорректные или неполные данные';
		}
		handleError(res, e);
	}
});

router.delete('/brands/:id', authenticated, adminRightsVerification, async (req, res) => {
	try {
		await deleteBrand(req.params.id);

		res.send('Удаление партнёра успешно произведено');
	} catch (e) {
		e.message = 'Ошибка! Не удалось удалить партнёра';
		if (e.name === 'CastError') {
			e.message = 'Ошибка! Возможно... Данных о партнёре нет в базе данных';
		}
		handleError(res, e);
	}
});

module.exports = router;
