import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { addPost, updatePostText, setProfile } from '../../redux/profile-reducer'
import axios from 'axios';

class ProfileContainer extends React.Component {
    debugger
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(res => {
                this.props.setProfile(res.data);
            })
    }
    render() {
        return <Profile {...this.props} />
    }
}

let mapToStateProps = (state) => ({
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
})

export default connect(mapToStateProps, {
    updatePostText,
    addPost,
    setProfile,

})(ProfileContainer);