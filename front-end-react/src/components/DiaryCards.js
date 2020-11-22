import React from 'react';
import DiaryEntry from './DiaryEntry'
import Entries from './Entries'

function DiaryCards() {

    const myGridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
    }

    const entriesArray = Entries.map(item => <DiaryEntry entry = {item}/>)
    return (
        <div style = {myGridStyle}>
            {entriesArray}
        </div>
    )
    
}

export default DiaryCards