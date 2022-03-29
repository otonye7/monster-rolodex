import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(res.data)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const searchResult = data.filter((result) => {
    return(
      result.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} />
      <CardList searchResult={searchResult} placeholder='Search Monsters'/>
    </div>
  );
}

export default App;
