import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
	container: {
		width: '50%',
		margin: '5% 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
});

const AddNewUser = () => {
	const classes = useStyle();
	return (
		<FormGroup className={classes.container}>
			<Typography variant='h6'> Add User</Typography>
			<FormControl>
				<InputLabel>First Name</InputLabel>
				<Input />
			</FormControl>
			<FormControl>
				<InputLabel>Last Name</InputLabel>
				<Input />
			</FormControl>
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input />
			</FormControl>
			<FormControl>
				<InputLabel>Password</InputLabel>
				<Input />
			</FormControl>
			<FormControl>
				<InputLabel>Email</InputLabel>
				<Input type='email' />
			</FormControl>
			<FormControl>
				<InputLabel>Status</InputLabel>
				<Input />
			</FormControl>
			<Button variant='contained'>Add User</Button>
		</FormGroup>
	);
};

export default AddNewUser;
