import React from 'react';
import myQuotes from './Quotes';

const displayQuotes = {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    padding: 20
}

const quotesInner = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
}

function QuoteContainer(){
    return(
        <div style = {displayQuotes}>
            <button>back</button>
            <div style = {quotesInner}>
                <h3>{myQuotes[0].quote}</h3>
                <p>-{myQuotes[0].author}</p>
                <button>+</button>
            </div>
            <button>forward</button>
        </div>
    )
}

export default QuoteContainer