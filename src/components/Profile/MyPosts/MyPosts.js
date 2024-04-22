import React from 'react';
import Post from './Post/Post'
import MyPostsForm from './MyPostsForm'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    }
}))

const MyPosts = (props) => {
    const classes = useStyles()
    const Posts = props.posts ? props.posts.map((e) => <Post key={e.id} message={e.message} />)
        : "Нет Постов";

    return (
        <Container maxWidth='md' className={classes.root}>
            <div>
                <MyPostsForm addPost={props.addPost} />
            </div>
            <div className={classes.list}>
                {Posts}
            </div>
        </Container>
    );
};
export default MyPosts;