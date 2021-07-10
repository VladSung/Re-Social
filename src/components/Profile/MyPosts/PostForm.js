import React from 'react';

const PostForm = (props) => {
    const setNewPostText = (e) => props.updateNewPostText(e.target.value);
    return (
        <div>
            <input
                onChange={(e) => setNewPostText(e)}
                value={props.newPostText} />
            <button onClick={props.addPost}>addPost</button>
        </div>
    );
};
export default PostForm;