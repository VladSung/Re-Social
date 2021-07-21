import React from 'react';
import './header.css'
import Logo from './../../logo.svg'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <header>
                <button className='menuBtn' onClick={() => props.toggleMenuOpen()}>
                    <span></span>
                </button>
                <img src={Logo} alt='Logo' />
                <p>Re: Social</p>
                {props.isAuth ? <span style={{
                    color: 'red', float: 'right', position: 'absolute',
                    right: '15px',
                }}> {props.login} </span> : <Link to={'/login'}>Login</Link>}

            </header>
        </>
    );
}

export default Header;