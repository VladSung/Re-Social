import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
    <StrictMode>
        <Router>

            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </StrictMode>,
    document.getElementById('App')
);
