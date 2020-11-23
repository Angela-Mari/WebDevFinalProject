import React from 'react';

class NewEntry extends React.Component {
    constructor () {
        super()
        this.state = {
            //date and text are not passed in correctly from handelChange
            title : '',
            date : '',
            text : ''
        }
        this.handelChange = this.handelChange.bind(this)
        this.submiter = this.submiter.bind(this)
    }

    handelChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    submiter(event){
        event.preventDefault()
        this.props.submitHandler(this.state)
    }

    render () {
        

        const NewEntryContainer = {
            //display: "flex",
            //flexDirection: "column",
    
            padding : 20,
        }

        return (
            <form style = {NewEntryContainer}>
                <h2>Today</h2>
                <hr />
                <p>
                    <label for = "newTitle">Title:  </label>
                    <input type="text" name= "title" onChange = {this.handelChange} />
                </p>
                
                <p>
                    <label for = "newDate">Date: </label>
                    <input type="date" name= "date" id="newDate" onChange = {this.handelChange}/>
                </p>
                
                <p> 
                    <textarea name="text" rows="7" onChange = {this.handelChange}/>
                    <button onClick = {this.submiter}>Done</button>
                </p>
                
            </form>

        )
    }
}

export default NewEntry