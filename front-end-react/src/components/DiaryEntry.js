import React from 'react'



class DiaryEntry extends React.Component {
    constructor(props) {
        //console.log(props)
        super()
        this.state = {
            edit : false,
            delete : false,
            isShown : false
        }
        this.buttonClicked = this.buttonClicked.bind(this)
    }
    
    buttonClicked(event){
        if (event.target.name === "edit"){
            console.log(this.props.entry)
            this.props.changeHandler(
                {entry: this.props.entry,
                    change: "edit"
            })

        }
        else{
            this.props.changeHandler(
                {entry: this.props.entry,
                    id: this.props.id,
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
        onClick={() => this.setState(
            prevState => {return {isShown : !prevState.isShown}}
            )}
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