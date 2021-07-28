import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Skeleton, Avatar } from '@material-ui/core';
import styles from './profileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    container: {
        '&.MuiContainer-root': {
            display: 'flex',
        }
    }
}))


function ProfileInfo({ profile, status, updateStatus }) {
    const classes = useStyles()
    return (
        <Paper>
            <Grid item xs>
                <div className={styles.bg}>
                    {profile?.bg ? <img className={styles.bgImg} src={profile.bg} alt='' />
                        : <Skeleton><img className={styles.bgImg} alt='' /></Skeleton>
                    }
                </div>
                <div className={styles.profileInfo}>
                    <div className={styles.header}>
                        <Container maxWidth='md' className={classes.container}>
                            <div className={styles.avatar}>
                                <div className={styles.avatarWrapper}>
                                    <div className={styles.avatarContainer}>
                                        {profile?.photos
                                            ? <Avatar
                                                alt=''
                                                src={profile.photos.large}
                                                sx={{ width: 96, height: 96 }}
                                            />
                                            : <Skeleton variant="circular" width={96} height={96} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.userProfile}>
                                <div className={styles.userProfileRow}>
                                    <div className={styles.title}>
                                        <Typography variant='h5'>
                                            {profile ? profile.fullName
                                                : <Skeleton />
                                            }
                                        </Typography>
                                    </div>
                                    <div className={styles.actions}>
                                        <Button variant="outlined" color='primary' className={styles.button}>Подписаться</Button>
                                    </div>
                                </div>
                                <div className={styles.userProfileRow}>
                                    {status !== undefined
                                        ? <ProfileStatus status={status} updateStatus={updateStatus} />
                                        : <Skeleton width={'100%'}></Skeleton>}
                                </div>
                            </div>
                        </Container>
                    </div>

                </div>
            </Grid>
        </Paper>
    );
}
export default ProfileInfo;