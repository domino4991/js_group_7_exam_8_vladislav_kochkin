import React from 'react';
import './Header.css';

import {ImQuotesLeft} from 'react-icons/im';

const Header = () => {
    return (
        <header className="Header">
            <div className="container Header-inner">
                <div className="Logo-box">
                    <ImQuotesLeft />
                    <span className="Logo-name">Quotes</span>
                </div>
                <nav className="Header__nav">
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">Quotes</li>
                        <li className="Header__nav-item">Add new quotes</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;