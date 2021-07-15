import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer';

function DialogsContainer({ store }) {
    let state = store.getState();
    const setNewMessageBody = (text) => {
        store.dispatch(updateNewMessageBodyCreator(text))
    };
    const sendMessage = () => {
        store.dispatch(sendMessageCreator())
    }
    return (
        <Dialogs
            sendMessage={sendMessage}
            updateNewMessageBody={setNewMessageBody}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            profile={state.profilePage.profile}
            newMessageBody={state.dialogsPage.newMessageBody} />
    )
}

export default DialogsContainer;