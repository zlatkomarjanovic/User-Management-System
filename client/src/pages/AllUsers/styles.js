import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
	table: {
		backgroundColor: 'white',
		borderRadius: '1rem',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
		margin: '50px 0 0 50px',
	},

	thead: {
		backgroundColor: '#1976d2',
		borderRadius: '1rem',
		'& > *': {
			color: 'white',
			fontSize: '1rem',
		},
		tcell: {
			cursor: 'pointer !important',
		},
	},
	row: {
		'& > *': {
			fontSize: '1rem',
		},
	},
	container: {
		width: '50%',
		margin: '10px 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
	search: {},
});
