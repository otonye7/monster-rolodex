import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(res.data)
  }

  return (
    <div className="App">
        {
          data.map((result) => {
            return(
              <h2 key={result.id}>{result.name}</h2>
            )
          })
        }
    </div>
  );
}

export default App;
