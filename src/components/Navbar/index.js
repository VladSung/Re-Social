import React from 'react';
import './sidebar.css'

const Navbar = () => (
    <nav>
        <ul className="sidebar">
            <li className="sidebar__item">
                <a href="#">Profile</a>
            </li>
            <li className="sidebar__item">
                <a href="#">Messages</a>
            </li>
            <li className="sidebar__item">
                <a href="#">News</a>
            </li>
            <li className="sidebar__item">
                <a href="#">Music</a>
            </li>
            <li className="sidebar__item sidebar__item_settings">
                <a href="#">Settings</a>
            </li>
        </ul>
    </nav>
)

export default Navbar;