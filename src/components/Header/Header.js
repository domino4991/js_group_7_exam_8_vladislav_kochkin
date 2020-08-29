import React from 'react';
import './Header.css';

import {ImQuotesLeft} from 'react-icons/im';
import {NavLink} from "react-router-dom";

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
                        <li className="Header__nav-item">
                            <NavLink
                                to="/quotes/all"
                                className="Header__nav-link"
                                activeClassName="Header__nav-link_active"
                            >
                                Quotes
                            </NavLink>
                        </li>
                        <li className="Header__nav-item">
                            <NavLink
                                to="/add-quote"
                                className="Header__nav-link"
                                activeClassName="Header__nav-link_active"
                            >
                                Add new quotes
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;