import React from 'react';
import DiaryEntry from './DiaryEntry'

function DiaryCards() {

    const myGridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
    }
    
    return (
        <div style = {myGridStyle}>
            <DiaryEntry 
                title = "the worst day ever" 
                date = "12/25/2002" 
                text = "gjaoiernvinwivnriuqf euiv"
            />
            <DiaryEntry 
                title = "the best day ever" 
                date = "12/25/2002" 
                text = "gjaoiernvinwivnriuqf euiv"
            />
            <DiaryEntry 
                title = "the best day ever" 
                date = "12/25/2002" 
                text = "gjaoiernvinwivnriuqf euiv"
            />
        </div>
    )
    
}

export default DiaryCards