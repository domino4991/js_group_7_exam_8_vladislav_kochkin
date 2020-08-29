import React from 'react';
import './Navigation.css';
import {CATEGORY_NAMES} from "../../constants";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    let categoryList = CATEGORY_NAMES.map(item => (
        <li className="Category__list-item">
            <NavLink
                path={`/quotes/${item.category}`}
                className="Category__list-link"
                activeClassName="Category__list-link_active"
            />
        </li>
    ));

    return (
        <ul className="Category__list">
            {categoryList}
        </ul>
    );
};

export default Navigation;