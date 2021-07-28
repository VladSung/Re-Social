import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form'


let PostForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { props.addPost(data.newPostBody) }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField {...register('newPostBody', { required: true })} fullWidth />
            </div>
            <div>
                <Button type='submit'>AddPost</Button>
            </div>
        </form>
    );
};

export default PostForm;