import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/HeaderContainer';
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
        <div className='main'>
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
              <h2>Login</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;