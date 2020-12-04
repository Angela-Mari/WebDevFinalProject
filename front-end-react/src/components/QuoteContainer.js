import React from 'react';
import QuoteForm from './QuoteForm';
import axios from 'axios';

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
            length: 0,
            quotes: [],
            didMount: false,
            showMyComponent : true
        }
        this.backupIndex = this.backupIndex.bind(this)
        this.forwardIndex = this.forwardIndex.bind(this)
        this.addQuote = this.addQuote.bind(this)
        this.submitQuote = this.submitQuote.bind(this)
        this.minusQuote = this.minusQuote.bind(this)
    }

    componentDidMount() {
        console.log("mounting...")
        axios.get('http://localhost:5000/quotes')
            .then(response=> {
                if (response.data.length > 0){
                    this.setState({
                        quotes: response.data.map( function(obj) {
                            let quote = {
                                id : obj._id,
                                text : obj.text,
                                author: obj.author
                            }
                            return quote;    
                        }),
                        length: response.data.length,
                        didMount: true
                    })
                }
            })
    }

    backupIndex(){
        if (this.state.length === 1){
            return;
        }
        this.setState(prevState => {
            
            if (prevState.index -1 < 0){
                return {
                    index : prevState.length-1
                }
            }
            else {
                return {
                    index : prevState.index - 1
                }
            } 
        })
    }

    forwardIndex(){

        if (this.state.length === 1){
            return;
        }
        
        this.setState(prevState => {
            
            if (prevState.index + 1 === prevState.length){
                return {
                    index : 0,
                }
            }
            else {
                return {
                    index : prevState.index + 1,
                }
            } 
        })
    }

    addQuote(){
        //console.log("add quote")
        this.setState(prevState => {
            return {
                showMyComponent : !prevState.showMyComponent
            }
        })
    }

    minusQuote(){

        if (this.state.length === 0){
            return
        }
        let id = this.state.quotes[this.state.index].id;
        axios.delete('http://localhost:5000/quotes/' + id)
            .then(res => console.log(res.data));
        
        this.setState(prevState => {
            return{
                quotes: prevState.quotes.filter(quote => quote.id !== id),
                length: prevState.length -1,
                index: 0
            }
        })
    }

    submitQuote(newQuote){
        console.log(newQuote)
        
        const dbQuote = {
            username: this.props.id, //pass down username from auth0 later
            text: newQuote.quote,
            author: newQuote.author
        }

        //temp url!
        axios.post('http://localhost:5000/quotes/add', dbQuote)
            .then((response) => {
                
                console.log(response.data)

                //if(response.statusCode === 201){

                    this.setState(prevState => {
                        return {
                            showMyComponent : !prevState.showMyComponent
                        } 
                    })

                    this.componentDidMount();  
                //}    // Your function call
            });

        
    }

    render() {
        
        return(
            <div style = {displayQuotes}>
                <button style = {moveButton }onClick = {this.backupIndex}>&lt;</button>
                <div>
                    { this.state.showMyComponent && 
                    <div style = {quotesInner}>
                        <h3>{(this.state.didMount && this.state.length > 0) && this.state.quotes[this.state.index].text} {this.state.length === 0 && "add new quote"}</h3>
                        <h4>- {(this.state.didMount && this.state.length >0) && this.state.quotes[this.state.index].author} {this.state.length === 0 && "by author"}</h4>
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