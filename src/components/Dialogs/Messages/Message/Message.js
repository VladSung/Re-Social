import styles from './message.module.css'
function Message(props) {
    let MeMessage = (profile, message) => {
        return (
            <div className={`${styles.message} ${styles.meMessage}`}>
                <div className={styles.userPhoto}>
                    <img src={profile.photo} alt='' />
                </div>
                <div className={styles.messageText}>{message}</div>
            </div>
        )
    }
    let UserMessage = (user, message) => {
        return (
            <div className={styles.messagesContent}>
                <div className={`${styles.message} ${styles.userMessage}`}>
                    <div className={styles.userPhoto}>
                        <img src={user.photo} alt='' />
                    </div>
                    <div>
                        <div className={styles.authorName}>
                            {user.name}
                        </div>
                        <div className={styles.messageText}>{message}</div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {props.meMessage ? MeMessage(props.profile, props.message) : UserMessage(props.user, props.message)}
        </>
    );
}
export default Message