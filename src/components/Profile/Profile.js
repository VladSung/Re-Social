import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className='main'>
            <div className={styles.bg}>
                <img className={styles.bgImg} src={props.profile.bg} />
            </div>
            <ProfileInfo profile={props.profile} />
            <MyPosts
                addPost={props.addPost}
                posts={props.posts}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;