import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import styles from './message.module.css';

const MeMessage = (profile, message) => {
    return (
        <div className={`${styles.message} ${styles.meMessage}`}>
            <div className={styles.userPhoto}>
                <Avatar src={profile.photos.small} alt={profile.fullName} />
            </div>
            <Typography className={styles.messageText}>{message}</Typography>
        </div>
    )
}

const UserMessage = (user, message) => {
    return (
        <div className={styles.messagesContent}>
            <div className={`${styles.message} ${styles.userMessage}`}>
                <div className={styles.userPhoto}>
                    <Avatar src={user.photos.small} alt='' />
                </div>
                <div>
                    <div className={styles.authorName}>
                        {user.name}
                    </div>
                    <Typography className={styles.messageText}>{message}</Typography>
                </div>
            </div>
        </div>
    );
}

function Message(props) {
    let { message } = props
    message = message.split('\n').map((item, index) => {
        return (index === 0) ? item : [<br key={index} />, item]
    })

    return (
        <>
            {props.meMessage ? MeMessage(props.profile, message) : UserMessage(props.user, message)}
        </>
    );
}
export default Message