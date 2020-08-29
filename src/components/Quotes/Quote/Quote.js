import React from 'react';
import './Quote.css';
import {NavLink} from "react-router-dom";

const Quote = props => {
    return (
        <article className="Quote-item" style={{animationDelay: `${props.delay}s`}}>
            <header className="Quote-item__header">
                <h5 className="Quote-item__title">Author: <span>{props.author}</span></h5>
            </header>
            <div className="Quote-item__body">
                <p className="Quote-item__quote-txt">{props.quote}</p>
            </div>
            <footer className="Quote-item__footer">
                <NavLink
                    to={`/quotes/${props.id}/edit`}
                    className="Button"
                >
                    Edit
                </NavLink>
            </footer>
        </article>
    );
};

export default Quote;