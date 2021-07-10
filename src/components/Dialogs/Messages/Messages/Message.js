import styles from '../Messages'
function Message(props) {
    const dialogData = props.dialogs[1];
    let MeMessage = (profile) => {
        (
            <div className={`${styles.message} ${styles.meMessage}`}>
                <div className={styles.userPhoto}>
                    <img src={profile.photo} />
                </div>
                <div className={styles.messageText}>fffff</div>
            </div>
        )
    }
    let UserMessage = (user) => {
        return (
            <div className={styles.messagesContent}>
                <div className={`${styles.message} ${styles.userMessage}`}>
                    <div className={styles.userPhoto}>
                        <img src={user.photo} />
                    </div>
                    <div>
                        <div className={styles.authorName}>
                            user.name
                        </div>
                        <div className={styles.messageText}>dddddddd</div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {MeMessage(props.profile)}
        </>
    );
}
export default Message