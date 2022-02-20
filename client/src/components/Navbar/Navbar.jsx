import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyle } from './styles';

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
