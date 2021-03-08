import "./App.css";
import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import { ProvideAuth } from "./provider/Auth";
import Search from './components/Search'
import PokeGridContainer from './components/PokeGridContainer'
import Pokemon from "./components/Pokemon"
import Encounters from './components/Encounters'
import Home from './components/Home'


function App() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([])

  /* Llamada para obtener los types y mapearlos en un select>option en <Search/> */
  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/type/`)
    promise.then((response) => {
      setOptions(response.data.results)
    })
  }, [])

  const handleSearch = (queryValue) => {
    setQuery(queryValue);
  };

  return (
    <ProvideAuth>
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/pokedex">
              <Search onSearch={handleSearch} options={options}/>
              {query && <PokeGridContainer query={query} />}
          </Route>

          <Route
            path="/pokemon/:id"
            render={({ match }) => (
              <Pokemon match={match} />
            )}
          />

          <Route 
            path="/:id/en"
            render={({ match }) => (
              <Encounters match={match} />
            )}
          />

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
      </div>  
    </Router>
    </ProvideAuth>
  );
}

export default App;
