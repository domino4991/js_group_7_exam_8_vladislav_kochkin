import React, {useState} from 'react';
import './AddNewQuote.css';
import Form from "../../components/UI/Form/Form";
import axiosQuotes from "../../axiosQuotes";

const AddNewQuote = props => {
    const [newQuote, setNewQuote] = useState({
        category: 'all',
        author: '',
        quote: ''
    });

    const onChangeNewQuote = e => {
        const name = e.target.name;
        const value = e.target.value;
        setNewQuote(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitNewQuote = async e => {
        e.preventDefault();
        const newQuoteCopy = {...newQuote};
        const postQuote = {
            category: newQuoteCopy.category.replace(' ', '-').toLowerCase(),
            author: newQuoteCopy.author,
            quote: newQuoteCopy.quote
        };
        try {
            await axiosQuotes.post('/quotes.json', postQuote);
        } finally {
            setNewQuote({
                category: "all",
                author: '',
                quote: ''
            });
            props.history.replace('/');
        }
    };

    return (
        <section className="New-quote">
            <div className="container New-quote__inner">
                <Form
                    category={newQuote.category}
                    author={newQuote.author}
                    quote={newQuote.quote}
                    changed={e => onChangeNewQuote(e)}
                    submit={e => onSubmitNewQuote(e)}
                />
            </div>
        </section>
    );
};

export default AddNewQuote;