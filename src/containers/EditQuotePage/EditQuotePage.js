import React, {useEffect, useState} from 'react';
import './EditQuotePage.css';
import Form from "../../components/UI/Form/Form";
import axiosQuotes from "../../axiosQuotes";
import {Sugar} from "react-preloaders";
import Button from "../../components/UI/Button/Button";

const EditQuotePage = props => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = props.match.params.id;

    useEffect(() => {
        const getQuote = async () => {
            try {
                const quoteResponse = await axiosQuotes.get(`/quotes/${id}.json`);
                const quote = quoteResponse.data;
                quote.category = quote.category[0].toUpperCase() + quote.category.slice(1);
                quote.category = quote.category.replace('-', ' ');
                setQuote(quote);
            } finally {
                setLoading(false);
            }
        };
        getQuote().catch(console.error);
    }, [id]);

    const onChangeQuote = e => {
        const name = e.target.name;
        const value = e.target.value;
        setQuote(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitChangedQuote = async e => {
        e.preventDefault();
        const quoteCopy = {...quote};
        const postQuote = {
            category: quoteCopy.category.replace(' ', '-').toLowerCase(),
            author: quoteCopy.author,
            quote: quoteCopy.quote
        };
        try {
            await axiosQuotes.put(`/quotes/${id}.json`, postQuote);
        } finally {
            props.history.goBack();
        }
    };

    const deleteQuote = async () => {
        try {
            await axiosQuotes.delete(`/quotes/${id}.json`);
        } finally {
            props.history.goBack();
        }
    }

    return (
        <section className="Edit-quote">
            <Sugar customLoading={loading}/>
            {quote !== null ? (
                    <Form
                    category={quote.category}
                    author={quote.author}
                    quote={quote.quote}
                    changed={e => onChangeQuote(e)}
                    submit={e => onSubmitChangedQuote(e)}
                    >
                        <Button btnType="submit" label="Edit" />
                        <Button btnType="button" label="Delete" clicked={deleteQuote} />
                    </Form>
            ) : null}
        </section>
    );
};

export default EditQuotePage;