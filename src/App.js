import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import { withTheme } from './components/common/Theme/Theme';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: '100vh',
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
  let [menuOpen, setMenuOpen] = useState(true);
  let { initialized, initializeApp } = props
  const classes = useStyles(props);
  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialized) return <div className={classes.banner}>
    <CircularProgress size='4rem' />
    <Typography variant='body1'>Приложение загружается, пожалуйста подождите...</Typography>
  </div>

  return (
    <Paper>
      <Grid className={`${classes.root} ${menuOpen ? 'menuOpen' : ''}`}>
        <CssBaseline />
        <Header menuOpen={menuOpen} />
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Paper className={menuOpen ? classes.main : classes.main2}>
          <Switch>
            <Route path={'/profile/:userId?'}>
              <ProfileContainer />
            </Route>
            <Route path={'/dialogs'}>
              <DialogsContainer />
            </Route>
            <Route path={'/users'}>
              <UsersContainer />
            </Route>
            <Route path={'/login'}>
              <Login />
            </Route>
          </Switch>
        </Paper>
      </Grid>
    </Paper>
  );
}

const mapToStateProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapToStateProps, { initializeApp }),
  withTheme
)(App);