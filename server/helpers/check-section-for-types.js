const SUBCATEGORIES_WITH_TYPES_ID = require('../constants/subcategories-with-types-id');

module.exports = (sectionId) => {
	return SUBCATEGORIES_WITH_TYPES_ID.find(section => section.id === sectionId);
}
