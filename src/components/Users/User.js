import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Avatar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        maxWidth: '60%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        margin: 'auto',
        height: '100%',
        padding: '0 40px',
    },
    header: {
        width: '100%',
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        marginRight: theme.spacing(2),
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.text.secondary,
        },
    },
    avatarWrapper: {
        width: '100%',
        height: '100%',
    },
    avatarContainer: {
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '50%',
        width: '100%',
        height: '100%',
    },
    title: {
        alignSelf: 'center',
        '& h2': {
            fontSize: '18px',
        },
    },
    actions: {
        alignSelf: 'center',
        marginLeft: 'auto',
    }
}))

const User = (props) => {
    const { user } = props
    const classes = useStyles();
    let toggleFollow = (userId) => {
        props.toggleFollow(userId);
    }

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.userProfile}>
                    <Link to={`../profile/${user.id}`} className={classes.link}>
                        <div className={classes.avatarWrapper}>
                            <div className={classes.avatarContainer}>
                                <Avatar size='lg' src={user.photos ? user.photos.small : null} />
                            </div>
                        </div>
                    </Link>
                    <div className={classes.title}>
                        <Typography variant='body1'>
                            <Link to={`../profile/${user.id}`} className={classes.link}>{user.name}</Link>
                        </Typography>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button
                        variant={user.followed ? 'outlined' : 'contained'}
                        disabled={props.followFetching.some(id => id === user.id)}
                        style={props.followFetching.some(id => id === user.id) ? { filter: 'invert(1)' } : {}}
                        size='small'
                        color='primary'
                        onClick={() => toggleFollow(user.id)}
                        className={classes.button}>{user.followed ? 'Отписаться' : 'Подписаться'}</Button>
                </div>
            </div>
        </div>
    )
}

export default User;