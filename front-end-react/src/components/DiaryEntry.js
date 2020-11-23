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
        const change = event.target.name;
        this.setState({[change]: true}, () => { 
            console.log("set state DiaryEntry")
            console.log(this.state)
            this.props.changeHandler(this.state)
        });
          
        
    }
    
    render () {
        
    const titleContainer = {
        display: "flex",
        flexDirection : "row",
        alignItems: "center",
        padding : 20,
    }

    //console.log("diary entry:")
    //console.log(this.props.entryIndex)
    //console.log(this.props.entry)
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