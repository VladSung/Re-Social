import React from 'react';
import PostForm from './PostForm';
import Post from './Post/Post'

const MyPosts = (props) => {
    const Posts = props.posts.map((e) => <Post message={e.message} />)
    return (
        <div className='myPosts'>
            <PostForm
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <div className='myPosts__list'>
                {Posts}
            </div>
        </div>
    );
};
export default MyPosts;