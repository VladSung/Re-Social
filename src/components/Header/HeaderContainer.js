import React from 'react';
import Header from './Header'
import { useSelector, shallowEqual } from 'react-redux';

function HeaderContainer(props) {
    let { menuOpen } = props
    let isAuth = useSelector(state => state.auth.isAuth, shallowEqual)
    let login = useSelector(state => state.auth.login, shallowEqual)
    return (
        <Header
            isAuth={isAuth}
            login={login}
            menuOpen={menuOpen} />
    )
}
export default HeaderContainer;