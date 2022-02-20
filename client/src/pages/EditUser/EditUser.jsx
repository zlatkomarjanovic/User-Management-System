import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { editUser, getAllUsers } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStyle } from './styles';

const initialValues = {
	firstName: '',
	lastName: '',
	username: '',
	password: '',
	email: '',
	status: '',
	permissions: '',
};

const EditUser = () => {
	//states and hooks
	const [user, setUser] = useState(initialValues);
	const {
		firstName,
		lastName,
		email,
		status,
		username,
		password,
		permissions,
	} = user;
	const classes = useStyle();
	let navigate = useNavigate();
	const { id } = useParams();

	//Not sure why am I getting a warning here
	useEffect(() => {
		loadUserData();
	}, []);

	const loadUserData = async () => {
		const { data } = await getAllUsers(id);
		setUser(data);
	};

	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const editUserDetails = async () => {
		await editUser(id, user);
		navigate('/');
	};

	return (
		<FormGroup className={classes.container}>
			<Typography variant='h6'> Edit User</Typography>
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
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='username'
					value={username}
					disabled
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Password</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='password'
					value={password}
					disabled
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Permissions</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='permissions'
					value={permissions}
					disabled
				/>
			</FormControl>

			<FormControl>
				<Typography variant='primary'>
					Permissions: {user.permissions || <>No permissions</>}
				</Typography>
			</FormControl>
			<Button
				onClick={() => editUserDetails()}
				variant='contained'
				color='primary'
			>
				Commit changes
			</Button>
		</FormGroup>
	);
};

export default EditUser;
