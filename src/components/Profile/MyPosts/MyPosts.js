import React from 'react';
import Post from './Post/Post'

const MyPosts = (props) => {
    const Posts = props.posts ? props.posts.map((e) => <Post key={e.id} message={e.message} />)
        : "Нет Постов";
    const postChange = (e) => {
        let text = e.target.value;
        props.updatePostText(text)
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