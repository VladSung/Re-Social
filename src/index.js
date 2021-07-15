import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <>
            <Router>
                <App
                    state={store.getState()}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </Router>
        </>,
        document.getElementById('App')
    );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);