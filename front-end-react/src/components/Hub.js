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
        date: '10/10/2010',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
      },
      {
        title: 'I met the love of my life',
        date: '10/20/2013',
        text: 'hah not really but Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a risus mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a risus mi.'
      },
      {
        title: 'My third entry',
        date: 'noone',
        text: 'bruh does this even count?'
      }];

    const [newestEntry, setEntry] = React.useState({});
    const [displayArray, setArray] = React.useState(entryArray);
     //console.log(displayArray)
      //console.log(displayArray)
    //const [changeEntry, setEntry] = React.useState({});

    function submitHandler(myNewEntry) {
        console.log("submitHandler")
        //setEntry(myNewEntry)
        setArray([...displayArray, myNewEntry])
        //console.log(newestEntry);
        //entryArray.push(newestEntry);
        //console.log(myNewEntry)
        //console.log(entryArray.length)
        //updateArray()
    }

    function changeHandler(editObject){
        console.log("hub -> diary cards")
        deleteEntry(editObject)
    }

    function deleteEntry(editObject) {
       console.log(editObject.entryIndex)
       entryArray.splice(editObject.entryIndex)
       console.log("delete")
       updateArray()
    }

    function updateArray() {
        console.log("updatting display")
        setArray(entryArray)  
        console.log(displayArray)
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
                        <NewEntry newestEntry = {newestEntry} submitHandler = {submitHandler}/>
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