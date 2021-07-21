import { Button } from '@material-ui/core';
import styles from './profileInfo.module.css';
import ProfileStatus from './ProfileStatus';

function ProfileInfo({ profile, status, updateStatus }) {
    return (
        <>
            <div className={styles.bg}>
                {/* <img className={styles.bgImg} src={profile.bg} alt='' /> */}
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.avatar}>
                            <div className={styles.avatarWrapper}>
                                <div className={styles.avatarContainer}>
                                    <img src={profile.photos.large} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.userProfile}>
                            <div className={styles.userProfileRow}>
                                <div className={styles.title}>
                                    <h2>{profile.fullName}</h2>
                                </div>
                                <div className={styles.actions}>
                                    <Button variant="outlined" color='primary' className={styles.button}>Подписаться</Button>
                                </div>
                            </div>
                            <div className={styles.userProfileRow}>
                                <ProfileStatus status={status} updateStatus={updateStatus} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ProfileInfo;