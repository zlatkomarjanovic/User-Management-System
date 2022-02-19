import axios from 'axios';

const url = 'http://localhost:5000/users';

export const getAllUsers = async () => {
	return await axios.get(url);
};

export const addNewUser = async (user) => {
	return await axios.post(url, user);
};
