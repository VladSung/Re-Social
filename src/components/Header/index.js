import React from 'react';
import './header.css'
import Logo from './../../logo.png'

function Header({ toggleMenuOpen }) {
    return (
        <>
            <header>
                <button className='menuBtn' onClick={() => toggleMenuOpen()}>
                    <span></span>
                </button>
                <img src={Logo} />
                <p>Re: Social</p>
            </header>
        </>
    );
}

export default Header;