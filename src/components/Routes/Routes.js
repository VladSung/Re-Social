import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom';

import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={ProfileContainer} />
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
                <Login />
            </Route>
            <Route path={'/teapot'}>
                <NotFoundPage errorCode={418} description='Любая попытка заварить кофе с помощью чайника должна приводить к появлению кода ошибки «418 Я чайник». Полученное тело объекта МОЖЕТ быть коротким и крепким.' />
            </Route>
            <Route path='*'>
                <NotFoundPage errorCode={404} description='Страница не найдена' />
            </Route>
        </Switch>
    )
}