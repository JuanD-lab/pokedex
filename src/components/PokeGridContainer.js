import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Card from './Card'

function PokeGridContainer({query}) {
  const [datas, setDatas] = useState([])
  
  useEffect(() => {
    const promise = axios(`https://pokeapi.co/api/v2/type/${query}`)
    promise.then((response) => {
      setDatas(response.data.pokemon.slice(0,4))
    })
  }, [query])

  const arrayCharactersMap = datas.map((value) => (
    <Card arr={value.pokemon.url}/>
  ));
  
  return (
      <div className="PokeGridContainer">
        {datas.length > 0 ? arrayCharactersMap : "No pokemons here"}
      </div>
    )
}

export default PokeGridContainer