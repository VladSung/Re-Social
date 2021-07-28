import React from 'react';
import { Typography } from '@material-ui/core';
import LogoIcon from '../../logo.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: 64,
    },
    icon: {
        maxHeight: 56,
    }
}))

const Logo = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <img className={classes.icon} src={LogoIcon} alt='Logo' />
            <Typography variant="h6">
                Re:Social
            </Typography>
        </div>
    )
}
export default Logo;