import { makeStyles } from '@material-ui/core';
//When we use material-ui this is how we implement custom styling
export const useStyle = makeStyles({
	container: {
		display: 'block',
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '5rem',
		testAlign: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: '2rem',
		backgroundColor: '#1e88e5',
		color: 'white',
		padding: '1.5rem',
		fontWeight: 'bold',
		borderRadius: '10rem',
		marginBottom: '1rem',
		boxShadow:
			'rgba(0, 0, 0, 0.24) 0px 3px 8px, rgba(0, 0, 0, 0.24) 0px 3px 8px',
	},
	typography: {
		width: '90%',
		padding: '1.7rem',
	},
});
