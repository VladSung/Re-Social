import React, { useEffect } from 'react'
import Dialogs from './Dialogs';
import { getProfile } from './../../redux/profile-reducer';
import { sendMessage } from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const DialogsContainer = (props) => {
    const { userId, getProfile, profile } = props
    useEffect(() => {
        if (!profile) {
            getProfile(userId);
        }
    }, [getProfile, profile, userId])

    return <Dialogs {...props} />
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        profile: state.profilePage.profile,
        userId: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage, getProfile,
    }),
    withAuthRedirect
)(DialogsContainer);