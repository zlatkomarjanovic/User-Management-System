import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	goback: {
		margin: '0rem 1rem 0rem 1rem',
		padding: '1rem',
		cursor: 'pointer',
		color: 'black',
		fontSize: '1.5rem',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});

const NotFound = () => {
	const classes = useStyle();
	return (
		<div style={{ display: 'block', width: '100%', height: '100vh' }}>
			<img
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					padding: '1rem',
					display: 'block',
					width: '80%',
					height: '50vh',
					objectFit: 'cover',
				}}
				src='https://i.stack.imgur.com/6M513.png'
				alt='Error 404 - Not Found'
			/>
			<NavLink to='./'>
				<Typography className={classes.goback} align='center'>
					Go back to manage users!
				</Typography>
			</NavLink>
		</div>
	);
};

export default NotFound;
