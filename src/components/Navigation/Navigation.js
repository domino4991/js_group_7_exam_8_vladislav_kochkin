import React from 'react';
import './Navigation.css';
import {CATEGORY_NAMES} from "../../constants";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="Category__list">
            <li className="Category__list-item">
                <NavLink
                    to="/"
                    className="Category__list-link"
                    activeClassName="Category__list-link_active"
                >All</NavLink>
            </li>
            {CATEGORY_NAMES.map((item, i) => (
                <li key={i} className="Category__list-item">
                    <NavLink
                        to={`/quotes/${item.category}`}
                        className="Category__list-link"
                        activeClassName="Category__list-link_active"
                    > {item.name}</NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;