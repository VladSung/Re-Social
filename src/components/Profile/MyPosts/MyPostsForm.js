import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        marginBottom: 24,
    },
    postInput: {
        flex: '1 0 300px',
    }
}))


let PostForm = (props) => {
    const { register, handleSubmit } = useForm();
    const classes = useStyles();
    const onSubmit = (data) => { props.addPost(data.newPostBody) }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <TextField {...register('newPostBody', { required: true })}
                className={classes.postInput} multiline variant="outlined" fullWidth />
            <Button type='submit'>AddPost</Button>
        </form>
    );
};

export default PostForm;