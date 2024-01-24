import axios from 'axios';

export const fetchProductsBySectionId = async id => {
	return await axios.get(`/products/section/${id}`);
};
