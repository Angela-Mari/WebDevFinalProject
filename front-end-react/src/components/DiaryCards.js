import React from 'react';
import DiaryEntry from './DiaryEntry'
import axios from 'axios';

class DiaryCards extends React.Component {

    constructor(props){
        super()
    }

    render(){
        
        const myGridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
        }

        

        const entriesArray = this.props.entries.map((item, curIndex = 0) => {
        
        ++curIndex
        return (<DiaryEntry edit = {false} delete = {false} entry = {item} key = {item.id} changeHandler = {this.props.changeHandler}/>)
        });
        

        return (
            <div style = {myGridStyle}>
                {entriesArray}
            </div>
        )
    }
}

export default DiaryCards