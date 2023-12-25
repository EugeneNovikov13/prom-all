const Category = require('../models/Category');

// add

async function addCategory(category) {
	return await Category.create(category);
}

// get list


// get item by id



// get section titles by section title

async function getSections(sectionTitle) {
	const category = await Category.findOne({$or: [{ "subcategories.title": sectionTitle} , { "subcategories.types.title": sectionTitle }]});

	if (!category) throw new Error('This section is not exist');

	const section = category.subcategories.find(sub => sub.types && sub.title !== sectionTitle);

	if (!section) {
		return category.subcategories.map(sub => sub.title);
	}

	return section.types.map(type => type.title);
}

module.exports = {
	addCategory,
	getSections,
}
