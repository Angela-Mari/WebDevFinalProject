import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import ChangeTheme from './ChangeTheme.js';
import DiaryCards from './DiaryCards.js';
import NewEntry from './NewEntry';
import QuoteContainer from './QuoteContainer'
import SocialMedia from './SocialMedia.js';

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

    
    return (
        isAuthenticated && (
            <div>
                <div className = "header">
                    <h1>Daily Diary Hub</h1>
                    
                    <div className = "navBttns">
                        
                        <img src = {user.picture} alt = {user.name} className = "profilePic"/>
                        <LogoutButton />
                        <ChangeTheme />
                    </div>
                </div>
                <div style = {mainContent}>
                    <div style = {sidebar}>
                        <QuoteContainer />
                        <NewEntry />
                        <div>
                            <SocialMedia />
                        </div>
                    </div>
                    
                    <DiaryCards />
                </div>
                {/*JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Hub