import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

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