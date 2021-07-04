import React from 'react';
import styles from './navbar.module.css'
import {
    NavLink
} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={`nav ${styles.nav}`}>
            <ul className={styles.navbar}>
                <li className={styles.navbar__item}>
                    <NavLink activeClassName={styles.active} to='/profile'>Профиль</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink activeClassName={styles.active} to="/dialogs">Сообщения</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink activeClassName={styles.active} to="/news">Новости</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink activeClassName={styles.active} to="/music">Музыка</NavLink>
                </li>
                <li className={`${styles.navbar__item} ${styles.navbar__item_settings}`}>
                    <NavLink activeClassName={styles.active} to="/settings">Настройки</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;