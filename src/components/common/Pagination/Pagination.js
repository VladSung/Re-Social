import React from 'react';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pagination: {
        padding: theme.spacing(2),
        width: '100%',
    }
}))

const CustomPagination = (props) => {
    const { usersCount, pageSize, currentPage } = props;
    const classes = useStyles();
    let pagesCount = Math.ceil(usersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let onPaginationClick = (p) => {
        if (p !== currentPage) {
            props.onPaginationClick(p)
        }
    }
    return (
        <Pagination className={classes.pagination} onChange={(e, p) => onPaginationClick(p)} count={pagesCount} shape="rounded" />
    )
}

export default CustomPagination;