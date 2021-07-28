import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo from '../common/Logo';

const useStyles = makeStyles(theme => ({
    root: {
        '&.MuiAppBar-root': {
            marginLeft: 'auto',
            height: 64,
            zIndex: 101,
            width: `calc(100% - ${theme.spacing(7)})`,
        },
    },
    login: {
        marginLeft: 'auto',
    },
    loginBtn: {
        textDecoration: 'none',
    },
    menuOpenHeader: {
        '.menuOpen &.MuiAppBar-root': {
            width: 'calc(100% - 240px)',
        }
    }

}))

function Header(props) {
    const classes = useStyles(props)
    return (
        <AppBar color='default' className={`${classes.root} ${props.menuOpen ? classes.menuOpenHeader : ''}`} position="relative">
            <Toolbar>
                {props.menuOpen ? '' : <Logo />}
                <Box className={classes.login}>
                    {props.isAuth
                        ? <Typography variant='body1'> {props.login} </Typography>
                        : <Button component={Link} to={'/login'} variant='outlined' color="primary">Login</Button>}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;