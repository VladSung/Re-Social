import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Avatar, IconButton } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ProfileStatus from './ProfileStatus';
import { makeStyles } from '@material-ui/styles';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    container: {
        '&.MuiContainer-root': {
            display: 'flex',
        }
    },
    profileInfoPaper: {
        background: theme.palette.background.default,
    },
    bg: {
        display: 'flex',
        minHeight: '180px',
        maxHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        transition: '300ms',
        backgroundColor: 'rgb(192, 191, 191)',
    },
    bgImg: {
        width: '100%',
        objectFit: 'cover',
    },
    avatarWrapper: {
        width: '100%',
        height: '100%'
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        border: `1px solid ${theme.palette.background.paper}`,
        borderRadius: '50%',
        marginTop: theme.spacing(-3),
        width: 96,
        height: 96,
        backgroundColor: 'white',
    },
    profileInfo: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
    },
    userProfile: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: theme.spacing(3) + 'px 0',
        width: '100%',
    },
    userProfileRow: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    avatar: {
        marginRight: theme.spacing(3),
        width: 96,
        height: 96,
    },
    avatarImg: {
        width: '100%',
        height: '100%',
        '&::before': {
            content: '""',
            minWidth: 0,
            minHeight: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'block',
        },
        '&:hover ~ $photoForm': {
            display: 'block',
        }
    },
    title: {
        minWidth: '160px',
        marginRight: theme.spacing(2),
        fontWeight: 'bold',
    },
    actions: {
        marginLeft: 'auto',
    },
    photoForm: {
        display: 'none',
        position: 'absolute',
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        background: 'rgb(0 0 0 / 0.3)',
        '& label': {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        },
        '&:hover': {
            display: 'flex',
        },
    },
    userFollows: {
        display: 'flex',
        gap: theme.spacing(4),
    },
    userFollowsItem: {
        display: 'flex',
    },
    followsCount: {
        marginRight: theme.spacing(0.5),
        fontWeight: 500,
    },
    userStatus: {
        paddingBottom: theme.spacing(5),
        width: 808,
        paddingLeft: 120,
    }
}))


function ProfileInfo({ profile, status, updateStatus, updateUserPhoto }) {
    const classes = useStyles()
    const setUserPhoto = (e) => {
        updateUserPhoto(profile.userId, e.target.files[0])
    }
    return (
        <Grid item xs>
            <div className={classes.bg}>
                {true ? <img className={classes.bgImg} src={'https://source.unsplash.com/random/1920x1200/?japan?dark'} alt='' />
                    : <Skeleton><img className={classes.bgImg} alt='' /></Skeleton>
                }
            </div>
            <div className={classes.profileInfo}>
                <Paper elevation={0} square className={classes.profileInfoPaper}>
                    <Container maxWidth='md' className={classes.container}>
                        <div className={classes.avatar}>
                            <div className={classes.avatarWrapper}>
                                <div className={classes.avatarContainer}>
                                    {profile?.photos
                                        ? <>
                                            <Avatar
                                                alt=''
                                                src={profile.photos.large}
                                                className={classes.avatarImg}
                                            />
                                            <form className={classes.photoForm}>
                                                <input accept="image/*" hidden id="photo" type="file" onInput={setUserPhoto} />
                                                <label htmlFor="photo">
                                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                                        <PhotoCamera />
                                                    </IconButton>
                                                </label>
                                            </form>
                                        </>
                                        : <Skeleton variant="circle" width={96} height={96} />}
                                </div>
                            </div>
                        </div>
                        <div className={classes.userProfile}>
                            <div className={classes.userProfileRow}>
                                <Typography variant='h6' className={classes.title}>
                                    {profile ? profile.fullName
                                        : <Skeleton />
                                    }
                                </Typography>
                                <div className={classes.actions}>
                                    <Button variant="contained" color='primary' className={classes.button}>Подписаться</Button>
                                </div>
                            </div>
                            <div className={`${classes.userProfileRow} ${classes.userFollows}`}>
                                <Typography variant='body2' className={classes.userFollowsItem}>
                                    <span className={classes.followsCount}>16K</span>подписчиков
                                </Typography>
                                <Typography variant='body2' className={classes.userFollowsItem}>
                                    <span className={classes.followsCount} >120</span>подписок
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </Paper>
            </div>
            <Container maxWidth='md' className={classes.container}>
                <div className={`${classes.userProfileRow} ${classes.userStatus}`}>
                    {status !== undefined
                        ? <ProfileStatus status={status} updateStatus={updateStatus} />
                        : <Skeleton width={'100%'}></Skeleton>}
                </div>
            </Container>
        </Grid>);
}
export default ProfileInfo;