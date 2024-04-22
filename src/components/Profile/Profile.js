import React from 'react';
import { Grid } from '@material-ui/core';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <Grid>
            <ProfileInfo updateUserPhoto={props.updateUserPhoto} updateStatus={props.updateStatus} profile={props.profile} status={props.status} />
            <MyPosts {...props} />
        </Grid>
    );
}

export default Profile;