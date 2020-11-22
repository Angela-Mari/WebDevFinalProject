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



class QuoteContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            index: 0,
            length: myQuotes.length -1 
        }
        this.backupIndex = this.backupIndex.bind(this)
        this.forwardIndex = this.forwardIndex.bind(this)
    }

    backupIndex(){
        this.setState(prevState => {
            
            if (prevState.index -1 < 0){
                return {
                    index : prevState.length,
                    length : prevState.length
                }
            }
            else {
                return {
                    index : prevState.index - 1,
                    length : prevState.length
                }
            } 
        })
    }

    forwardIndex(){
        this.setState(prevState => {
            
            if (prevState.index +1 > prevState.length){
                return {
                    index : 0,
                    length : prevState.length
                }
            }
            else {
                return {
                    index : prevState.index + 1,
                    length : prevState.length
                }
            } 
        })
    }

    render() {

        return(
            <div style = {displayQuotes}>
                <button onClick = {this.backupIndex}>back</button>
                <div style = {quotesInner}>
                    <h3>{myQuotes[this.state.index].quote}</h3>
                    <p>-{myQuotes[this.state.index].author}</p>
                    <button>+</button>
                </div>
                <button onClick = {this.forwardIndex}>forward</button>
            </div>
        )
    }  
}

export default QuoteContainer