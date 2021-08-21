import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@material-ui/core';
import {
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon
} from '@material-ui/icons';
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
    themeSwitcher: {
        marginLeft: 'auto',
        marginRight: theme.spacing(4),
    },
    login: {

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
    const onSwitchTheme = () => {
        props.switchTheme()
    }
    const classes = useStyles(props)
    return (
        <AppBar color='default' className={`${classes.root} ${props.menuOpen ? classes.menuOpenHeader : ''}`} position="relative">
            <Toolbar>
                {props.menuOpen ? '' : <Logo />}
                <IconButton onClick={onSwitchTheme} className={classes.themeSwitcher}>
                    {true ?
                        <Brightness4Icon />
                        : <Brightness7Icon />}
                </IconButton>
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