import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';

//This page will pop up if you try to go to a non-existing url on a page
const NotFound = () => {
	const classes = useStyle();
	const imgSrc = 'https://i.stack.imgur.com/6M513.png';

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
				src={imgSrc}
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
