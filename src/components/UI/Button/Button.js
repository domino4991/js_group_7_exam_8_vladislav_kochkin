import React from 'react';
import './Button.css';

const Button = props => (
    <button
        type={props.btnType}
        onClick={props.clicked ? props.clicked : null}
        className="Button"
    >{props.label}
    </button>
);

export default Button;