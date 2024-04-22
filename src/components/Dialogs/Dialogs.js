import React from 'react';
import styles from './dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import DialogsForm from './DialogsForm'
import { Skeleton } from '@material-ui/lab';

function Dialogs(props) {
    let profile = props.profile
    return (
        <>{
            profile ? <div className={`dialogs ${styles.main}`}>
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
                        <DialogsForm sendMessage={props.sendMessage} />
                    </div>
                </div>
            </div >
                : <Skeleton width='100%' height='20vh' />}
        </>)
}

export default Dialogs;