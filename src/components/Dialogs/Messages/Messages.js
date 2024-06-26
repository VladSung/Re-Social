import React from 'react';
import Message from './Message/Message';
import styles from './messages.module.css'

function Messages(props) {
    let messagesData = props.messages.map((e) => {
        if (props.profile.userId === e.userId) {
            return (<Message key={e.id} meMessage={true} profile={props.profile} message={e.message}></Message>
            )
        } else {
            return (<Message key={e.id} user={props.profile} message={e.message}></Message>)
        }
    })
    return (
        <div className={styles.messagesContent}>
            {messagesData}
        </div>
    );
}
export default Messages;