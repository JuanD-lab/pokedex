import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './components/Search'
import PokeGridContainer from './components/PokeGridContainer'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [datas, setDatas] = useState('');
  const [query, setQuery] = useState("");
  
  const url = 'https://pokeapi.co/api/v2/type/1'
  useEffect(() => {
    const promise = axios(url);

    promise.then((res) => {
      setDatas(res.data.id);
      console.log(res.data);
    });
  }, []);

  const handleSearch = (queryValue) => {
    setQuery(queryValue);
    console.log(queryValue);
  };

  return (
    <Router>
      <div className="App">
        <Search onSearch={handleSearch}/>
        {query && <PokeGridContainer query={query} />}
      </div>
    </Router>
  );
}

export default App;
