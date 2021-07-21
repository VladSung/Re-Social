import React from 'react';
import styles from './dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import { Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';

function Dialogs(props) {
    const setNewMessageBody = (e) => {
        let text = (e.target.value)
        props.updateNewMessageBody(text)
    };
    const sendMessage = () => {
        props.sendMessage()
    }
    return (
        <div className={`dialogs ${styles.main}`}>
            <div className={styles.wrapper}>

                <div className={styles.dialogs}>
                    <ul>
                        <Dialog dialogs={props.dialogsPage.dialogs}></Dialog>
                    </ul>

                </div>
                <div className={styles.messages}>
                    <div className={styles.header}>
                        <h2>user</h2>
                        <p>. . .</p>
                    </div>
                    <Messages profile={props.profile} dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages} />
                    <div className={styles.newMessage}>
                        <TextField
                            id="standard-textarea"
                            variant='standard'
                            InputProps={{
                                style: {
                                    color: "#ffff"
                                }
                            }}
                            className={styles.messageInput}
                            multiline onChange={setNewMessageBody}
                            value={props.dialogsPage.newMessageBody}
                            placeholder='Введите сообщение...'>
                        </TextField>
                        <Button onClick={sendMessage} className={styles.button}>
                            <SendIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;