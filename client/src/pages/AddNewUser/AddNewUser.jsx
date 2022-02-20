import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { addNewUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useStyle } from './styles';

const initialValues = {
	firstName: '',
	lastName: '',
	username: '',
	password: '',
	email: '',
	status: '',
};

const AddNewUser = () => {
	const [user, setUser] = useState(initialValues);
	const { firstName, lastName, username, password, email, status } = user;
	const classes = useStyle();
	let navigate = useNavigate();

	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const addUserDetails = async () => {
		await addNewUser(user);
		navigate('/');
	};

	return (
		<FormGroup className={classes.container}>
			<Typography variant='h6'> Add User</Typography>
			<FormControl>
				<InputLabel>First Name</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='firstName'
					value={firstName}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Last Name</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='lastName'
					value={lastName}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='username'
					value={username}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Password</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='password'
					value={password}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Email</InputLabel>
				<Input onChange={(e) => onValueChange(e)} name='email' value={email} />
			</FormControl>
			<FormControl>
				<InputLabel>Status</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='status'
					value={status}
				/>
			</FormControl>
			<Button
				onClick={() => addUserDetails()}
				variant='contained'
				color='primary'
			>
				Add User
			</Button>
		</FormGroup>
	);
};

export default AddNewUser;
