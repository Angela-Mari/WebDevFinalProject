import React from 'react';
import DiaryEntry from './DiaryEntry'

class DiaryCards extends React.Component {

    constructor(props){
        super()
        
        //this.changeHandler = this.changeHandler.bind(this)
        //console.log(this.state.entries)
    }

    render(){
        //console.log("rendering diary cards")
        //console.log(this.props.entries)
        const myGridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
        }
        const entriesArray = this.props.entries.map((item, curIndex = 0) => {
        //console.log("item:")
        //console.log(item)
        ++curIndex
        return (<DiaryEntry entry = {item} key = {curIndex} entryIndex = {curIndex} changeHandler = {this.props.changeHandler}/>)
        });
        

        return (
            <div style = {myGridStyle}>
                {entriesArray}
            </div>
        )
    }
}

export default DiaryCards