import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStyle } from './styles';

const User = ({
	id,
	firstName,
	lastName,
	username,
	email,
	status,
	deleteUserData,
}) => {
	const classes = useStyle();
	return (
		<>
			<TableRow className={classes.row}>
				<TableCell>{id}</TableCell>
				<TableCell>{firstName}</TableCell>
				<TableCell>{lastName}</TableCell>
				<TableCell>{username}</TableCell>
				<TableCell>{email}</TableCell>
				<TableCell>{status}</TableCell>
				<TableCell>
					<Button
						className={classes.buttonEdit}
						variant='contained'
						color='primary'
						component={Link}
						to={`/edit/${id}`}
					>
						Edit
					</Button>
					<Button
						className={classes.buttonAssign}
						variant='contained'
						color='primary'
						component={Link}
						to={`/assign/${id}`}
					>
						Assign
					</Button>
					<Button
						className={classes.buttonDelete}
						onClick={() => deleteUserData(id)}
						variant='contained'
					>
						<AiFillDelete style={{ width: '30px', height: '30px' }} />
					</Button>
				</TableCell>
			</TableRow>
		</>
	);
};

export default User;
