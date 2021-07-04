import styles from './profileInfo.module.css'
function ProfileInfo({ profile }) {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <img src={profile.photo}></img>
                </div>
                <div className={styles.title}>
                    <h2> ACOUSTIC</h2>
                </div>
            </div>

        </div>

    );
}
export default ProfileInfo;