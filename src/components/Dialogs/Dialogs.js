import React from 'react';
import styles from './dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs({ profile, dialogs, messages }) {
    return (
        <div className={`main dialogs ${styles.main}`}>
            <div className={styles.wrapper}>

                <div className={styles.dialogs}>
                    <ul>
                        <Dialog dialogs={dialogs}></Dialog>
                    </ul>

                </div>
                <div className={styles.messages}>
                    <div className={styles.header}>
                        <h2>user</h2>
                        <p>. . .</p>
                    </div>
                    <Message profile={profile} dialogs={dialogs} messages={messages} />
                    <div>
                        <textarea>

                        </textarea>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dialogs;