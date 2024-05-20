import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    const [data, setData] = useState({});

    const fetchRandomQuote = () => {
        axios
        .get("https://api.quotable.io/random")
        .then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const randomQuote = () => {
        fetchRandomQuote();
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        document.querySelector('.card').style.color = randomColor;
        document.querySelector('button').style.backgroundColor = randomColor;
    };

    return (
        <div className="card">
            <div className="quoteDiv">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote"/>
                <p className="content">{data.content}</p>
            </div>
            <p className="author">-{data.author}</p>
            <div className="divBtn">
                <button onClick={randomQuote}>New quote</button>
            </div>
        </div>
    );
};

export default Card;
