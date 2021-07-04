import styles from './message.module.css'

function Message({ profile, messages, dialogs }) {
    const dialogData = dialogs[1];
    return (
        <div className={styles.messagesContent}>
            <div className={`${styles.message} ${styles.meMessage}`}>
                <div className={styles.userPhoto}>
                    <img src={profile.photo} />
                </div>
                <div className={styles.messageText}>fffff</div>
            </div>
            <div className={`${styles.message} ${styles.userMessage}`}>
                <div className={styles.userPhoto}>
                    <img src={dialogData.photo} />
                </div>
                <div>
                    <div className={styles.authorName}>
                        author
                    </div>
                    <div className={styles.messageText}>dddddddd</div>
                </div>
            </div>
        </div>
    );
}
export default Message