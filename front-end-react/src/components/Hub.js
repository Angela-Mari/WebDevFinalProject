import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import DiaryCards from './DiaryCards.js';
import NewEntry from './NewEntry';
import QuoteContainer from './QuoteContainer'
import SocialMedia from './SocialMedia.js';
import SearchBar from './SearchBar'
import axios from 'axios';


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
    }

    const displayEntries = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }

      const button = {
        borderColor : "transparent",
        backgroundColor : "white",
        borderRadius : 20,
        margin : 5,
        paddingRight: 10,
        paddingLeft: 10
    }

    const [displayArray, setArray] = React.useState([]);
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

    const [main, setHeader] = React.useState()
    const [accent, setSidebar] = React.useState()
    const [profile, setProfile] = React.useState([])
    const [isLoaded, loaded] = React.useState(false)

    let headerColors = ["pink", "CornflowerBlue", "DarkSeaGreen"]
    let sideColors = ["palevioletred", "aliceBlue", "SeaGreen"]

    function loadProfile() {
       
        axios.get('http://localhost:5000/users')
            .then(response=> {
                if (response.data.length > 0){
                    console.log("looking for user")
                    console.log(response.data)
                    let curUser = response.data.filter(function (obj){
                        //console.log(obj.username)
                        //console.log(user.sub)
                        return obj.username === user.sub;
                    });

                    setProfile(curUser[0])
                    setHeader({backgroundColor : headerColors[profile.theme]})
                    setSidebar({backgroundColor : sideColors[profile.theme]})
                    loaded(true)
                    //return
                }
                else {
                    console.log("no user found, adding a new one")
                
                    const dbUser = {
                        username: user.sub,
                        theme: 1
                    }
                    addUser(dbUser)
                }   
            });
        
        axios.get('http://localhost:5000/entries')
            .then(response=> {
                if (response.data.length > 0){
                        let entries = response.data.filter( function(obj) {
                            if (obj.username == user.sub){
                                let entry = {
                                    id : obj._id,
                                    username : obj.username,
                                    title : obj.title,
                                    text: obj.text,
                                    date: obj.date
                                }
                                return entry;
                            }
                    })
                    setArray(entries)    
                }
            })

    }  
    
    function addUser(dbUser) {
            
        console.log("adding user...")
        axios.post('http://localhost:5000/users/add', dbUser)
        .then((response) => {
            console.log(response.data)
        });

        setProfile(dbUser)
        loaded(true)
    } 

    function cycleTheme(){
        console.log(profile.theme)
        var newIndex = profile.theme+1;
        if (newIndex > 2){
            newIndex = 0
        }

        setProfile({
            _id: profile._id,
            username: profile.username,
            theme: newIndex
          });

        console.log(profile.theme)
        setHeader({backgroundColor : headerColors[newIndex]})
        setSidebar({backgroundColor : sideColors[newIndex]})
        

        console.log(profile)
        let updateDB = {
            username: profile.username,
            theme: newIndex
        }

        axios.post('http://localhost:5000/users/update/' + profile._id, updateDB)
      .then(res => console.log(res.data));
    }

    useEffect(()=>{
        console.log("use effect")
        if (isAuthenticated){
        loadProfile()
        }
    }, [isAuthenticated, isLoaded]) 
    
    return (
        isAuthenticated && (
            <div>
                    
                <div className = "header" style = {main}>
                    <h1>Daily Diary Hub</h1>
                    <QuoteContainer id = {user.sub}/>
                    <div className = "navBttns">
                        <img src = {user.picture} alt = {user.name} className = "profilePic"/>
                        <LogoutButton />
                        <button style = {button} onClick = {cycleTheme}>
                            Change Theme
                        </button>
                    </div>
                </div>
                <div style = {mainContent}>
                    
                    <div style = {sidebar, accent} className = "side-bar">  
                        <NewEntry title = {newTitle} date = {newDate} text = {newText} submitHandler = {submitHandler} updateValue = {updateValue}/>
                        <SocialMedia />
                    </div >
                    <div style = {displayEntries}>
                        <SearchBar searchHandler = {searchHandler} value = ""/>
                        <DiaryCards entries = {searchArray.length > 0  ? searchArray : displayArray} changeHandler = {changeHandler} />
                    </div>
                    
                </div>
                
            </div>
        )
    )
}

export default Hub