import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import ChangeTheme from './ChangeTheme.js';
import DiaryCards from './DiaryCards.js';
import NewEntry from './NewEntry';

function Hub() {
    const { user, isAuthenticated } = useAuth0();
    const mainContent = {
        display: "flex",
        flexDirection: "row",
        alignItems : "flex-start"
    }
    return (
        isAuthenticated && (
            <div>
                <div className = "header">
                    <h1>Daily Diary Hub</h1>
                    <div className = "quoteContainer">
                        this will store quotes
                    </div>
                    <div className = "navBttns">
                        <h2>{user.name}</h2>
                        <img src = {user.picture} alt = {user.name} className = "profilePic"/>
                        <LogoutButton />
                        <ChangeTheme />
                    </div>
                </div>
                <div style = {mainContent}>
                    <NewEntry />
                    <DiaryCards />
                </div>
                
                {/*JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Hub