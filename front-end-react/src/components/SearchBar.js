import React from 'react';


function SearchBar(props){

    function changeHandler(event){
        props.searchHandler(event.target.value);
    }

    
    return (
        <div>
            <input type = "text" placeholder = "search entry..." onChange = {changeHandler} id = "search-bar"/>
        </div>
    )
}

export default SearchBar