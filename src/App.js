import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

function App(props) {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <Router>
      <div className={menuOpen ? 'menuOpen' : ''}>
        <Header toggleMenuOpen={toggleMenuOpen} />
        <Navbar />
        <Switch>
          <Route exact path={'/profile'}>
            <Profile
              profile={props.state.profilePage.profile}></Profile>
          </Route>
          <Route path={'/dialogs'}>
            <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              profile={props.state.profilePage.profile}
            ></Dialogs>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;