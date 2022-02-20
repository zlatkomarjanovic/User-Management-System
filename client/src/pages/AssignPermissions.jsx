import {
	Button,
	FormControl,
	FormGroup,
	Select,
	MenuItem,
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
	permissions: '',
};

const AssignPermissions = () => {
	const [user, setUser] = useState(initialValues);
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
				<InputLabel>Permissions</InputLabel>

				<Select
					value={user.permissions}
					name='permissions'
					onChange={(e) => onValueChange(e)}
				>
					<MenuItem value='Superadmin'>Superadmin</MenuItem>
					<MenuItem value='Admin'>Admin</MenuItem>
					<MenuItem value='Read/Write'>Read/Write</MenuItem>
					<MenuItem value='Read'>Read</MenuItem>
					<MenuItem value='null'>No Permissions</MenuItem>
				</Select>
			</FormControl>
			<Button
				onClick={() => editUserDetails()}
				variant='contained'
				color='primary'
			>
				Assign new permissions
			</Button>
			<Button
				value='adfasd'
				name='permissions'
				variant='contained'
				color='primary'
			>
				Delete all permissions
			</Button>
		</FormGroup>
	);
};

export default AssignPermissions;
