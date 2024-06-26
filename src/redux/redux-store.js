import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import appReducer from './app-reducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.reducers = reducers
window.store = store;

export default store;