import React from 'react';
import DiaryEntry from './DiaryEntry'
import axios from 'axios';

class DiaryCards extends React.Component {

    constructor(props){
        super()
        this.state = {
            entries: [],
            didMount: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/entries')
            .then(response=> {
                if (response.data.length > 0){
                    this.setState({
                        entries: response.data.map( function(obj) {
                            let entry = {
                                id : obj._id,
                                username : obj.username,
                                title : obj.title,
                                text: obj.text,
                                date: obj.date
                            }
                            return entry;    
                        }),
                        length: response.data.length,
                        didMount: true
                    })
                }
            })
    }


    render(){
        
        const myGridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
        }

        

        const entriesArray = this.state.entries.map((item, curIndex = 0) => {
        
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