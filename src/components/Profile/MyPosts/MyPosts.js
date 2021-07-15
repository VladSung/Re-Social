import React from 'react';
import Post from './Post/Post'

const MyPosts = (props) => {
    const Posts = props.posts.map((e) => <Post message={e.message} />)
    const postChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    };
    const addPost = () => props.addPost();

    return (
        <div className='myPosts'>
            <div>
                <input
                    onChange={postChange}
                    value={props.newPostText} />
                <button onClick={addPost}>addPost</button>
            </div>
            <div className='myPosts__list'>
                {Posts}
            </div>
        </div>
    );
};
export default MyPosts;