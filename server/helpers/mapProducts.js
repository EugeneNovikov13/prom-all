module.exports = function(product) {
	return {
		id: product.id,
		title: product.title,
		imageURL: product.images[0].imageURL,
	};
};
