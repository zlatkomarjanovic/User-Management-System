import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../services/api';
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
import Pagination from '../components/Pagination/Pagination';

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
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(8);

	const getUsers = async () => {
		const { data } = await getAllUsers();
		setUsers(data);
	};

	const deleteUserData = async (id) => {
		var proceed = window.confirm('Are you sure you want to proceed?');

		if (proceed) {
			await deleteUser(id);
			getUsers();
		} else {
			getUsers();
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
					{currentUsers.map((user) => (
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
								<Button
									onClick={() => deleteUserData(user.id)}
									variant='contained'
									color='secondary'
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination
				postsPerPage={usersPerPage}
				totalPosts={users.length}
				paginate={paginate}
			/>
		</>
	);
};

export default AllUsers;
