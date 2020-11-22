import { findByLabelText } from '@testing-library/react';
import React from 'react';

function NewEntry () {
    const NewEntryContainer = {
        //display: "flex",
        //flexDirection: "column",

        padding : 20,
    }
    return (
        <div style = {NewEntryContainer}>
            <h2>Today</h2>
            <hr />
            <p>
                <label for = "newTitle">Title:  </label>
                <input type="text" ></input>
            </p>
            
            <p>
                <label for = "newDate">Date: </label>
                <input type="date" id="newDate"></input>
            </p>
            
            <p> 
                <textarea rows="7"></textarea>
                <button>Done</button>
            </p>
            
        </div>

    )
}

export default NewEntry