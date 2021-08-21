import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    addPost, getProfile,
    getStatus, updateStatus,
    updateUserPhoto
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from "react-router";
import { compose } from 'redux';



function ProfileContainer(props) {
    const { getProfile, getStatus } = props;
    let userId = props.match.params.userId;
    if (!userId) {
        userId = props.userId
    }

    useEffect(() => {
        getProfile(userId);
        getStatus(userId);
    }, [getProfile, getStatus, userId])

    return <Profile {...props} status={props.status} />
}

let mapToStateProps = (state) => ({
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    userId: state.auth.id,
})

export default compose(
    connect(mapToStateProps, {
        addPost,
        getProfile,
        getStatus,
        updateStatus,
        updateUserPhoto
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);