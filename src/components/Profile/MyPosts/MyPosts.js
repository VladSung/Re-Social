import React from 'react';
import Post from './Post/Post'
import MyPostsForm from './MyPostsForm'
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    list: {
        padding: '10px 15px',
        background: theme.palette.background.default,
    }
}))

const MyPosts = (props) => {
    const classes = useStyles()
    const Posts = props.posts ? props.posts.map((e) => <Post key={e.id} message={e.message} />)
        : "Нет Постов";

    return (
        <Paper>
            <Container maxWidth='md' className={classes.root}>
                <div>
                    <MyPostsForm addPost={props.addPost} />
                </div>
                <div className={classes.list}>
                    {Posts}
                </div>
            </Container>
        </Paper>
    );
};
export default MyPosts;