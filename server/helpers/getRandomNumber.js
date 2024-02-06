module.exports = function(num) {
	let randomNumber = '';

	for (let i = 0; i < num; i++) {
		randomNumber += String(Math.floor(Math.random() * 10));
	}

	return randomNumber;
};
