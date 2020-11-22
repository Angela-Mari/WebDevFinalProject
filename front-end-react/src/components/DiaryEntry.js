import React from 'react'

function DiaryEntry(props) {

    const titleContainer = {
        display: "flex",
        flexDirection : "row",
        alignItems: "center",
        padding : 20,
    }
    console.log(props.entry)
    console.log(props.entry.title)
    console.log("bruh")
    return (
        <div>
            <div style = {titleContainer}>
                <h2>{props.entry.title}</h2>
                <h3>{props.entry.date}</h3>
            </div>   
            <hr />
            <p>{props.entry.text}</p>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default DiaryEntry