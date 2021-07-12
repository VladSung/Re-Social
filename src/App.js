import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

function App(props) {
  return (
    <>
      <div className={'menuOpen'}>
        <Header toggleMenuOpen={() => { }} />
        <Navbar />
        <Switch>
          <Route path={'/profile'}>
            <Profile
              profile={props.state.profilePage.profile}
              newPostText={props.state.profilePage.newPostText}
              posts={props.state.profilePage.posts}
              dispatch={props.dispatch}
            ></Profile>
          </Route>
          <Route path={'/dialogs'}>
            <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              profile={props.state.profilePage.profile}
              newMessageBody={props.state.dialogsPage.newMessageBody}
              dispatch={props.dispatch}
            ></Dialogs>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;