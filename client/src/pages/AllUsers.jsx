import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';
import {
	TableCell,
	TableRow,
	Table,
	TableHead,
	TableBody,
	makeStyles,
	Button,
} from '@material-ui/core';
import { NavLink as Link } from 'react-router-dom';

const useStyle = makeStyles({
	table: {
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
		margin: '50px 0 0 50px',
	},
	thead: {
		'& > *': {
			background: 'black',
			color: 'white',
			fontSize: '1rem',
		},
	},
	row: {
		'& > *': {
			fontSize: '1rem',
		},
	},
});

const AllUsers = () => {
	const classes = useStyle();
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = await getAllUsers();
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<Table className={classes.table}>
				<TableHead>
					<TableRow className={classes.thead}>
						<TableCell>Id</TableCell>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Username</TableCell>
						<TableCell>E-mail</TableCell>
						<TableCell>Status</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow className={classes.row}>
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.firstName}</TableCell>
							<TableCell>{user.lastName}</TableCell>
							<TableCell>{user.username}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.status}</TableCell>
							<TableCell>
								<Button
									style={{ marginRight: '10px' }}
									variant='contained'
									color='primary'
									component={Link}
									to={`/edit/${user.id}`}
								>
									Edit
								</Button>
								<Button variant='contained' color='secondary'>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default AllUsers;
