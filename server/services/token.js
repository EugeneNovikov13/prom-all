const jwt = require('jsonwebtoken');

// секретная подпись, которая хранится в  поле environment (файл docker-compose)
const accessSign = process.env.JWT_ACCESS_SECRET;

module.exports = {
	//генерируем токен
	generate(data) {
		return jwt.sign(data, accessSign, { expiresIn: '1d' });
	},
	//проверяем токен
	verify(token) {
		try {
			return jwt.verify(token, accessSign);
		} catch (e) {
			return e;
		}
	},
};
