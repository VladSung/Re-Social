import React, { useState, useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from './components/common/Theme/Theme'
import { initializeApp } from './redux/app-reducer';

import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes/Routes';

import { makeStyles } from '@material-ui/styles';
import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: '100vh',
    },
    fullWidth: {
      margin: 0,
    },
    main: {
      marginLeft: 240,
    },
    main2: {
      marginLeft: theme.spacing(9),
    },
    banner: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 24,
    }
  }
})

function App(props) {
  const location = useLocation()
  const dispatch = useDispatch()
  const initialized = useSelector((state) => state.app.initialized)
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles(props);
  const onMenuBtnClick = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])
  if (!initialized) return <div className={classes.banner}>
    <CircularProgress size='4rem' />
    <Typography variant='body1'>Приложение загружается, пожалуйста подождите...</Typography>
  </div>
  return (
    <Grid className={`${classes.root} ${menuOpen ? 'menuOpen' : ''}`}>
      {location.pathname !== '/login' && <>
        <Header menuOpen={menuOpen} switchTheme={props.switchTheme} />
        <Navbar setMenuOpen={onMenuBtnClick} menuOpen={menuOpen} />
      </>}
      <Box className={`${location.pathname === '/login' ? classes.fullWidth : (menuOpen ? classes.main : classes.main2)}`}>
        <Routes />
      </Box>
    </Grid >
  );
}

export default withTheme(App)