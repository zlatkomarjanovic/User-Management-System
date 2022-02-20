import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
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
	buttonEdit: {
		marginRight: '10px',
		backgroundColor: '#1976d2',
		color: 'white',
		borderRadius: '2rem',
		transition: '0.5s ease-in-out',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#4fc3f7',
			transition: '0.5s ease-in-out',
		},
	},
	buttonDelete: {
		width: '40px',
		marginRight: '10px',
		backgroundColor: '#c62828',
		color: 'white',
		borderRadius: '2rem',
		transition: '0.5s ease-in-out',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#e53935',
			transition: '0.5s ease-in-out',
		},
	},
	buttonAssign: {
		marginRight: '10px',
		backgroundColor: '#4527a0',
		color: 'white',
		borderRadius: '2rem',
		transition: '0.5s ease-in-out',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#5e35b1',
			transition: '0.5s ease-in-out',
		},
	},

	row: {
		'& > *': {
			fontSize: '1rem',
		},
	},
});
