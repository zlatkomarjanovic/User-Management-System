import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
	table: {
		borderRadius: '10rem',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
		margin: '50px 0 0 50px',
	},
	thead: {
		'& > *': {
			background: 'black',
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
});
