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
  const [menuOpen, setMenuOpen] = useState(props.state.sidebar.menuOpen);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className={menuOpen ? 'menuOpen' : ''}>
        <Header toggleMenuOpen={toggleMenuOpen} />
        <Navbar />
        <Switch>
          <Route exact path={'/profile'}>
            <Profile
              profile={props.state.profilePage.profile}
              newPostText={props.state.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}
              posts={props.state.profilePage.posts}
              addPost={props.addPost}
            ></Profile>
          </Route>
          <Route path={'/dialogs'}>
            <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              profile={props.state.profilePage.profile}
              newMessageText={props.state.dialogsPage.newMessageText}
              updateNewMessageText={props.updateNewMessageText}
            ></Dialogs>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;