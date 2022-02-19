import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
	header: {
		background: '#111111',
	},
	links: {
		margin: '0rem 1rem 0rem 1rem',
		padding: '1rem',
		cursor: 'pointer',
		color: 'white',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});

const Navbar = () => {
	const classes = useStyle();
	return (
		<AppBar className={classes.header} position='static'>
			<Toolbar>
				<NavLink className={classes.links} to='./about' exact>
					User management system
				</NavLink>
				<NavLink className={classes.links} to='./' exact>
					Users
				</NavLink>
				<NavLink className={classes.links} to='./add-new-user' exact>
					Add new user
				</NavLink>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
