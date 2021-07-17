import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {
  return (
    <>
      <div className={'menuOpen'}>
        <Header toggleMenuOpen={() => { }} />
        <Navbar />
        <Switch>
          <Route path={'/profile'}>
            <ProfileContainer />
          </Route>
          <Route path={'/dialogs'}>
            <DialogsContainer />
          </Route>
          <Route path={'/users'}>
            <UsersContainer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;