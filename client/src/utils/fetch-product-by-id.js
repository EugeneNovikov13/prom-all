import axios from 'axios';

export const fetchProductById = async id => {
	return await axios.get(`/products/${id}`);
};
