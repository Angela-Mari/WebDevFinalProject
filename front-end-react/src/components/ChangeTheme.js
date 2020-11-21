import React from 'react';

const ChangeTheme = () => {
    
    function cycleTheme(){
        console.log('cycle theme')
    }

    return (
            <button onClick = {() => cycleTheme()}>
                Change Theme
            </button>
    )
}

export default ChangeTheme