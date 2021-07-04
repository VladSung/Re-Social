import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile({ profile, }) {
    return (
        <div className='main'>
            <div className={styles.bg}>
                <img className={styles.bgImg} src={profile.bg} />
            </div>
            <ProfileInfo profile={profile} />
        </div>
    );
}

export default Profile;