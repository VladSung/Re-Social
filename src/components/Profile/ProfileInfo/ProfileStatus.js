import React, { useEffect, useState } from 'react';
import { Input, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    userStatus: {
        width: '100%',
    },
}))

const ProfileStatus = (props) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onEditStatus = (e) => {
        setStatus(e.target.value)
    }
    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)

    }
    const updateStatus = (e) => {
        if (e.key === 'Enter') {
            props.updateStatus(status)
            deactivatedEditMode();
        }
    }
    return (
        <>
            {editMode && <Input
                className={classes.userStatus}
                value={status}
                onKeyDown={updateStatus}
                autoFocus={true}
                onChange={onEditStatus} onBlur={deactivatedEditMode} />
            }
            {!editMode && <Typography variant='body1' className={classes.userStatus} onDoubleClick={activatedEditMode}>{status || 'Нет статуса'}</Typography>}

        </>
    )
}

export default ProfileStatus;