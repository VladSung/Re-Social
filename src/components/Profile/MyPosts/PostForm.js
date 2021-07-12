import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from './../../../redux/profile-reducer'

const PostForm = (props) => {
    const setNewPostText = (e) => props.dispatch(updatePostTextActionCreator(e.target.value));
    const addPost = (e) => {
        props.dispatch(addPostActionCreator())
    };
    return (
        <div>
            <input
                onChange={(e) => setNewPostText(e)}
                value={props.newPostText} />
            <button onClick={addPost}>addPost</button>
        </div>
    );
};
export default PostForm;