import React from 'react';
import './Quotes.css';
import Quote from "./Quote/Quote";

const Quotes = props => {
    return (
        <div className="Quotes">
            {props.quotes.map(item => <Quote
                    author={item.author}
                    quote={item.quote}
                    category={item.category}
                />
            )}
        </div>
    );
};

export default Quotes;