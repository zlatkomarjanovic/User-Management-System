import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
	pagination: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '1rem',
		marginBottom: '10rem',
	},
	pageItem: {
		marginTop: '2rem',
	},
	pageLink: {
		padding: '1rem 1.1rem',
		cursor: 'pointer',
		margin: '0.3rem',
		fontWeight: 'bold',
		backgroundColor: '#0583d2',
		borderRadius: '15px',
		color: 'white',
		transition: '0.5s ease-in-out',
		'&:hover': {
			backgroundColor: '#2aaafa',
			transition: '0.5s ease-in-out',
		},
	},
});
