import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div>
            {props.profile
                ? <>
                    <ProfileInfo updateStatus={props.updateStatus} profile={props.profile} status={props.status} />
                    <MyPosts {...props} />
                </>
                : <Preloader />}
        </div>
    );
}

export default Profile;