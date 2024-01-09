module.exports = (res, error, statusCode = 400) => {
	console.log(error);

	res.status(statusCode)
		.send(error.message);
}
