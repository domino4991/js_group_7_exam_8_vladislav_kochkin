import React from 'react';
import './Quote.css';
import {NavLink} from "react-router-dom";

const Quote = props => {
    return (
        <article className="Quote-item">
            <header className="Quote-item__header">
                <h5 className="Quote-item__title">{props.author}</h5>
            </header>
            <div className="Quote-item__body">
                <p className="Quote-item__quote-txt">{props.quote}</p>
            </div>
            <footer className="Quote-item__footer">
                <NavLink
                    to={`/quotes/${props.id}/edit`}
                    className="Quote-item__edit-btn"
                >
                    Edit
                </NavLink>
            </footer>
        </article>
    );
};

export default Quote;