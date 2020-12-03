import React from 'react'
import axios from 'axios'
import QuoteDB from '../../backend/models/quote.model'

const quotesInner = {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
}

const style = {
    borderRadius : 50,
    borderColor : "transparent",
    margin : 5,
    padding : 5
}

const button = {
    borderColor : "transparent",
    backgroundColor : "white",
    borderRadius : 20,
    margin : 5,
    paddingRight: 10,
    paddingLeft: 10
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

        //temp url!
        axios.post('https://localhost:3000/quotes/add', QuoteDB)
            .then(res => console.log(res.data));
    }

    render () {
        return (
            <div style = {quotesInner}>
                <input style = {style} name= "quote" onChange = {this.changeHandler} placeholder = "type new quote" />
                <input style = {style} name= "author" onChange = {this.changeHandler} placeholder = "type author" />
                <button style = {button} onClick = {this.submitHandler}> done </button>
            </div>
        )}

    

    
}

export default QuoteForm


