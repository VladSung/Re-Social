import Dialogs from './Dialogs'
import { updateNewMessageBody, sendMessage } from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        profile: state.profilePage.profile,
    }
}
const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Dialogs);

export default DialogsContainer;