import React from 'react';
import Message from './Message/Message';
import styles from './messages.module.css'

function Messages(props) {
    let messagesData = props.messages.map((e) => {
        if (props.profile.id === e.id) {
            return (<Message meMessage={true} profile={props.profile} message={e.message}></Message>
            )
        } else {
            return (<Message user={props.profile} message={e.message}></Message>)
        }
    })
    console.log(props.messages)
    return (
        <div className={styles.messagesContent}>
            {messagesData}
        </div>
    );
}
export default Messages;