import React, {useEffect, useState} from 'react';
import './MainPage.css';
import Navigation from "../../components/Navigation/Navigation";
import Quotes from "../../components/Quotes/Quotes";
import axiosQuotes from "../../axiosQuotes";
import {Sugar} from "react-preloaders";

const MainPage = props => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const quoteCategory = !props.match.params.category ? null : props.match.params.category;

    useEffect(() => {
        const getQuote = async () => {
            try {
                const quoteResponse = await axiosQuotes
                    .get(`${quoteCategory ?  `/quotes.json?orderBy="category"&equalTo="${quoteCategory}"` : '/quotes.json'}`);
                const quotes = Object.keys(quoteResponse.data)
                    .map(item =>({
                        ...quoteResponse.data[item],
                        id: item
                    }));
                setQuotes(quotes);
            } finally {
                setLoading(false);
            }
        };
        getQuote().catch(console.error);
    }, [quoteCategory]);


    return (
        <main className="Main-page">
            <Sugar
                customLoading={loading}
            />
            <div className="container Main-page__inner">
                <aside className="Main-page__aside">
                    <Navigation />
                </aside>
                <section className="Main-page__content">
                    {quotes.length !== 0 ? (
                        <Quotes
                            quotes={quotes}
                        />
                    ) : <p>Нет цитат</p>}
                </section>
            </div>
        </main>
    );
};

export default MainPage;