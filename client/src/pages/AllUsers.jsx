import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';
import {
	TableCell,
	TableRow,
	Table,
	TableHead,
	TableBody,
	makeStyles,
} from '@material-ui/core';

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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default AllUsers;
