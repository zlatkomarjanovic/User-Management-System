import { makeStyles } from '@material-ui/core';
//When we use material-ui this is how we implement custom styling
export const useStyle = makeStyles({
	goback: {
		margin: '0rem 1rem 0rem 1rem',
		padding: '1rem',
		cursor: 'pointer',
		color: 'black',
		fontSize: '1.5rem',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
