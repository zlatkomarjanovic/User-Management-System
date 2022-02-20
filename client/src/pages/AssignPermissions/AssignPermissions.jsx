import {
	Button,
	FormControl,
	FormGroup,
	Select,
	MenuItem,
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

const AssignPermissions = () => {
	//States and hooks
	const [user, setUser] = useState(initialValues);
	const classes = useStyle();
	let navigate = useNavigate();
	const { id } = useParams(); //Getting user id from params

	useEffect(() => {
		loadUserData(); //When component mounts we load user
	}, []);

	const loadUserData = async () => {
		const { data } = await getAllUsers(id);
		setUser(data); //Forwarding id and setting user
	};

	const onValueChange = (e) => {
		//Setting key:value pairs accordingly
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const editUserDetails = async () => {
		//Once we have edited a current users, we navigate back to homepage
		await editUser(id, user);
		navigate('/');
	};

	return (
		<FormGroup className={classes.container}>
			<Typography variant='h6'>
				Assign new permissions to {user.firstName} {user.lastName}
			</Typography>

			<FormControl>
				<InputLabel>Permissions</InputLabel>

				<Select
					value={user.permissions}
					name='permissions'
					onChange={(e) => onValueChange(e)}
				>
					{/*If we had more options we would simply map over them and display MenuItem for each*/}
					<MenuItem value='Code'>Code</MenuItem>
					<MenuItem value='Description'>Description</MenuItem>
					<MenuItem value='Superadmin'>Superadmin</MenuItem>
					<MenuItem value='Admin'>Admin</MenuItem>
					<MenuItem value='Read/Write'>Read/Write</MenuItem>
					<MenuItem value='Read'>Read</MenuItem>
					<MenuItem value={''}>No Permissions</MenuItem>
				</Select>
			</FormControl>
			<Button
				onClick={() => editUserDetails()}
				variant='contained'
				color='primary'
			>
				Assign permissions
			</Button>
		</FormGroup>
	);
};

export default AssignPermissions;
