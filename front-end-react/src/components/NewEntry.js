import React from 'react';

class NewEntry extends React.Component {
    constructor (props) {
        super()
        this.state = {
            title : props.title,
            date : props.date,
            text : props.text

        }
        this.handelChange = this.handelChange.bind(this)
        this.submiter = this.submiter.bind(this)
    }

    handelChange(event) {
        console.log("is changing")
        
        const {name, value} = event.target
        this.setState({
            [name] : value
        })

        console.log(this.state)
        this.props.updateValue(this.state)
    }

    submiter(event){
        event.preventDefault()
        this.props.submitHandler(this.state)      
    }

    
    render () {
        console.log("newTitle")
        console.log(this.props.title)

        const NewEntryContainer = {
            //display: "flex",
            //flexDirection: "column",
    
            padding : 20,
        }

        return (
            <form style = {NewEntryContainer}>
                <h2>Write Entry</h2>
                <hr />
                <p>
                    <label for = "newTitle">Title:  </label>
                    <input type="text" name= "title" value = {this.props.title} onChange = {this.handelChange} />
                </p>
                
                <p>
                    <label for = "newDate">Date: </label>
                    <input type="date" name= "date" id="newDate" value = {this.props.date} onChange = {this.handelChange}/>
                </p>
                
                <p> 
                    <textarea name="text" rows="7" value = {this.props.text} onChange = {this.handelChange}/>
                    <button onClick = {this.submiter}>Done</button>
                </p>
                
            </form>

        )
    }
}

export default NewEntry