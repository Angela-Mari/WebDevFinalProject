import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import ChangeTheme from './ChangeTheme.js';
import DiaryCards from './DiaryCards.js';
import NewEntry from './NewEntry';
import QuoteContainer from './QuoteContainer'
import SocialMedia from './SocialMedia.js';
// store an array with quotes and append quotes as needed from newest
function Hub() {
    const { user, isAuthenticated } = useAuth0();
    const mainContent = {
        display: "flex",
        flexDirection: "row",
        alignItems : "flex-start"
    }
    const sidebar = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "green"

        
    }

    const entryArray = [
        {
        title: 'Best Day Ever',
        date: '2010-07-22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
      },
      {
        title: 'I met the love of my life',
        date: '2010-05-14',
        text: 'hah not really but Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a risus mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a risus mi.'
      },
      {
        title: 'My third entry',
        date: '2010-04-22',
        text: 'bruh does this even count?'
      }];



    const [displayArray, setArray] = React.useState(entryArray);
    const [newTitle, setTitle] = React.useState("");
    const [newDate, setDate] = React.useState("");
    const [newText, setText] = React.useState("");

     //console.log(displayArray)
      //console.log(displayArray)
    //const [changeEntry, setEntry] = React.useState({});

    function submitHandler(myNewEntry) {
        console.log("submitHandler")
        setArray([...displayArray, myNewEntry])
        setTitle("")
        setDate("")
        setText("")
    }

    function changeHandler(editObject){
        console.log("hub -> diary cards")
        if (editObject.change === "delete"){
            deleteEntry(editObject)
        }
        else {
            editEntry(editObject)
        }
        
    }

    function deleteEntry(editObject) {
       setArray(displayArray => displayArray.filter((item , i) => { 
           if (i !== editObject.entryIndex-1)
            return item }))
    }

    function editEntry(editObject) {
        console.log("edit")
        let editThisEntry = displayArray[editObject.entryIndex-1];
        setTitle(editThisEntry.title)
        setDate(editThisEntry.date)
        setText(editThisEntry.text)
        deleteEntry(editObject)
    }

    return (
        isAuthenticated && (
            <div>
                <div className = "header">
                    <h1>Daily Diary Hub</h1>
                    <QuoteContainer />
                    <div className = "navBttns">
                        
                        <img src = {user.picture} alt = {user.name} className = "profilePic"/>
                        <LogoutButton />
                        <ChangeTheme />
                    </div>
                </div>
                <div style = {mainContent}>
                    
                    <div style = {sidebar}>   
                        <NewEntry title = {newTitle} date = {newDate} text = {newText} submitHandler = {submitHandler}/>
                        <SocialMedia />
                    </div>
                    
                    <DiaryCards entries = {displayArray} changeHandler = {changeHandler} />
                </div>
                {/*JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Hub