import React from 'react';
import './Form.css';
import {CATEGORY_NAMES} from "../../../constants";
import {NavLink} from "react-router-dom";

const Form = props => {
    return (
        <form className="Form" onSubmit={props.submit}>
            <label htmlFor="category" className="Form__label">Category</label>
            <select
                className="Form__category-select"
                id="category"
                name="category"
                value={props.category}
                onChange={props.changed}
            >
                {CATEGORY_NAMES.map((item, i) => (
                    <option
                        key={i}
                        value={item.name}
                    >{item.name}</option>
                ))}
            </select>
            <label htmlFor="author" className="Form__label">Author</label>
            <input
                id="author"
                name="author"
                value={props.author}
                onChange={props.changed}
                className="Form__field"
                type="text"
                required
            />
            <label htmlFor="quote-text" className="Form__label">Quote text</label>
            <textarea
                id="quote-text"
                className="Form__field Form__text"
                value={props.quote}
                name="quote"
                onChange={props.changed}
                required
            />
            {props.children}
            <NavLink to="/quotes/all" className="Form__close">Cancel</NavLink>
        </form>
    );
};

export default Form;