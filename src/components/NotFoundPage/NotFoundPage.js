import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Container, Box, Typography, Button, Link as MuiLink } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: 'calc(100vh - 64px)',
        background: `linear-gradient( 45deg, rgb(33 33 33 / 30%), rgb(33 33 33 / 30%)),
         url(https://psv4.userapi.com/c505536/u269162344/docs/d1/6b9ef12d58fa/64655927_p1_master1200.jpg?extra=FRvDzCA_abnomSSI0a1faaeDpOnn4mh3kE7G3-RsQRNsMLsI0S6AzWBXVieiQZuELJUbYug8-MrWQVRdP49MOmOe8cLrWyPEbkTx0jZ-7nmxSqunl81lL5RGAOkbFE4kX1CLxwgcioRrol46i_3oueY-)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    errorWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    errorContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
    },
    errorTitle: {
        filter: 'drop-shadow(0 0 5px rgb(211 47 47 / 75%))',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        color: 'rgb(255 255 255 / 80%)',
    },
    errorCode: {
        filter: 'drop-shadow(0 0 10px rgb(211 47 47 / 75%))',
        letterSpacing: '29px',
        overflowWrap: 'break-word',
        position: 'absolute',
        left: '50%',
        color: 'rgb(255 255 255 / 80%)',
        transform: 'translateX(-50%)',
        marginLeft: '14px',
        fontWeight: 500,
    },
    errorIcon: {
        width: '110px',
        height: '100%',
        color: theme.palette.error.dark + 'b3' // color with 70% in alpha channel
    },
    errorDesc: {
        textAlign: 'center',
        marginBottom: theme.spacing(6),
        color: '#fff',
    },
    backgroundAuthor: {
        color: '#fff',
        width: 'maxContent',
        position: 'absolute',
        right: theme.spacing(4),
        bottom: theme.spacing(2),
    },
    btn: {
        margin: 'auto'
    }
}))

const PageError = ({ errorCode = 520, description = 'Unknown Error' }) => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Box className={classes.errorWrapper}>
                <Box className={classes.errorContainer}>
                    <Typography className={classes.errorCode} variant='h1'>{errorCode}</Typography>
                    <ReportProblemOutlinedIcon className={classes.errorIcon} />
                </Box>
                <Typography className={classes.errorDesc} variant='body1'>{description}</Typography>
                <Button size='small' className={classes.btn} variant='contained' color='primary' to='/profile' component={Link}>На Главную</Button>
            </Box>
            <Typography variant='h5' className={classes.backgroundAuthor} >Art by <MuiLink href='#'>Wlop</MuiLink></Typography>
        </Container>
    )
}
export default PageError