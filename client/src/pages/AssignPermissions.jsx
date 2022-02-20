import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { editUser, getAllUsers } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const useStyle = makeStyles({
	container: {
		width: '50%',
		margin: '5% 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
});

const initialValues = {
	firstName: '',
	lastName: '',
	username: '',
	password: '',
	email: '',
	status: '',
};

const EditUser = () => {
	const [user, setUser] = useState(initialValues);
	const { firstName, lastName, email, status } = user;
	const classes = useStyle();
	let navigate = useNavigate();
	const { id } = useParams();

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
			<Typography variant='h6'>
				Assign new permissions to {user.firstName} {user.lastName}
			</Typography>
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
			<Button
				onClick={() => editUserDetails()}
				variant='contained'
				color='primary'
			>
				Assign new permissions
			</Button>
		</FormGroup>
	);
};

export default EditUser;
