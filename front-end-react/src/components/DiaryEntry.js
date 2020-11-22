import React from 'react'

function DiaryEntry(props) {

    const titleContainer = {
        display: "flex",
        flexDirection : "row",
        alignItems: "center",
        padding : 20,
    }

    return (
        <div>
            <div style = {titleContainer}>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>   
            <hr />
            <p>{props.text}</p>
        </div>
    )
}

export default DiaryEntry