import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className='main'>
            <ProfileInfo profile={props.profile} />
            <MyPosts {...props}
            />
        </div>
    );
}

export default Profile;