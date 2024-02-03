import axios from 'axios';

export const fetchProductsBySectionIdAsync = async id => {
	return await axios.get(`/products/section/${id}`);
};
