import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyle } from './style';

const About = () => {
	const classes = useStyle(); // importing classes
	return (
		<Box className={classes.container} component='div'>
			<Box className={classes.about}>
				<Typography className={classes.heading} variant='h5'>
					About this web-application
				</Typography>
			</Box>

			<Typography className={classes.typography}>
				This web application has been made using React.js and Material UI on the
				front-end, with JSON server running in the background on localhost:5000.
				<br /> <br />
				NPM packages used: <br />
				- JSON Server <br />
				- React.js <br />
				- Axios <br />
				- react-router-dom <br />
				- concurrently <br />
				- react icons <br />
				<br />
				The front-end is running on localhost:3000 <br />
				The back-end is running on localhost:5000 <br />
				<br />
				Features utilized: <br />
				- Users load when the application starts <br />
				- The user list page is showing a list of users with custom-made
				pagination. <br />
				- Ordering/Sorting is supported by all attributes-just click on the
				column name <br />
				- All users are editable <br />
				- Every user has a custom editing page <br />
				- Filtering is implemented in the form of a search bar. The search bar
				supports searching by these attributes: First name, user name, status,
				and id. <br />
				- The delete button prompts an alert modal asking the user "Are you sure
				you want to delete this user". If the user proceeds the delete function
				is called and the user is being deleted.
				<br />- Assign permissions has its page with multiple possible
				permissions. <br />
				It is possible to add and remove permissions from the permissions page
				<br />
				<br />
				Important folders: server client services src components pages
			</Typography>
		</Box>
	);
};

export default About;
