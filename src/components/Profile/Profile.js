import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

function Profile({ store }) {
    return (
        <div className='main'>
            <ProfileInfoContainer store={store} />
            <MyPostsContainer
                store={store}
            />
        </div>
    );
}

export default Profile;