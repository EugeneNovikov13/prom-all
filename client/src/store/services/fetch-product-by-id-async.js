import axios from 'axios';

export const fetchProductByIdAsync = async id => {
	return await axios.get(`/products/${id}`);
};
