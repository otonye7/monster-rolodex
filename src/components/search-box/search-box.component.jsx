import React from 'react';
import './search-box.css';

const SearchBox = ({ handleChange, placeholder }) => {
    return(
        <div>
             <input className='search-box' type='search' placeholder={placeholder ? placeholder : "Search Monsters"} onChange={handleChange} />
        </div>
    )
}

export default SearchBox