import React, {useEffect, useState} from 'react';
import './MainPage.css';
import Navigation from "../../components/Navigation/Navigation";
import Quotes from "../../components/Quotes/Quotes";
import axiosQuotes from "../../axiosQuotes";
import {Sugar} from "react-preloaders";

let delayTime = 0.4;
let startQuery = null;
let endQuery = null;

const MainPage = props => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const quoteCategory = !props.match.params.category ? null : props.match.params.category;

    useEffect(() => {
        const getQuote = async () => {
            try {
                delayTime = 0.4;
                startQuery = new Date().getTime();
                const quoteResponse = await axiosQuotes
                    .get(`${quoteCategory ?  `/quotes.json?orderBy="category"&equalTo="${quoteCategory}"` : '/quotes.json'}`);
                const quotes = Object.keys(quoteResponse.data)
                    .map(item =>({
                        ...quoteResponse.data[item],
                        id: item
                    }));
                setQuotes(quotes);
            } finally {
                endQuery = new Date().getTime();
                delayTime += (endQuery - startQuery) / 1000;
                setLoading(false);
                console.log(delayTime);
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
                    <h2 className="Title">{Object.keys(props.match.params).length !== 0 ?
                            props.match.params.category.replace('-', ' ').toUpperCase()
                        :
                            'All'}</h2>
                    {quotes.length !== 0 ? (
                        <Quotes
                            quotes={quotes}
                            delay={delayTime}
                        />
                    ) : <p>Нет цитат. Вы можете добавить новую цитату в эту категорию.</p>}
                </section>
            </div>
        </main>
    );
};

export default MainPage;