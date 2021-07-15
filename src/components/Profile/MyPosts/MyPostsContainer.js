import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    const updateNewPostText = (text) => props.store.dispatch(updatePostTextActionCreator(text));
    const addPost = (e) => {
        props.store.dispatch(addPostActionCreator())
    }
    return (
        <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
        />
    );
};
export default MyPostsContainer;