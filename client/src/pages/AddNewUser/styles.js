import { makeStyles } from '@material-ui/core';
//When we use material-ui this is how we implement custom styling
export const useStyle = makeStyles({
	container: {
		width: '50%',
		margin: '5% 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
});
