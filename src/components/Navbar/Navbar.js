import React from 'react';
import clsx from 'clsx';
import Logo from '../common/Logo'
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, IconButton, Drawer } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import {
    Home as HomeIcon,
    Settings as SettingsIcon,
    Message as MessageIcon,
    People as PeopleIcon,
    List as ListIcon,
    Menu as MenuIcon,
    MenuOpen as MenuOpenIcon
} from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '& .MuiPaper-root': {
                backgroundColor: theme.palette.background.default,
            },
            '& li': {
                listStyleType: 'none',
            },
            '& a': {
                color: theme.palette.text.primary,
                textDecoration: 'none',
                '& svg': {
                    fill: theme.palette.text.icon,
                },
                '&:hover': {
                    color: theme.palette.primary.light,
                    '& svg': {
                        fill: theme.palette.primary.light,
                    }
                },
                '&.active': {
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    '& svg': {
                        fill: theme.palette.primary.main,
                    }
                },
            },
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        navbar: {
            display: 'flex',
            flexDirection: 'column',
        },
        divider: {
            backgroundColor: 'rgb(255 255 255 / 0.05)',
        },
        navHeader: {
            height: 64,
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            '& button': {
                marginRight: theme.spacing(3.5),
            },
            '& svg': {
                fill: theme.palette.text.icon
            }
        }
    }
});


function Navbar(props) {
    const classes = useStyles(props);
    const handleMenuOpen = () => props.setMenuOpen(true)
    const handleMenuClose = () => props.setMenuOpen(false)
    return (
        <Drawer className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.menuOpen,
            [classes.drawerClose]: !props.menuOpen,
        })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.menuOpen,
                    [classes.drawerClose]: !props.menuOpen,
                }),
            }} anchor="left" variant="permanent" component='nav'>
            <Box className={classes.navHeader}>
                {props.menuOpen
                    ? <IconButton onClick={handleMenuClose} edge="start" color="inherit" aria-label="menu"><MenuOpenIcon /></IconButton>
                    : <IconButton onClick={handleMenuOpen} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                }
                <Logo />
            </Box>
            <List className={classes.navbar}>
                <li>
                    <ListItem button activeClassName={classes.active} to='/profile' component={NavLink}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Профиль' />
                    </ListItem>
                </li>
                <li>
                    <ListItem activeClassName={classes.active} button to='/dialogs' component={NavLink}>
                        <ListItemIcon><MessageIcon /></ListItemIcon>
                        <ListItemText primary='Сообщения' />
                    </ListItem>
                </li>
                <li>
                    <ListItem activeClassName={classes.active} button to='/users' component={NavLink}>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary='Пользователи' />
                    </ListItem>
                </li>
                <li>
                    <ListItem activeClassName={classes.active} button to='/news' component={NavLink}>
                        <ListItemIcon><ListIcon /></ListItemIcon>
                        <ListItemText primary='Новости' />
                    </ListItem>
                </li>
                <Divider light className='divider' variant="fullWidth" />
                <li>
                    <ListItem activeClassName={classes.active} color='primary' button to='/settings' component={NavLink}>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary='Настройки' />
                    </ListItem>
                </li>
            </List>
        </Drawer>
    )
}
export default Navbar