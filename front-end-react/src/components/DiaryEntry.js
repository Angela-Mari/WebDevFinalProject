import React from 'react'



class DiaryEntry extends React.Component {
    constructor(props) {
        super()
        this.state = {
            entryIndex : props.entryIndex,
            edit : false,
            delete : false
        }
        this.buttonClicked = this.buttonClicked.bind(this)
    }
    
    buttonClicked(event){
        if (event.target.name === "edit"){
            this.props.changeHandler(
                {entryIndex: this.props.entryIndex,
                    change: "edit"
            })

        }
        else{
            this.props.changeHandler(
                {entryIndex: this.props.entryIndex,
                    change: "delete"
            })
        }  
    }
    
    render () {
        
    const titleContainer = {
        display: "flex",
        flexDirection : "row",
        alignItems: "center",
        padding : 20,
    }

    return (
        <div>
            
            <div style = {titleContainer}>
                <h2>{this.props.entry.title}</h2>
                <h3>{this.props.entry.date}</h3>
            </div>   
            <hr />
            <p>{this.props.entry.text}</p>
            <button name = "edit" onClick = {this.buttonClicked}>edit</button>
            <button name = "delete" onClick = {this.buttonClicked}>delete</button>
        </div>
    )
    } 
}

export default DiaryEntry