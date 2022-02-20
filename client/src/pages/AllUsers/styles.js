import { makeStyles } from '@material-ui/core';
//When we use material-ui this is how we implement custom styling
export const useStyle = makeStyles({
	table: {
		backgroundColor: 'white',
		borderRadius: '2rem',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
		margin: '50px 0 0 50px',
	},
	buttonSort: {
		backgroundColor: '#03a9f4',
		color: 'white',
		borderRadius: '1rem',
		transition: '0.5s ease-in-out',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#4fc3f7',
			transition: '0.5s ease-in-out',
		},
	},

	thead: {
		backgroundColor: '#1976d2',

		'& > *': {
			color: 'white',
			fontSize: '1rem',
			fontWeight: 'bold',
			cursor: 'pointer !important',
		},
	},

	container: {
		width: '50%',
		margin: '10px 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
});
