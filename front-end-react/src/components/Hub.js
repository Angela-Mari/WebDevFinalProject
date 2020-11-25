import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import DiaryCards from './DiaryCards.js';
import NewEntry from './NewEntry';
import QuoteContainer from './QuoteContainer'
import SocialMedia from './SocialMedia.js';
import SearchBar from './SearchBar'
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
        //backgroundColor: "green"

        
    }
    const displayEntries = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        //backgroundColor: "pink"

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

      const button = {
        borderColor : "transparent",
        backgroundColor : "white",
        borderRadius : 20,
        margin : 5,
        paddingRight: 10,
        paddingLeft: 10
    }

    const [displayArray, setArray] = React.useState(entryArray);
    const [searchArray, setSearch] = React.useState([])
    const [newTitle, setTitle] = React.useState("");
    const [newDate, setDate] = React.useState("");
    const [newText, setText] = React.useState("");

    function submitHandler(myNewEntry) {   
        setArray([...displayArray, myNewEntry])
        setTitle("")
        setDate("")
        setText("")
    }

    function changeHandler(editObject){
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
            return item })
            )
    }

    function editEntry(editObject) {
        let editThisEntry = displayArray[editObject.entryIndex-1];
        setTitle(editThisEntry.title)
        setDate(editThisEntry.date)
        setText(editThisEntry.text)
        deleteEntry(editObject)
    }

    function updateValue(newValues){
        if (newValues.title){
            setTitle(newValues.title)
        }
        if (newValues.date){
            setDate(newValues.date)
        }
        if (newValues.text){
            setText(newValues.text)
        }
    }
    
    function searchHandler(keyword) {
        if (keyword !== ""){
            setSearch(displayArray.filter((item , i) => { 
                if (displayArray[i].text.includes(keyword) || displayArray[i].title.includes(keyword))
                {
                 return item 
                }
            }))
        }
        else {
            setSearch([])
        }
    }

    const [pink, setHeader] = React.useState({backgroundColor: "pink"})
    const [darkPink, setSidebar] = React.useState({backgroundColor: "palevioletred"})
    const [themeIndex, setIndex] = React.useState(1)
    function cycleTheme(){
        let headerColors = ["pink", "CornflowerBlue", "DarkSeaGreen"]
        let sideColors = ["palevioletred", "aliceBlue", "SeaGreen"]
        setHeader({backgroundColor : headerColors[themeIndex]})
        setSidebar({backgroundColor : sideColors[themeIndex]})
        setIndex((themeIndex + 1)%3)
    }

    return (
        isAuthenticated && (
            <div>
                <div className = "header" style = {pink}>
                    <h1>Daily Diary Hub</h1>
                    <QuoteContainer />
                    <div className = "navBttns">
                        <img src = {user.picture} alt = {user.name} className = "profilePic"/>
                        <LogoutButton />
                        <button style = {button} onClick = {cycleTheme}>
                            Change Theme
                        </button>
                    </div>
                </div>
                <div style = {mainContent}>
                    
                    <div style = {sidebar, darkPink} className = "side-bar">  
                        <NewEntry title = {newTitle} date = {newDate} text = {newText} submitHandler = {submitHandler} updateValue = {updateValue}/>
                        <SocialMedia />
                    </div >
                    <div style = {displayEntries}>
                        <SearchBar searchHandler = {searchHandler} value = ""/>
                        <DiaryCards entries = {searchArray.length > 0  ? searchArray : displayArray} changeHandler = {changeHandler} />
                    </div>
                    
                </div>
                {/*JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Hub