import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
	header: {
		background: '#3949ab',
	},
	links: {
		margin: '0rem 1rem 0rem 1rem',
		padding: '1rem',
		cursor: 'pointer',
		color: 'white',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		'&:hover': {},
	},
});
