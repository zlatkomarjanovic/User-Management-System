import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../services/api';
import {
	TableCell,
	TableRow,
	Table,
	TableHead,
	TableBody,
	Button,
	FormControl,
	InputLabel,
	Input,
	FormGroup,
} from '@material-ui/core';
import { NavLink as Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import { useStyle } from './styles';
import { AiFillDelete } from 'react-icons/ai';

const AllUsers = () => {
	//States
	const classes = useStyle();
	const [searchTerm, setSearchTerm] = useState('');
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);
	const [order, setOrder] = useState('ASC');

	//API calls
	const getUsers = async () => {
		const { data } = await getAllUsers();
		setUsers(data);
	};

	const deleteUserData = async (id) => {
		var proceed = window.confirm('Are you sure you want to delete this user?');

		if (proceed) {
			await deleteUser(id);
			getUsers();
		} else {
			getUsers();
		}
	};

	//Setting users when component mounts
	useEffect(() => {
		getUsers();
	}, []);

	//Variables
	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const usersTofilter = searchTerm === '' ? currentUsers : users;

	//Sorting
	const sorting = (col) => {
		if (order === 'ASC') {
			const sortedUsers = [...currentUsers].sort((a, b) =>
				a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
					? 1
					: -1
			);
			setUsers(sortedUsers);
			setOrder('DSC');
		} else if (order === 'DSC') {
			const sortedUsers = [...currentUsers].sort((a, b) =>
				a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
					? 1
					: -1
			);
			setUsers(sortedUsers);
			setOrder('ASC');
		}
	};

	const sortById = (col) => {
		if (order === 'ASC') {
			const sortedUsers = [...currentUsers].sort((a, b) =>
				a[col] > b[col] ? 1 : -1
			);
			setUsers(sortedUsers);
			setOrder('DSC');
		} else if (order === 'DSC') {
			const sortedUsers = [...currentUsers].sort((a, b) =>
				a[col] < b[col] ? 1 : -1
			);
			setUsers(sortedUsers);
			setOrder('ASC');
		}
	};

	const cancelSorting = async () => {
		const { data } = await getAllUsers();
		setUsers(data);
	};

	return (
		<>
			<FormGroup className={classes.container}>
				<FormControl className={classes.search}>
					<InputLabel>Search...</InputLabel>
					<Input
						type='text'
						onChange={(event) => {
							setSearchTerm(event.target.value);
							console.log(event.target.value);
						}}
					/>
				</FormControl>
			</FormGroup>

			<Table className={classes.table}>
				<TableHead className={classes.root}>
					<TableRow className={classes.thead}>
						<TableCell className={classes.tcell} onClick={() => sortById('id')}>
							Id
						</TableCell>
						<TableCell onClick={() => sorting('firstName')}>
							First Name
						</TableCell>
						<TableCell onClick={() => sorting('lastName')}>Last Name</TableCell>
						<TableCell onClick={() => sorting('username')}>Username</TableCell>
						<TableCell onClick={() => sorting('email')}>E-mail</TableCell>
						<TableCell onClick={() => sorting('status')}>Status</TableCell>
						<TableCell>
							<Button
								style={{ marginRight: '10px' }}
								className={classes.buttonSort}
								variant='contained'
								onClick={() => cancelSorting()}
							>
								Cancel sorting
							</Button>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{usersTofilter /*eslint-disable-next-line */
						.filter((user) => {
							if (searchTerm === '') {
								return usersTofilter;
							} else if (
								user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return user;
							} else if (
								user.username.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return user;
							} else if (
								user.status.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return user;
							} else if (user.id.toString().includes(searchTerm)) {
								return user;
							}
						})
						.map((user) => (
							<TableRow className={classes.row}>
								<TableCell>{user.id}</TableCell>
								<TableCell>{user.firstName}</TableCell>
								<TableCell>{user.lastName}</TableCell>
								<TableCell>{user.username}</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>{user.status}</TableCell>
								<TableCell>
									<Button
										className={classes.buttonEdit}
										variant='contained'
										color='primary'
										component={Link}
										to={`/edit/${user.id}`}
									>
										Edit
									</Button>
									<Button
										className={classes.buttonAssign}
										variant='contained'
										color='primary'
										component={Link}
										to={`/assign/${user.id}`}
									>
										Assign
									</Button>
									<Button
										className={classes.buttonDelete}
										onClick={() => deleteUserData(user.id)}
										variant='contained'
									>
										<AiFillDelete style={{ width: '30px', height: '30px' }} />
									</Button>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			{searchTerm === '' ? (
				<Pagination
					postsPerPage={usersPerPage}
					totalPosts={users.length}
					paginate={paginate}
				/>
			) : (
				<div />
			)}
		</>
	);
};

export default AllUsers;