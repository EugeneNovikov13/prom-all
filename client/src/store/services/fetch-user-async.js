import axios from 'axios';

export const fetchUserAsync = async () => {
	return await axios.get('/users');
};
