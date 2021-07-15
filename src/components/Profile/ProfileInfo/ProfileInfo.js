import { Button } from '@material-ui/core';
import styles from './profileInfo.module.css';

function ProfileInfo({ profile }) {
    return (
        <>
            <div className={styles.bg}>
                <img className={styles.bgImg} src={profile.bg} />
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.userProfile}>
                            <div className={styles.avatar}>
                                <div className={styles.avatarWrapper}>
                                    <div className={styles.avatarContainer}>
                                        <img src={profile.photo} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <h2>{profile.name}</h2>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <Button variant="outlined" color='primary' className={styles.button}>Подписаться</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ProfileInfo;