import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    postContainer: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        marginBottom: theme.spacing(1),
    }
}))

const Post = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.postContainer}>
            <Typography>{props.message}</Typography>
        </Paper>
    )
}
export default Post;