import axios from 'axios'; //making requests with axios

const url = 'http://localhost:5000/users';

export const getAllUsers = async (id) => {
	id = id || '';
	return await axios.get(`${url}/${id}`);
};

export const addNewUser = async (user) => {
	return await axios.post(url, user);
};

export const editUser = async (id, user) => {
	return await axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
	return await axios.delete(`${url}/${id}`);
};

//This is where we have our Create Read Update and Delete functionality
//We are making all the necessary API requests to interact with the database
