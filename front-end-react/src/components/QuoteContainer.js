import React from 'react';
import QuoteForm from './QuoteForm';

const displayQuotes = {
    display: 'flex',
    flexDirection: 'row',
    padding: 20
}

const quotesInner = {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
}

let myQuotes = [{
    quote: 'You miss 100% of the shots you dont take. - Wayne Gretzy',
    author: 'Michael Scott',
  },
  {
    quote: "Mr. Vice President, I'm speaking. I'm speaking.",
    author: 'Kamala Harris',
  },
  {
    quote: 'Mom, I am a rich man.',
    author: 'Cher',
  }
  ];

  const button = {
    borderColor : "transparent",
    backgroundColor : "white",
    borderRadius : 20,
    margin : 5,
    paddingRight: 10,
    paddingLeft: 10
}

const moveButton = {
    borderColor : "transparent",
    height : 30,
    backgroundColor : "white",
    borderRadius : 20,
    marginTop : 30,
    paddingRight: 10,
    paddingLeft: 10
}

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
                <button style = {moveButton }onClick = {this.backupIndex}>&lt;</button>
                <div>
                    { this.state.showMyComponent && 
                    <div style = {quotesInner}>
                        <h3>{myQuotes[this.state.index].quote}</h3>
                        <h4>- {myQuotes[this.state.index].author}</h4>
                        <p><button style = {button} onClick = {this.addQuote}>+</button>
                        <button style = {button} onClick = {this.minusQuote}>-</button></p>
                        
                    </div>
                    }
                    {!this.state.showMyComponent && <QuoteForm submitQuote = {this.submitQuote}/>}
                    
                </div>
                <button style = {moveButton} onClick = {this.forwardIndex}>&gt;</button>
            </div>
        )
    }  
}

export default QuoteContainer