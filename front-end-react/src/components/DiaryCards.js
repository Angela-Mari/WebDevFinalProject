import React from 'react';
import DiaryEntry from './DiaryEntry'

class DiaryCards extends React.Component {

    constructor(props){
        super()
        this.state = {
            entries : props.entries 
        }
        //console.log(this.state.entries)
    }

    render(){
        const myGridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
        }

        const entriesArray = this.state.entries.map((item, curIndex) => {
        return (<DiaryEntry entry = {item} entryIndex = {curIndex}/>)});
        
        return (
            <div style = {myGridStyle}>
                {entriesArray}
            </div>
        )
    }
}

export default DiaryCards