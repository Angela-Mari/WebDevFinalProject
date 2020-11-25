import React from 'react'



class DiaryEntry extends React.Component {
    constructor(props) {
        super()
        this.state = {
            entryIndex : props.entryIndex,
            edit : false,
            delete : false,
            isShown : false
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
        paddingTop : 5,
        //paddingBottom : 5,
        margin : 10
    }

    const textStyle = {
        padding : 20
    }

    const button = {
        borderColor : "transparent",
        backgroundColor : "white",
        borderRadius : 20,
        margin : 5,
        paddingRight: 10,
        paddingLeft: 10
    }

    return (
        <div 
        onMouseEnter={() => this.setState({isShown : true})}
        onMouseLeave={() => this.setState({isShown : false})} 
        style = {{backgroundColor : "powderblue", margin : 10, padding :10, borderRadius : 20}}
        >
            
            <div style = {titleContainer}>
                <h2 >{this.props.entry.title}</h2>
                <h3 style = {{fontSize : 20, padding : 10}}>{this.props.entry.date}</h3>
            </div>   
            <hr />
            { this.state.isShown &&
                <p style = {textStyle}>{this.props.entry.text}</p>
            }

            <div>
                <button style = {button} name = "edit" onClick = {this.buttonClicked}>edit</button>
                <button style = {button} name = "delete" onClick = {this.buttonClicked}>delete</button>
            </div>
            
        </div>
    )
    } 
}

export default DiaryEntry