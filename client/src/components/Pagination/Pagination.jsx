import React from 'react';
import { Box } from '@material-ui/core';
import { useStyle } from './style';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	const classes = useStyle();

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Box component='div' className={classes.pagination}>
			{pageNumbers.map((number) => (
				<Box key={number} component='div' className={classes.pageItem}>
					{/*eslint-disable-next-line*/}
					<a onClick={() => paginate(number)} className={classes.pageLink}>
						{number}
					</a>
				</Box>
			))}
		</Box>
	);
};

export default Pagination;
