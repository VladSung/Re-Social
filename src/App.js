import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <>
      <div className={'menuOpen'}>
        <Header toggleMenuOpen={() => { }} />
        <Navbar />
        <Switch>
          <Route path={'/profile'}>
            <Profile
              store={props.store}
            ></Profile>
          </Route>
          <Route path={'/dialogs'}>
            <DialogsContainer
              store={props.store}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;