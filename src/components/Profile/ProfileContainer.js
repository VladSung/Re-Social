import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    addPost, getProfile,
    getStatus, updateStatus,
} from '../../redux/profile-reducer'
import { withRouter } from "react-router";
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile {...this.props} status={this.props.status} />
    }
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

    }),
    withRouter,
)(ProfileContainer);