import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
	container: {
		width: '50%',
		margin: '5% 0 0 25%',
		'& > *': {
			marginTop: '20px',
		},
	},
});
