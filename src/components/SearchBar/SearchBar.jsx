import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const changeValue = (event) => {
        setSearchQuery(event.target.value);
        props.setSearchQuery(event.target.value);
    }

    const addItem = (event) => {
        if(event.key === 'Enter') {
            props.addItem(searchQuery);
            setSearchQuery('');
            props.setSearchQuery(null);
        }
    }

    return (
        <div>
            <input value={searchQuery} className="search-input" onChange={changeValue} onKeyPress={addItem}/>
        </div>
    );
};

export default SearchBar;