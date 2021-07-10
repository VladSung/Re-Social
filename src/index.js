import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, updateNewMessageText } from './redux/state';
import { BrowserRouter as Router } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <>
            <Router>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
            </Router>
        </>,
        document.getElementById('App')
    );
};
rerenderEntireTree(state)