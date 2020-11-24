import React from 'react';
import QuoteForm from './QuoteForm';

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

let myQuotes = [{
    quote: 'Turn the music up!',
    author: 'me',
  },
  {
    quote: 'Choose your music',
    author: 'you',
  },
  {
    quote: 'Unlimited, streaming, ad-free',
    author: 'noone',
  }
  ];

class QuoteContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            index: 0,
            length: myQuotes.length -1,
            showMyComponent : true
        }
        this.backupIndex = this.backupIndex.bind(this)
        this.forwardIndex = this.forwardIndex.bind(this)
        this.addQuote = this.addQuote.bind(this)
        this.submitQuote = this.submitQuote.bind(this)
        this.minusQuote = this.minusQuote.bind(this)
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

    addQuote(){
        console.log("add quote")
        this.setState(prevState => {
            return {
                index: myQuotes.length-1,
                length : myQuotes.length-1,
                showMyComponent : !prevState.showMyComponent
            }
        })
    }

    minusQuote(){
        console.log("minus")
        if (myQuotes.length === 1){
            myQuotes[0].quote = ""
            myQuotes[0].author = ""
            this.setState({})
            return
        }
        console.log(this.state.index)
        myQuotes.splice(this.state.index, this.state.index+1)
        console.log(myQuotes)
        this.setState(prevState => {
            return {
                index: 0,
                length : myQuotes.length-1,
                showMyComponent : prevState.showMyComponent
            }
        })
    }

    submitQuote(newQuote){
        console.log(newQuote)
        myQuotes.push(newQuote)
        this.setState(prevState => {
            return {
                index: myQuotes.length-1,
                length : myQuotes.length-1,
                showMyComponent : !prevState.showMyComponent
            } 
        })
        console.log(myQuotes)
    }
    render() {

        return(
            <div style = {displayQuotes}>
                <button onClick = {this.backupIndex}>back</button>
                <div>
                    { this.state.showMyComponent && 
                    <div style = {quotesInner}>
                        <h3>{myQuotes[this.state.index].quote}</h3>
                        <p>-{myQuotes[this.state.index].author}</p>
                        <button onClick = {this.addQuote}>+</button>
                        <button onClick = {this.minusQuote}>-</button>
                    </div>
                    }
                    {!this.state.showMyComponent && <QuoteForm submitQuote = {this.submitQuote}/>}
                    
                </div>
                <button onClick = {this.forwardIndex}>forward</button>
            </div>
        )
    }  
}

export default QuoteContainer