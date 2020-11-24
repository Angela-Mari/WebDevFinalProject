import React from 'react'

const quotesInner = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
}

class QuoteForm extends React.Component{
    constructor(props){
        super()
        this.state = {
            quote: "",
            author: ""
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event){
        console.log("isChanging")
        const {name, value} = event.target 
        this.setState({[name] : value}    
        )
    }

    submitHandler(){
        console.log("done")
        this.props.submitQuote(this.state)
    }

    render () {
        return (
            <div style = {quotesInner}>
                <input name= "quote" onChange = {this.changeHandler} placeholder = "type new quote" />
                <input name= "author" onChange = {this.changeHandler} placeholder = "type author" />
                <button onClick = {this.submitHandler}> done </button>
            </div>
        )}

    

    
}

export default QuoteForm


