module.exports = function(product) {
	return {
		id: product.id,
		title: product.title,
		images: product.images.map(img => ({
			id: img.id,
			image: img.imageURL,
		})),
		kinds: product.kinds ? product.kinds.map(kind => ({
			id: kind.id,
			title: kind.title,
		})) : [],
		description: product.description,
		specification: product.specification ? product.specification : '',
		section: product.section,
	};
};
