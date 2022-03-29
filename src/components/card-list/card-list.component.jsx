import React from 'react';
import './card-list.css';

const CardList = ({ searchResult }) => {
    return(
        <div className='card-list'>
            {
                searchResult.map((result) => (
                    <div key={result.id} className='card-container'>
                        <img src={`https://robohash.org/${result.id}?set=set2&size=180x180`} alt='monster bitches' />
                        <h2>{result.name}</h2>
                        <p>{result.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardList;